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
        if session['usuario'] == "admin" and session['password'] == "admin":
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
  
    
@app.route('/inicio')
def menu():
  return render_template('menu.html', nombre = session['usuario'])

@app.route('/inicioAdmin')
def menuAdmin():
  return render_template('menuAdmin.html')

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
      s = f"""SELECT Nombre FROM Usuario WHERE Nombre ='{request.form['nombre']}'"""
      resu = conn.execute(q)
      asu = conn.execute(s)

      if resu.fetchone():
        if (request.form['nombre'] != "") and (request.form['contra'] == ""):
          if (request.form['nombre'] == session['usuario']):
            return render_template("editPerfil.html", error1 = True)
          elif asu.fetchone():
            return render_template("editPerfil.html", error4 = True)
          else:
            a = f"""UPDATE Usuarios SET Nombre = '{request.form['nombre']}' where Nombre = '{session['usuario']}';"""
            session['usuario'] = request.form['nombre']
            conn.execute(a)
            conn.commit()
            conn.close()
            return redirect('/')
        elif (request.form['nombre'] == "") and (request.form['contra'] != " ") and (request.form['contra'] == request.form['contra2']):
            if (session['password'] == request.form['contra']):
              return render_template("editPerfil.html", error2 = True)
            elif (request.form['contra'] != request.form['contra2']):
              return render_template("editPerfil.html", error3 = True)
            else:
              a = f"""UPDATE Usuarios SET Contraseña = '{request.form['contra']}' where Contraseña = '{session['password']}';"""
              session['password'] = request.form['contra']
              conn.execute(a)
              conn.commit()
              conn.close()
              return redirect('/')
        elif (request.form['nombre'] != "") and (request.form['contra'] != "") and (request.form['contra'] == request.form['contra2']):
          if (request.form['nombre'] == session['usuario']):
            return render_template("editPerfil.html", error1 = True)
          elif (session['password'] == request.form['contra']):
              return render_template("editPerfil.html", error2 = True)
          elif (request.form['contra'] != request.form['contra2']):
            return render_template("editPerfil.html", error3 = True)
          elif asu.fetchone():
            return render_template("editPerfil.html", error4 = True)
          else:
            a = f"""UPDATE Usuarios SET Nombre = '{request.form['nombre']}' AND Contraseña = '{request.form['contra']}' WHERE Nombre = '{session['usuario']}' AND Contraseña = '{session['password']}';"""
            session['usuario'] = request.form['nombre']
            session['password'] = request.form['contra']
            conn.execute(a)
            conn.commit()
            conn.close()
            return redirect('/')

@app.route('/rankings')
def rankings():
  return render_template('rankings.html')

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
  q = """UPDATE Ranking SET Puntaje = '0';"""
  conn.execute(q)
  conn.commit()
  conn.close()
  return redirect('/inicioAdmin')

  
app.run(host='0.0.0.0', port=81)
