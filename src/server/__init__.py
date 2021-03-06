from flask import Flask
from flask_cors import CORS

from .models import db
from .models import Data
from . import config


def create_app():
    flask_app = Flask(__name__)
    CORS(flask_app)
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = config.DATABASE_CONNECTION_URI
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    flask_app.app_context().push()
    db.init_app(flask_app)
    Data.seed()
    return flask_app
