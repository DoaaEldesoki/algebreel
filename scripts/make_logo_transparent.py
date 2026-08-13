from PIL import Image

source = r"D:\algabreel\algbreel\public\logo\file.jpg"
out = r"D:\algabreel\algbreel\public\logo\file-transparent.png"

img = Image.open(source).convert("RGBA")
transformed = []
for r, g, b, a in img.getdata():
    # Remove nearly-white background while preserving the logo artwork.
    if r > 245 and g > 245 and b > 245:
        transformed.append((255, 255, 255, 0))
    else:
        transformed.append((r, g, b, 255))

new_img = Image.new("RGBA", img.size)
new_img.putdata(transformed)
new_img.save(out)
print(f"Saved transparent logo to: {out}")
