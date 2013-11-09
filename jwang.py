import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def jwang():
    return 'Hello World!'
