"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


#@api.route('/hello', methods=['POST', 'GET'])
#def handle_hello():

    #response_body = {
        #"message": "Hello! I'm a message that came from the backend"
    #}

    #return jsonify(response_body), 200


@api.route("/forgot_pass", methods=["POST"])
def forgot_pass():
    #paso1 recibir email y respuesta secreta
    #paso2 corroborar si la respuesta secreta es correcta y el mail (CONSULTAR A BASE DE DATOS)
    #paso3 si mail y respuesta calzan enviar mail con
    email=request.json.get("email", None)
    secret=request.json.get("secret", None)
    message = Mail(
        from_email='finanestu19@gmail.com',
        to_emails=email,
        subject='Recuperacion de contraseña',
        html_content='<strong>Su contraseña actual es </strong>')
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return jsonify({"mensaje":"ok"})
    except Exception as e:
        return jsonify({"error":e})

    
