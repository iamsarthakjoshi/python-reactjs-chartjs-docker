import random
from datetime import datetime
import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()


class Data(db.Model):
    __tablename__ = 'data'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date)
    amount = db.Column(db.Integer)
    group = db.Column(db.Integer)

    @classmethod

    def seed(cls):
        dataArr = Data.query.all()
        all_data = []
        for data in dataArr:
            new_data = {
                "id": data.id,
                "date": data.date,
                "amount": data.amount,
                "group": data.group,
            }
            all_data.append(new_data)

        if len(all_data) == 0:
            for x in range(10, 15):
                data = Data(
                    date = datetime.date(2019, 10, x),
                    amount = random.randint(1000, 4000),
                    group = 1
                )
                data.save()

    def save(self):
        db.session.add(self)
        db.session.commit()
