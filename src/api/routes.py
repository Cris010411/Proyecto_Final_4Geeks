"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint

from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route("/test", methods=["GET"])
def Test():
    test_pri=Test.query.all()
    test_pri = list(map(lambda x: x.serialize(), test_pri))
    return jsonify({"results":test_pri})

@api.route("/test", methods=["POST"])
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