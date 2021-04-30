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