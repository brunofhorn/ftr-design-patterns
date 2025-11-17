from flask import Flask 
from models.api import convert_text_to_audio
from utils import save_audio

from uuid

app = Flask(__name__)

@app.rout("/")
def hello():
    return "Hello"

@app.route("/text_to_audio", methods=["POST"])
def text_to_audio():
    text = request.json["text"]

    path = uuid.uuid4()
    audio = convert_text_to_audio(text)

    save_audio(audio, path)

    return path

@app.route("/audio/<path:audio_file>")
def get_audio(audio_file):
    return audio_file