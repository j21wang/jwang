import os
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__=='__main__':
    port = int(os.environ.get("PORT",2121))
    app.run(host='0.0.0.0',port=port)
