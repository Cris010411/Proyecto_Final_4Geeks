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


#@api.route('/hello', methods=['POST', 'GET'])
#def handle_hello():

    #response_body = {
        #"message": "Hello! I'm a message that came from the backend"
    #}

    #return jsonify(response_body), 200


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
   
    
