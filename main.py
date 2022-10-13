from flask import Flask, render_template, request, redirect
import sqlite3


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('inicio.html')

@app.route('/ingresado', methods = ['GET', 'POST'])
def ingreso():
  if (request.method == "POST"):
    if(request.form["nombre"] !=""):
      conn = sqlite3.connect('5EnLinea.db')
      usuario = request.form['nombre']
      password = request.form['contra']
      q = f"""SELECT * FROM Usuarios WHERE Nombre = '{usuario}' and Contraseña = '{password}';"""
      resu = conn.execute(q)


      if resu.fetchone():
        conn.commit()
        conn.close() 
        return redirect("/inicio")
      else: 
        conn.commit()
        conn.close() 
        return render_template('inicio.html')
  else:
    return render_template('inicio.html')
    
@app.route('/inicio')
def menu():
  return render_template('menu.html')

@app.route('/registro', methods = ['GET', 'POST'])
def registro():
  pass


app.run(host='0.0.0.0', port=81)
