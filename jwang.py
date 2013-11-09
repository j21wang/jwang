import os
from flask import Flask
           import render_template

app = Flask(__name__)

@app.route('/')
def jwang(name=None):
    return render_template('index.html',name=name)

if __name__=='__main__':
    app.run()
