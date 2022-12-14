from flask import Flask, render_template, request, redirect, session
import sqlite3


app = Flask(__name__)
app.secret_key = "5flipline"


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
        if session['usuario'] == "admin" and session['password'] == "admincito":
          return redirect("/inicioAdmin")
        else:
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
      q = f"""SELECT * FROM Usuarios WHERE Nombre = '{nombre}';"""
      s = f"""INSERT INTO Usuarios(Nombre, Contraseña, Puntaje) VALUES ('{nombre}', '{contraseña}', 0);"""
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
  
    
@app.route('/inicio')
def menu():
  conn = sqlite3.connect('Usuarios.db')
  a = f"""SELECT ID FROM Usuarios WHERE Nombre = '{session['usuario']}'"""
  elID = conn.execute(a)
  elIDBien = elID.fetchone()
  session['ID'] = elIDBien[0]
  if (session['usuario'] == "admin"):
    return redirect('/inicioAdmin')
  else:
    return render_template('menu.html', nombre = session['usuario'])

@app.route('/inicioAdmin')
def menuAdmin():
  return render_template('menuAdmin.html', nombre = session['usuario'])

@app.route('/juego')
def jueguito():
  return render_template('juegoLocal.html')

@app.route('/seleccionarSala')
def salaB():
    return render_template('selectorSalas.html')

@app.route('/crearSala')
def salaC():
  return render_template('creadorSalas.html')

@app.route('/editarPerfil')
def editPerfil():
  return render_template('editPerfil.html')

@app.route('/editarPerfilOK', methods = ["GET", "POST"])
def editPerfilConfirm():
  if (request.method == "POST"):
      conn = sqlite3.connect('Usuarios.db')
      q = f"""SELECT Nombre AND Contraseña FROM Usuarios WHERE Nombre = '{session['usuario']}' AND Contraseña = '{session['password']}';"""
      s = f"""SELECT Nombre FROM Usuarios WHERE Nombre ='{request.form['nombre']}'"""
      resu = conn.execute(q)
      asu = conn.execute(s)

      if resu.fetchone():
        if (request.form['nombre'] != "") and (request.form['contra'] == ""):
          if (request.form['nombre'] == session['usuario']):
            return render_template("editPerfil.html", error1 = True)
          elif asu.fetchone():
            return render_template("editPerfil.html", error3 = True)
          else:
            b=f"""DELETE FROM Usuarios WHERE Nombre ='{session['usuario']}'"""
            a = f"""INSERT INTO Usuarios(Nombre, Contraseña, Puntaje, ID) VALUES ('{request.form['nombre']}', '{session['password']}', 0, '{session['ID']}')"""
            conn.execute(b)
            conn.execute(a)
            conn.commit()
            conn.close()
            return redirect('/')
        elif(request.form['nombre'] == "") and (request.form['contra'] != ""):
          if (request.form['contra'] == session['password']):
            return render_template("editPerfil.html", error2 = True)
          else:
            b=f"""DELETE FROM Usuarios WHERE Nombre ='{session['usuario']}'"""
            a=f"""INSERT INTO Usuarios(Nombre, Contraseña, Puntaje, ID) VALUES ('{session['usuario']}', '{request.form['contra']}', 0, '{session['ID']}')"""
            conn.execute(b)
            conn.execute(a)
            conn.commit()
            conn.close()
            return redirect('/')
        elif (request.form['nombre'] != "") and (request.form['contra'] != ""):
          if (request.form['nombre'] == session['usuario']):
            return render_template("editPerfil.html", error1 = True)
          elif asu.fetchone():
            return render_template("editPerfil.html", error3 = True)
          elif (request.form['contra'] == session['password']):
            return render_template("editPerfil.html", error2 = True)
          else:
            b=f"""DELETE FROM Usuarios WHERE Nombre ='{session['usuario']}'"""
            a= f"""INSERT INTO Usuarios(Nombre, Contraseña, Puntaje, ID) VALUES ('{request.form['nombre']}', '{request.form['contra']}', 0, '{session['ID']}')"""
            conn.execute(b)
            conn.execute(a)
            conn.commit()
            conn.close()
            return redirect('/')

@app.route('/rankings', methods=['GET'])
def rankings():
  if request.method == 'GET':
    conn = sqlite3.connect('Usuarios.db')
    q = """SELECT COUNT(*) FROM Usuarios """
    resu = conn.execute(q)
    cantidad = resu.fetchone()
    ip = 1
    nombres = []
    ids = []
    puntajes = []
    print(cantidad[0])
    
    for i in range(cantidad[0]) :
      a = f"""SELECT Nombre FROM Usuarios WHERE ID = '{ip}'"""
      b = f"""SELECT ID FROM Usuarios WHERE ID = '{ip}'"""
      c = f"""SELECT Puntaje FROM Usuarios WHERE ID = '{ip}'"""
      id = conn.execute(b)
      nombre = conn.execute(a)
      puntaje = conn.execute(c)
      idPasado = id.fetchone()
      nombrePasado = nombre.fetchone()
      puntajePasado = puntaje.fetchone()

      if nombrePasado != None and idPasado != None and puntajePasado != None:
        nombres.append(nombrePasado[0])
        ids.append(idPasado[0])
        puntajes.append(puntajePasado[0])
        ip += 1
      print(nombres, ids, puntajes)
    return render_template("rankings.html", nombres1 = nombres, ids1 = ids, puntajes1 = puntajes)
  

@app.route('/elFin', methods=['GET'])
def destruccion():
  conn = sqlite3.connect('Usuarios.db')
  q = """DELETE FROM Usuarios WHERE Nombre != 'admin';"""
  conn.execute(q)
  conn.commit()
  conn.close()
  return redirect('/')

@app.route('/noPoints', methods=['GET'])
def borrarPuntos():
  conn = sqlite3.connect('Usuarios.db')
  q = """UPDATE Usuarios SET Puntaje = '0';"""
  conn.execute(q)
  conn.commit()
  conn.close()
  return redirect('/inicioAdmin')

@app.route('/cerrarSesion', methods = ['GET'])
def cerrado():
  session['usuario'] = ""
  session['password'] = ""
  return redirect('/')
  
app.run(host='0.0.0.0', port=81)
