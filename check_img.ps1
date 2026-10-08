Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap('C:\Users\aldul\.gemini\antigravity\scratch\almaazi\assets\images\logo.png')

for ($y = 88; $y -le 188; $y += 2) {
    $line = ""
    for ($x = 256; $x -le 355; $x += 1) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 80 -and $c.R -gt 150) {
            $line += "#"
        } else {
            $line += " "
        }
    }
    Write-Host $line
}
$bmp.Dispose()
