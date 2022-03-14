from flask import Flask, request, send_file
# from flask_cors import CORS
from image_atomizer import process_image
from io import BytesIO

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app=Flask(__name__)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/atomize', methods=['POST'])
def atomize():
    if 'file' not in request.files:
        return {"error": "Error: No file was uploaded."}
    file = request.files['file']
    if file.filename == '':
        return {"error": "Error: No file was uploaded."}
    if file and allowed_file(file.filename):
        border = 50 if ('border' not in request.form) else int(request.form['border'])
        img_io = process_image(file, border)
        return send_file(img_io, mimetype='image/png')
    if file and not allowed_file(file.filename):
        return {"error": "Error: Invalid file type. (Only png and jpg are valid)"}
    return {"error": "Something went wrong."}