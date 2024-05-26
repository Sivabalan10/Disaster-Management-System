# Disaster Management System

## Overview

The Disaster Management System is a Flask web application designed to enhance the efficiency and effectiveness of disaster response and research. By automatically detecting the user's location, the system fetches historical disaster data relevant to that location. Researchers and emergency responders can use this feature to quickly access pertinent information, allowing for informed decision-making during disaster situations.

## Features

### 1. Auto Location Detection
- **Geolocation API Integration**: Automatically detects the user's current location using geolocation services.
- **User Convenience**: Eliminates the need for manual location input, streamlining the user experience.

### 2. Historical Disaster Data Retrieval
- **Comprehensive Database**: Maintains a database of past disaster records categorized by location and disaster type.
- **Data Filtering**: Allows users to filter and retrieve specific data based on their location and the type of disaster.

### 3. Researcher Tools
- **Location-Based Data Access**: Researchers can easily find and analyze disaster data for specific locations.
- **Data Visualization**: Provides graphical representations of disaster trends and impacts, aiding in analysis and reporting.

### 4. Emergency Response Support
- **Real-Time Information**: Provides emergency responders with real-time access to historical disaster data, facilitating rapid and informed decision-making.
- **Preparedness Planning**: Helps in creating preparedness plans by analyzing patterns and trends in past disaster data.

## Technology Stack

- **Backend**: Flask framework for building the web application.
- **Frontend**: HTML, CSS, JavaScript for creating an interactive and responsive user interface.
- **Database**: SQLite for storing historical disaster records.
- **Geolocation**: Integration with geolocation services to detect user location.
- **Data Visualization**: Use of libraries like Chart.js or D3.js for visualizing disaster data.

## Installation and Setup

### Prerequisites

- Python 3.x
- Flask
