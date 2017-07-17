# 3D_Sensor_Visualization
This sample shows how to create a MicroStrategy visualization that will create a 3D model representing roll,yaw,pitch data collected from IoT sensors

Deployment steps:
1) Download the zip project and extract the contents
2) Copy the 'cube' plugin folder to your MicroStrategy Web plugins folder
3) Restart the webserver for the changes to take place

Included in the cube folder is a sample dataset in a .csv file that you can import into microstrategy and apply to the visualization.
Add the Attributes 'Driver Name' and 'ID Measure W' to the attributes section
Add the metrics 'Yaw, pitch, roll' to the metrics section
