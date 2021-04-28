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
    email=request.json.get("email", None)
    password=request.json.get("password", None)

message = Mail(
    from_email='finanestu19@gmail.com',
    to_emails=email,
    subject='Recuperacion de contraseña',
    html_content='<strong>Su contraseña actual es {password} </strong>')
try:
    sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
    response = sg.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
except Exception as e:
    print(e.message)
