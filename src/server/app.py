import json
from flask import request
from datetime import datetime

from . import create_app, database
from .models import Data

app = create_app()


@app.route('/data', methods=['GET'])
def fetch():
    dataArr = database.get_all(Data)
    all_data = []
    for data in dataArr:
        new_data = {
            "id": data.id,
            "date": data.date.strftime("%m/%d/%Y"),
            "amount": data.amount,
            "group": data.group,
        }
        all_data.append(new_data)
    return json.dumps(all_data), 200


@app.route('/data', methods=['POST'])
def add():
    data = request.get_json()

    date = data['date']
    amount = data['amount']
    group = data['group']

    database.add_instance(Data, date=date, amount=amount, group=group)
    return json.dumps("Data Added Successfully"), 200


@app.route('/data/<data_id>', methods=['DELETE'])
def remove(data_id):
    database.delete_instance(Data, id=data_id)
    return json.dumps("Data Deleted Successfully"), 200
