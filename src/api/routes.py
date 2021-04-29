"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/createUser', methods=['POST'])
def create_User():
    id=request.json.get("id",None)
    email=request.json.get("email",None)
    password=request.json.get("password",None)
    age=request.json.get("age",None)
    gender=request.json.get("gender",None)
    country=request.json.get("country",None)
    mascot=request.json.get("mascot",None)
    is_active=request.json.get("is_active",None)

    user=User(id=id, email=email, password=password, age=age, gender=gender, country=country, 
    mascot=mascot, is_active=is_active)
    db.session.add(user)
    db.session.commit()

    return jsonify({"user"}) 