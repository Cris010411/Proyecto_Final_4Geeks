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
    calificacion = db.Column(db.Integer, unique=False, nullable=False)
    calificaciones = db.relationship('User', backref='user', lazy=True)   
         
    #calificaciones_test = db.relationship('Calificaciones', backref='test', lazy=True)

#def __repr__(self):
    #return '<Calificaciones %r>' % self.username
    
    
def serialize(self):
    return {
        "id": self.id,
        "id_user": self.id_user,
        "calificacion": self.calificacion
        # do not serialize the password, its a security breach
    }