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
            "chart_type": data.chart_type,
        }
        all_data.append(new_data)
    return json.dumps(all_data), 200


@app.route('/data', methods=['POST'])
def add():
    data = request.get_json()
    chart_type = data['chart_type']
    Data.addDataGroup(chart_type)
    return fetch()


@app.route('/data', methods=['DELETE'])
def remove():
    Data.deleteLatestGroup()
    return fetch()
