"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import sendgrid
from sendgrid.helpers.mail import *
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_mail import Message

api = Blueprint('api', __name__)
#USUARIO
@api.route('/createUser', methods=['POST'])
def create_User():
    id=request.json.get("id",None)
    name=request.json.get("name",None)
    password=request.json.get("password",None)
    birthday=request.json.get("birthday",None)
    gender=request.json.get("gender",None)
    email=request.json.get("email",None)
       
    user=User(id=id, name=name, password=password, birthday=birthday, gender=gender, email=email)
    db.session.add(user)
    db.session.commit()

    return jsonify({"user":"ok"}) 

@api.route("/createCalificacion", methods=['POST'])
def create_Calificacion():
    id=request.json.get("id",None)
    id_name=request.json.get("id_name",None)
    calificacion=request.json.get("calificacion",None)

    calific=Calificaciones(id=id, id_user= id_name, calificacion=calificacion)

    db.session.add(calific)
    db.session.commit()

    return jsonify({"calific":"ok"}),200
   

@api.route('/consultaCalificacion', methods=['GET'])
def consulta_Calificacion():
    id=request.json.get("id",None)
    consulta= Calificaciones.query.get(id)
    
    return jsonify({"msg":consulta.serialize()}),200
	
	
	
#LOGIN
@api.route("/login", methods=["POST"])
def login():
    email=request.json.get("email", None)
    password=request.json.get("password", None)

    if email is None:
        return jsonify ({"message": "Bad user or password"}),400
    if password is None:
        return jsonify ({"message": "Bad user or password"}),400
    user=User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify ({"message": "Bad user or password"}),401
    else:
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token, "id":user.id}),200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id=get_jwt_identity()
    user=User.query.get(current_user_id)
    return jsonify({"id":user.id, "email":user.email})
#QUESTION
@api.route("/question", methods=["GET"])
def Test():
    test_pri=Test.query.all()
    test_pri = list(map(lambda x: x.serialize(), test_pri))
    return jsonify({"results":test_pri})

@api.route("/question", methods=["POST"])
def Test_agregar():
    test_log=request.json.get("test_log", None)
    frase=request.json.get("frase",None)
    option=request.json.get("option",None)
    type_test=request.json.get("type_test",None)
    test=Test(test_pri=test_pri, frase=frase, option=option, test_log=test_log)
    db.session.add(test)
    db.session.commit()
    #user=json.loads(name, color_ojos, color_cabello,gender)
    return jsonify({"people":"ok"})

#RECUPERAR CONTRASEÑA
@api.route("/forgot_pass", methods=["POST"])
def forgot_pass():
    from app import mail
    #paso1 recibir email y respuesta secreta
    #paso2 corroborar si la respuesta secreta es correcta y el mail (CONSULTAR A BASE DE DATOS)
    #paso3 si mail y respuesta calzan enviar mail con
    email=request.json.get("email", None)
    email_registrado = User.query.filter_by(email=email).first()
    if email_registrado is None:
        return jsonify({"message": "Email no registrado"}), 400
    msg= Message('Recuperacion de contraseña', recipients=[email])
    msg.html = ('<strong>Su contraseña actual es </strong>'+ email_registrado.password)
    mail.send(msg)
    return jsonify({"message": "Su contraseña fue enviada a su correo"}), 200