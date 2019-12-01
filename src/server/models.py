import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()


class Data(db.Model):
    __tablename__ = 'data'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(100))
    amount = db.Column(db.Integer)
    group = db.Column(db.Integer)
