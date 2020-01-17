import os
import cv2

path = "C:/Users/Karim/Desktop/KDEF_and_AKDEF/KDEF"
for rep in os.listdir(path):
    for file in os.listdir(path+"/"+rep):
        if file.endswith("S.JPG"):
            img = cv2.imread(path+"/"+rep+"/"+file, cv2.IMREAD_COLOR)
            # print("C:/Users/Karim/Desktop/bdd/"+file)
            cv2.imwrite("C:/Users/Karim/Desktop/bd/"+file, img)
