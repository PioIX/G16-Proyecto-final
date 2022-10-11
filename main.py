from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('inicio.html')

@app.route('/ingresado', methods = ['GET', 'POST'])
def ingreso():
  pass

@app.route('/registro', methods = ['GET', 'POST'])
def registro():
  pass




app.run(host='0.0.0.0', port=81)
