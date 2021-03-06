from PIL import Image
from io import BytesIO

def main():
    og_img = Image.open('abigal_best_girl.png')#specify image to use
    border = 50 #amount of small pictures that make up a side of the completed picture
    fin_img = process(og_img, border)
    
    if input("Do you want to save completed picture?(y/n): ")[0].lower() == "y":
        name, ext = og_img.filename.split(".")
        fin_img.save(name+"_edited."+ext)
        print("Image saved")
    else:
        fin_img.show()

def process_image(file, border=50, size=3000):
    cell_res = size // border
    img_io = BytesIO()
    with Image.open(file) as im:
        fin_img = process(im, cell_res, border)
        fin_img.save(img_io, format='png')
    img_io.seek(0)
    return(img_io)


#makes a smaller version of the image and returns it
def smolify(image, cell_res):
    og_width = image.width
    og_height = image.height

    if og_width > og_height:
        new_width = cell_res
        new_height = int(new_width/og_width * og_height) 
    else:
        new_height = cell_res
        new_width = int(new_height/og_height * og_width)
    
    size = new_width,new_height
    
    return image.resize(size)

#Averages each pixel of the image with the passed in RGB color
def tint(im, r, g, b):
    source = im.split()
    R, G, B = 0, 1, 2
    outR = source[R].point(lambda i: (i+r)/2)
    outG = source[G].point(lambda i: (i+g)/2)
    outB = source[B].point(lambda i: (i+b)/2)
    # build a new multiband image
    im = Image.merge("RGB", (outR,outG,outB))
    return im

#does the image processing
#og_path is the path of the image to be processed
#border variable determines the amount of small pictures that make up one side of the completed picture
#if mode is set to s than the finished image will automatically be saved
def process(og_img, cell_res=50, border = 50, mode = None):
    og_width = og_img.width
    og_height = og_img.height
    smol_img = smolify(og_img, cell_res)
    smol_width = smol_img.width
    smol_height = smol_img.height
    fin_img = Image.new("RGB", (smol_width*border,smol_height*border))

    #do image processesing 
    for x in range(0, border):
        for y in range(0, border):
            pix_coord = (int(og_width/border*x), int(og_height/border*y))
            pix = og_img.getpixel(pix_coord)
            r = pix[0]
            g = pix[1]
            b = pix[2]
            tint_img = tint(smol_img, r, g, b)
            coord = (smol_width*x, smol_height*y)
            fin_img.paste(tint_img, coord)
    
    if mode == 's':
        name, ext = og_img.filename.split(".")
        fin_img.save(name+"_edited."+ext)
        print("Image saved")

    return fin_img
    
if __name__ == "__main__":
    main()