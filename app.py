from flask import Flask, send_from_directory
from api.api import api_atomize
import os

app=Flask(__name__, static_folder="frontend/build")
app.register_blueprint(api_atomize)

# Serve React App
@app.route("/", defaults={"path": ""})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + "/" + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run()


