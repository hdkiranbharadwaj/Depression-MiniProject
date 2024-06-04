from flask import Flask
from flask_cors import CORS
import pickle
import requests
import numpy as np
import pandas as pd
from flask import jsonify
from flask import request

app = Flask(__name__)
CORS(app) 

@app.route("/members")
def members():
    return {'members':['Hello','World']}



@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json["data"]
        pickled_model = pickle.load(open('model.pickle', 'rb'))
        prediction = pickled_model.predict([data])
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})



if __name__ == "__main__":
    app.run(debug=True)
