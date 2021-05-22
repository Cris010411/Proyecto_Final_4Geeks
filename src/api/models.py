from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class Pregunta(db.Model):
    id = db.Column(db.Integer, primary_key=True)   
    test_log=db.Column(db.String(500), nullable=False)
    frase=db.Column(db.String(200), nullable=False)
    option_correcta=db.Column(db.String(100), nullable=False)
    option_mal1=db.Column(db.String(100), nullable=False)
    option_mal2=db.Column(db.String(100), nullable=False)
    option_mal3=db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "test_log": self.test_log,
            "frase": self.frase,
            "option_correcta": self.option_correcta,
            "option_mal1": self.option_mal1,
            "option_mal2": self.option_mal2,
            "option_mal3": self.option_mal3
        }

class User(db.Model):
    __tablename__= 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(220), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    birthday = db.Column(db.String(120), unique=False, nullable=False)
    gender = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    cant_question = db.Column(db.Integer,unique=False, nullable=False)
    nota_alta = db.Column(db.Integer,unique=False, nullable=False)
    
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "birthday":self.birthday,
            "gender":self.gender,
            "name":self.name,
            "cant_question":self.cant_question,
            "nota_alta":self.nota_alta
                # do not serialize the password, its a security breach
        }