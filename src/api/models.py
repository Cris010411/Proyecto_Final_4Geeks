from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    test_log = db.Column(db.String(120), unique=True, nullable=False)
    frase = db.Column(db.String(80), unique=False, nullable=False)
    option = db.Column(db.String(80), unique=False, nullable=False)
    type_test = db.Column(db.String(80), unique=False, nullable=False)
    #user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    #user = db.relationship("User") esto va para el usuario

    def __repr__(self):
        return '<test_log %r>' % self.test_log

    def serialize(self):
        return {
            "id": self.id,
            "test_log": self.test_log,
            "frase": self.frase,
            "option": self.option,
            "type_test": self.type_test,
            # do not serialize the password, its a security breach
        }