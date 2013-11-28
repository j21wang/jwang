import os
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')

@app.route('/projects', methods=['GET'])
def portfolio():
    return render_template('projects.html')

@app.route('/artwork', methods=['GET'])
def artwork():
    return render_template('artwork.html')

@app.route('/contact', methods=['GET'])
def contact():
    return render_template('contact.html')

if __name__=='__main__':
    port = int(os.environ.get("PORT",2121))
    app.run(host='0.0.0.0',port=port)
