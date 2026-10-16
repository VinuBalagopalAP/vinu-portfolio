"""Regenerate public/og-image.png (1200x630 social share card) and public/apple-touch-icon.png.

Run from the project root after changing your name, role, or current company:
    python3 scripts/og-image.py
Requires Pillow (pip install pillow). Uses macOS system fonts, falling back to Pillow's default.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

NAME = "Vinu Balagopal A P"
ROLE = "Founder & Product Engineer"
FIELDS = "FinTech · EdTech · Analytics"
PILL = "Currently building FillWire"
DOMAIN = "vinu.world"

W, H = 1200, 630


def font(size, bold=False):
    candidates = [
        ("/System/Library/Fonts/Helvetica.ttc", 1 if bold else 0),
        ("/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf", 0),
    ]
    for path, index in candidates:
        try:
            return ImageFont.truetype(path, size, index=index)
        except OSError:
            pass
    return ImageFont.load_default()


bg = Image.new("RGB", (W, H), "#f8f9fa")
draw = ImageDraw.Draw(bg)

# White card with a soft shadow, matching the site's section cards
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(shadow).rounded_rectangle((60, 60, W - 60, H - 60), radius=28, fill=(0, 0, 0, 22))
shadow = shadow.filter(ImageFilter.GaussianBlur(14))
bg.paste(shadow, (0, 4), shadow)
draw.rounded_rectangle((60, 60, W - 60, H - 60), radius=28, fill="#ffffff")

# Circular profile photo
size = 300
photo = Image.open("public/profile_pic.webp").convert("RGB").resize((size, size), Image.LANCZOS)
mask = Image.new("L", (size * 4, size * 4), 0)
ImageDraw.Draw(mask).ellipse((0, 0, size * 4, size * 4), fill=255)
mask = mask.resize((size, size), Image.LANCZOS)
px, py = 130, (H - size) // 2
photo_shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ImageDraw.Draw(photo_shadow).ellipse((px, py + 8, px + size, py + size + 8), fill=(0, 0, 0, 40))
photo_shadow = photo_shadow.filter(ImageFilter.GaussianBlur(12))
bg.paste(photo_shadow, (0, 0), photo_shadow)
bg.paste(photo, (px, py), mask)

# Text
x = px + size + 70
draw.text((x, 190), NAME, font=font(58, True), fill="#111111")
draw.text((x, 270), ROLE, font=font(34), fill="#343a40")
draw.text((x, 318), FIELDS, font=font(28), fill="#8f8f8f")
pill_font = font(26, True)
pill_width = draw.textlength(PILL, font=pill_font)
draw.rounded_rectangle((x, 380, x + pill_width + 44, 430), radius=25, fill="#111111")
draw.text((x + 22, 391), PILL, font=pill_font, fill="#ffffff")
draw.text((x, 462), DOMAIN, font=font(26), fill="#8f8f8f")

bg.save("public/og-image.png", optimize=True)
Image.open("public/favicon.jpeg").convert("RGB").resize((180, 180), Image.LANCZOS).save(
    "public/apple-touch-icon.png", optimize=True
)
print("Wrote public/og-image.png and public/apple-touch-icon.png")
