import random
import datetime
import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()


class Data(db.Model):
    __tablename__ = 'data'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date)
    amount = db.Column(db.Integer)
    group = db.Column(db.Integer)
    chart_type = db.Column(db.String(5))

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
                "chart_type": data.chart_type,
            }
            all_data.append(new_data)

        if len(all_data) == 0:
            Data.addDataGroup("bar")

    def getAll():
        return Data.query.all()

    def addDataGroup(chart_type):
        group = Data.getLatestGroup() + 1
        for x in range(10, 15):
            data = Data(
                date = datetime.date(2019, 10, x),
                amount = random.randint(1000, 4000),
                group = group,
                chart_type = chart_type
            )
            db.session.add(data)
            db.session.commit()

    def getLatestGroup():
        dataArr = Data.query.order_by(Data.group.desc()).limit(1)
        try:
            group = dataArr[0].group
        except:
            group = 0
        return group

    def deleteLatestGroup():
        group = Data.getLatestGroup()
        if group > 0 :
            Data.query.filter_by(group=group).delete()
            db.session.commit()
