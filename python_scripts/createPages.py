import xml.etree.cElementTree as ET
import os

# html = ET.Element("html")
# head = ET.SubElement(html, "head")
# meta = ET.SubElement(head, "head")
#
# path = "C:/Users/Karim/Documents/GitHub/images"
# for file in os.listdir(path):
#     if file.endswith("S.JPG"):
#         ET.SubElement(doc, "field").text = file
#
# tree = ET.ElementTree(root)
# tree.write("C:/Users/Karim/Documents/GitHub/eyeTrackingWebPage/pages.xml")

path = "C:/Users/Karim/Documents/GitHub/eyeTrackingWebPage/images"
for file in os.listdir(path):
    if file.endswith("S.JPG"):
        f = open('C:/Users/Karim/Documents/GitHub/eyeTrackingWebPage/pages/'+file+'.html','w')
        message = """<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="../style.css" />
                <script type="text/javascript" src="../script.js"></script>
                <title>"""+file+"""</title>
            </head>
            <body onload="intervalImage()">
        
                <div class="image"> 
                    <img src=" ../images/"""+file+""" " width=auto height="712" id="img" />
                    <!-- <p class="blanc" id="tex" >Text</p> -->
                </div>
        
            </body>
        </html>"""

        f.write(message)
        f.close()
