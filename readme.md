# The ACRP 09-11 Decision Tree

- Final development server will be here: [http://acrp0911dev.tti.tamu.edu/](http://acrp0911dev.tti.tamu.edu/)
- Chris B's dev server: [http://cb-dev.tti.tamu.edu/acrp0911/importer.htm](http://cb-dev.tti.tamu.edu/acrp0911/importer.htm)
- Appears under the "Your Facility" menu item on the website 
- The Decision Tree is intended to be a **one-page web app**
- **No data is sent to the server**

The following questions are presented to the user. Questions 1-4 are "sticky", to be answered once for each surface:

---

## 1. What is your Airport Classification? 

- national
- regional 
- local
- basic

---
	
## 2. In what state is your facility? 

## 2b. (if needed) In what county?

To determine climate conditions:

- wet/dry 
- freeze/no freeze

Refer to [Climate Zone State county.TJF.xlsx](https://github.tamu.edu/mark-coppock/acrp0911/blob/master/docs/Climatic%20Zone%20State%20county.TJF.xlsx)

---

## 3. Enter a title for the surface being evaluated (optional)

If provided, this string will be used as a title for the final results.

---

## 4. What is the Pavement Type being evaluated?

 - asphalt
 - concrete

---
---

The following questions will appear for each distress evaluated on the current surface:

---
---

## 5. What Distress Type(s) is this surface experiencing? If more than one, do one at a time.  

The user will pick from choices based on previous answers. This will be presented as a list of image thumbnails (expand on hover), similar to:  

![choose distress](https://dl.dropboxusercontent.com/u/12710016/distress-choice.png)

---

## 6. Distress amount 

The choices [if any for this distress type] are based on the previous provided answers.

---

## 7. Distress severity 

- low 
- moderate
- high

---
---

At this point the user will see the Recommended and Acceptable treatments for this distress. With each treatment they will also see the associated life expectancy chart graphic (PCI curve). See [Benefit Pictures](https://github.tamu.edu/mark-coppock/acrp0911/blob/master/docs/Benefit%20Pictures.zip) for the chart images and [PCI.xlsx](https://github.tamu.edu/mark-coppock/acrp0911/blob/master/docs/PCI.xlsx) for the file that was used to create them (if questions). 

---
---

## 8. Would you like to estimate your total costs for treating this distress?


If so:

### 8b. Enter length and width of surface \<surface name\>  

Some values are suggested for materials. These may be overridden. Some info in [PCI.xlsx](https://github.tamu.edu/mark-coppock/acrp0911/blob/master/docs/PCI.xlsx)  

---
---

At this point the user may choose to evaluate another distress on the current pavement surface. By choosing "+ New Distress" they will go through steps 5-8 again, for as many distresses as are being evaluated on that surface.

---
---

After all distresses have been evaluated:

## 10. Would you like to save a PDF file of your work?

The PDF will list all user inputs and results, including the associated PCI curve images and TCO estimate, if chosen.

---
---
---

(old)

Pavement distresses data file created at [ObjGen.com](http://www.objgen.com/json/models/0ZD4)  

Pavement repairs data file created at [ObjGen.com](http://www.objgen.com/json/models/0gbSG)  
