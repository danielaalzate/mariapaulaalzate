"""Export the existing reduced signature; never redraw or publish the master."""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
source = Image.open(root / 'assets/marca/firma-footer.png').convert('RGBA')
for directory in (root, root / 'dist'):
    for size in (32, 48, 180):
        canvas = Image.new('RGBA', (size, size), '#f6f1e8')
        signature = ImageOps.contain(source, (round(size * .88), round(size * .88)), Image.Resampling.LANCZOS)
        canvas.alpha_composite(signature, ((size-signature.width)//2, (size-signature.height)//2))
        canvas.save(directory / f'favicon-{size}.png')
    canvas = Image.new('RGBA', (64, 64), '#f6f1e8')
    signature = ImageOps.contain(source, (58, 58), Image.Resampling.LANCZOS)
    canvas.alpha_composite(signature, ((64-signature.width)//2, (64-signature.height)//2))
    canvas.save(directory / 'favicon.ico', sizes=[(16,16), (32,32), (48,48), (64,64)])
