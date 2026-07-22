param([int]$Port = 8899, [string]$Root = "C:\Projetos\mentoria-leonardo")

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Servindo $Root em http://localhost:$Port/"

# Runspace pool so requests are handled concurrently and connections close promptly.
$pool = [runspacefactory]::CreateRunspacePool(1, 8)
$pool.Open()

$handler = {
  param($ctx, $Root)
  $mime = @{
    ".html"="text/html; charset=utf-8"; ".css"="text/css"; ".js"="application/javascript";
    ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".png"="image/png"; ".webp"="image/webp";
    ".svg"="image/svg+xml"; ".pdf"="application/pdf"; ".ico"="image/x-icon"; ".gif"="image/gif"
  }
  try {
    $path = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    if ($path -eq "/") { $path = "/index.html" }
    $ctx.Response.KeepAlive = $false
    if ($path -eq "/favicon.ico") {
      $ctx.Response.StatusCode = 204
    } else {
      $file = Join-Path $Root ($path.TrimStart("/"))
      if (Test-Path $file -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($file).ToLower()
        $ct = $mime[$ext]; if (-not $ct) { $ct = "application/octet-stream" }
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $ctx.Response.ContentType = $ct
        $ctx.Response.ContentLength64 = $bytes.Length
        $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      } else {
        $ctx.Response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
        $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
      }
    }
  } catch { }
  finally { try { $ctx.Response.Close() } catch { } }
}

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $ps = [powershell]::Create()
    $ps.RunspacePool = $pool
    [void]$ps.AddScript($handler).AddArgument($ctx).AddArgument($Root)
    [void]$ps.BeginInvoke()
  } catch { }
}
