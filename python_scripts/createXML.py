import xml.etree.cElementTree as ET
import os

root = ET.Element("root")
doc = ET.SubElement(root, "doc")

path = "C:/Users/Karim/Documents/GitHub/eyeTrackingWebPage/images"
for file in os.listdir(path):
    if file.endswith("S.JPG"):
        ET.SubElement(doc, "field").text = file

tree = ET.ElementTree(root)
tree.write("C:/Users/Karim/Documents/GitHub/eyeTrackingWebPage/pages.xml")




# import json
#
# r = {'is_claimed': 'True', 'rating': 3.5}
# r = json.dumps(r)
# loaded_r = json.loads(r)
# print(loaded_r['rating']) #Output 3.5
# print(type(r)) #Output str
# print(type(loaded_r)) #Output dict
#
# with open('data.json', 'w') as outfile:
#     json.dump(r, outfile)
#
# with open('data.json', 'r') as f:
#     datastore = json.load(f)
#
# print (datastore['rating'])

# #Get the file name for the new file to write
# filter = "JSON File (*.json)|*.json|All Files (*.*)|*.*||"
# filename = rs.SaveFileName("Save JSON file as", filter)
#
# # If the file name exists, write a JSON string into the file.
# if filename:
#     # Writing JSON data
#     with open(filename, 'w') as f:
#         json.dump(datastore, f)
#
# #prompt the user for a file to import
# filter = "JSON file (*.json)|*.json|All Files (*.*)|*.*||"
# filename = rs.OpenFileName("Open JSON File", filter)
#
# #Read JSON data into the datastore variable
# if filename:

#
# #Use the new datastore datastructure
# print datastore["office"]["parking"]["style"]
