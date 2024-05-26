import pandas as pd
import numpy as np

# Load the disaster database
disaster_database = pd.read_csv("Earthquake.csv")

# Get the latitude and longitude of the location of interest
latitude = 13.067
longitude = 80.25

# Calculate the distance between the location of interest and each disaster in the database
distances = np.sqrt((disaster_database["latitude"] - latitude)**2 + (disaster_database["longitude"] - longitude)**2)

# Find the disasters that are within a certain radius of the location of interest
radius = 100 # in kilometers
nearby_disasters = disaster_database[distances <= radius]

# Print the list of nearby disasters
nearby_disasters.to_csv('nearest.csv')
print(nearby_disasters)