import json
import datetime
import random
from flask import request

from . import create_app
from .models import Data

app = create_app()


@app.route('/data', methods=['GET'])
def fetch():
    dataArr = Data.getAll()
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
    Data.addDataGroup()
    return json.dumps("Data Added Successfully"), 200


@app.route('/data', methods=['DELETE'])
def remove():
    Data.deleteLatestGroup()
    return json.dumps("Data Deleted Successfully"), 200
