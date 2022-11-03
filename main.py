from flask import Flask, render_template, request, redirect, session
import sqlite3


app = Flask(__name__)
app.secret_key = "jajaxd"


@app.route('/')
def index():
    return render_template('inicio.html')

@app.route('/ingresado', methods = ['GET', 'POST'])
def ingreso():
  if (request.method == "POST"):
    if(request.form["nombre"] !=""):
      conn = sqlite3.connect('Usuarios.db')
      session['usuario'] = request.form['nombre']
      session['password'] = request.form['contra']
      q = f"""SELECT * FROM Usuarios WHERE Nombre = '{session['usuario']}' and Contraseña = '{session['password']}';"""
      resu = conn.execute(q)


      if resu.fetchone():
        conn.commit()
        conn.close() 
        return redirect("/inicio")
      else: 
        conn.commit()
        conn.close() 
        return render_template('inicio.html', error = True)
  else:
    return render_template('inicio.html')

@app.route('/registro', methods = ['GET', 'POST'])
def registro():
  if (request.method == "POST"):
    if (request.form["nombre"] != "") and (request.form["contra"] == request.form["contra2"]):
      conn = sqlite3.connect('Usuarios.db')
      nombre = request.form['nombre']
      contraseña = request.form['contra']
      q = f"""SELECT * FROM Usuarios WHERE Nombre = '{nombre}' and Contraseña = '{contraseña}';"""
      s = f"""INSERT INTO Usuarios(nombre, contraseña) VALUES ('{nombre}', '{contraseña}');"""
      resu = conn.execute(q)

      if resu.fetchone():
        conn.commit()
        conn.close()
        return render_template("Registro.html", error1 = True)
      else:
        conn.execute(s)
        conn.commit()
        conn.close()
        return redirect("/")    
    else:
      return render_template("Registro.html", error2 = True)
  else:
    return render_template("Registro.html")
  
    
@app.route('/inicio', methods=['GET'])
def menu():
  return render_template('menu.html', nombre = session['usuario'])

@app.route('/inicioAdmin')
def menuAdmin():
  pass

@app.route('/juego', methods=['GET'])
def jueguito():
  return render_template('juego.html')

@app.route('/seleccionarSala', methods=['GET'])
def salaB():
  return render_template('selectorSalas.html')

@app.route('/crearSala', methods=['GET'])
def salaC():
  return render_template('creadorSalas.html')

@app.route('/editarPerfil', methods=['GET'])
def editPerfil():
  return render_template('editPerfil.html')

@app.route('/rankings', methods=['GET'])
def rankings():
  return render_template('rankings.html')

  
app.run(host='0.0.0.0', port=81)
