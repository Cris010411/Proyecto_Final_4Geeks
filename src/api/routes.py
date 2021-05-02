"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)

   
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

@api.route('/createCalificacion', methods=['POST'])
def create_Calificacion():
    id=request.json.get("id",None)
    id_name=request.json.get("id_name",None)
    calificacion=request.json.get("calificacion",None)

    calificacion=Calificaciones(id=id,id_name=id_name, calificacion=calificacion)

    db.session.add(calificacion)
    db.session.commit()

    return jsonify({"calificacion":"ok"}),200
   

@api.route('/consultaCalificacion', methods=['POST'])
def consulta_Calificacion():
    user_id=request.json.get("id",None)
   
    #calificacion = Calificaciones.query.get(id)

    calificaciones = Calificaciones.query.filter_by(id_name=user_id)

    serialized = list(map(lambda x: x.serialize()))

    return jsonify({"consultaCalificacion": serialized }),200
	
	
	