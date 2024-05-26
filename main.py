from flask import Flask, render_template, request, send_file
import pandas as pd
import numpy as np

app = Flask(__name__)


@app.route("/")
def hello():
    return render_template("homepage.html")

@app.route('/process1', methods=['POST'])
def process1():
    user = request.form.get('data')
    from geopy.geocoders import ArcGIS
    nom = ArcGIS()
    a = nom.geocode(str(user))
    lat1 = a.latitude
    lon1 = a.longitude
    return lat1,lon1


@app.route('/process', methods=['POST'])
def process():
    lat = request.form.get('data1')
    lon = request.form.get('data2')
    print("Getting coordinates successful")
    a = float(lat)
    b = float(lon)

    # --------------------------------------------
    disaster_database = pd.read_csv("Earthquake.csv")
    newdata = disaster_database[['time', 'latitude', 'longitude', 'depth', 'mag', 'place', 'type']]

    # Get the latitude and longitude of the location of interest
    # latitude = 13.072090
    # longitude = 80.201859

    # Calculate the distance between the location of interest and each disaster in the database
    distances = np.sqrt((newdata["latitude"] - a) ** 2 + (newdata["longitude"] - b) ** 2)

    # Find the disasters that are within a certain radius of the location of interest
    radius = 7  # in kilometers
    nearby_disasters = newdata[distances <= radius]

    # Print the list of nearby disasters
    nearby_disasters.to_csv('download/nearest.csv')

    # Load the disaster database

    return "hello"


@app.route('/download')
def download_file():
    path = "nearest.csv"

    return send_file(path, as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
