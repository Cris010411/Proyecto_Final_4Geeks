from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
class User(db.Model):
    __tablename__= 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(220), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    birthday = db.Column(db.String(120), unique=False, nullable=False)
    gender = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    
def __repr__(self):
    return '<User %r>' % self.username

def serialize(self):
    return {
        "id": self.id,
        "email": self.email,
        "birthday":self.birthday,
        "gender":self.gender,
        "name":self.name
            # do not serialize the password, its a security breach
    }	

class Calificaciones(db.Model):
    __tablename__= 'calificaciones'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))
    id_test = db.Column(db.Integer, db.ForeignKey('test.id'))
    calificacion = db.Column(db.Integer, unique=False, nullable=False)
    calificaciones = db.relationship('User', backref='user', lazy=True) 
    calificaciones = db.relationship('Test', backref='test', lazy=True)   
         
    #calificaciones_test = db.relationship('Calificaciones', backref='test', lazy=True)

#def __repr__(self):
    #return '<Calificaciones %r>' % self.username
    
    
    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "id_test": self.id_test,
            "calificacion": self.calificacion
            # do not serialize the password, its a security breach
        }
class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tema = db.Column(db.String(80), unique=False, nullable=False)
    type_test = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<test_log %r>' % self.test_log

    def serialize(self):
        return {
            "id": self.id,
            "tema": self.tema,
            "type_test": self.type_test,
            # do not serialize the password, its a security breach
        }
class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    test_log = db.Column(db.String(120), unique=True, nullable=False)
    frase = db.Column(db.String(80), unique=False, nullable=False)
    option = db.Column(db.String(80), unique=False, nullable=False)
    id_test=db.Column(db.Integer, db.ForeignKey('test.id'))
    test = db.relationship("Test")

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