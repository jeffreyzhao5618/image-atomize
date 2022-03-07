from flask import Flask, request, Response
from flask_cors import CORS

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app=Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/atomize', methods=['POST'])
def atomize():
    return "testing"