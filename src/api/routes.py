"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pregunta
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, JWTManager, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)
# USUARIO


@api.route('/createUser', methods=['POST'])
def create_User():
    data = request.get_json()
    for i in data:
        user = User(name=i["name"], password=i["password"], birthday=i["birthday"], gender=i["gender"],
                    email=i["email"], cant_question=i["cant_question"], nota_alta=i["nota_alta"])
        db.session.add(user)
        db.session.commit()
    return jsonify({"user": "ok"}), 200


@api.route('/consultaUser/<int:position>', methods=['GET'])
def consulta_User(position):
    user = User.query.filter_by(id=position).first()
    request = user.serialize()
    return jsonify(request), 200
# LOGIN


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email is None:
        return jsonify({"message": "Bad user or password"}), 400
    if password is None:
        return jsonify({"message": "Bad user or password"}), 400
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"message": "Bad user or password"}), 401
    else:
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token}), 200


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify({"id": user.id, "email": user.email})

@api.route('/pregunta', methods=['POST'])
def addPregunta():
    data = request.get_json()
    for i in data:
        preg = Pregunta(test_log=i["test_log"],frase=i["frase"],option_correcta=i["option_correcta"],option_mal1=i["option_mal1"],option_mal2=i["option_mal2"],option_mal3=i["option_mal3"])
        db.session.add(preg)
        db.session.commit()
    return jsonify({"data": "ok"}), 200

@api.route('/pregunta/<int:position>', methods=['GET'])
def infoPregunta(position):
    preg = Pregunta.query.filter_by(id=position).first()
    request = preg.serialize()
    return jsonify(request), 200