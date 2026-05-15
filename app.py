from flask import Flask, render_template, request, redirect, url_for, flash
import os
app = Flask(__name__)

# Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/admission', methods=['GET', 'POST'])
def admission():
    return render_template('admission.html')

@app.route('/fee-structure')
def fee_structure():
    return render_template('fee_structure.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

