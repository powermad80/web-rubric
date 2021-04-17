# Web Rubric User Manual
## Rubric Editor
![](https://puu.sh/HzalQ.png)To use the rubric editor interface, follow these steps:
* Enter the name you want to save the rubric under in the field labeled "Rubric name"
* Use the [+][-] buttons to add or subtract columns to the displayed data grid. This corresponds to the maximum number of points that can be earned per grading criterial.
* Use the "Add grading criteria" button to add a new row of data which corresponds to a distinct grading criteria
* Each row can be individually deleted by clicking the [X] on the left edge of each row
* In the first column of every row, describe the quality that this grading criteria is measuring
* In each subsequent field of a row, briefly describe the outcome associated with 
* A pre-made rubric file created according to a standard format can be uploaded to automatically populate the data fields. To do so, click the "Browse..." button at the bottom of the page and select the desired CSV format spreadsheet. The data fields will populate but not automatically save, allowing you to make modifications if desired, and verify that the rubric was correctly imported.

## Grading View
![](https://puu.sh/Hzanl.png)
* To begin using the grading application, select any number of students in the left hand table by clicking their respective checkbox input, and then select any single rubric in the right hand table. Once there are selections for both tables, the "Begin Grading" button will appear. Click it when ready to proceed
* When selecting students, you have the option to filter by name and/or by class. Names filter instantly, matching any part of the full name (case insensitive) as you type. Filtering by class comes as a dropdown menu generated using student data
* If you click "Begin Grading" and then change your selected rubric, all progress will be reset
* Once the button is clicked, the selected rubric is displayed as a table below. 
* You can interact with this table by clicking on cells associated with grade points
* Clicking a grade cell will highlight it in green and add the respective number of points to the grade total, displayed below the rubric
* Clicking a green cell will deselect it and subtract the points from the total
* Only one cell can be selected per row. It is acceptable to leave a row with zero cells highlighted, corresponding with zero points.
* When all data is entered correctly, click Submit to save the grade. An alert will pop up signifying this, and the view will reset.

## Students/Grades View
![](https://puu.sh/HzaZv.png)
* This view is initially similar to the grading view. Filtering by name and class works identically
* Clicking a student name will populate the right-hand table with all grade data associated with that student. It will display each grade's rubric name, score, percentage, and the date it was submitted
* To add a student to the account info manually, one by one, click the "Add Student Manually" button first
* New data fields and controls will appear below the button, labeled "student name" "class" and "submit." Enter the respective data according to official records and then hit submit, and the data will be reflected in the updated student view.
* To add students to the account en masse from a standardized canvas/catalyst spreadsheet (in CSV format), click the "Browse..." button below the label "Upload Student Info". A file picker dialog will pop up, select the spreadsheet and open it. The new student data should quickly parse and populate the view.

# FAQ
**Q: Will my account info (saved students, grades, etc.) be accessible from different computers?**

A: This depends on the apps implementation and hosting. If run in its native form as a web application, yes, all your application info is consistent across devices and login sessions. However, if you run this as a local desktop app using a framework like Electron, it may be local storage only.

**Q: Some part of the application doesn't seem to be working right, what do I do?**

A: Since this depends heavily on the issue and is hard to predict, we recommend you open an issue on our GitHub repository describing the problem. Include your computer, the web browser you're running, what you're trying to do, what the problem is, and include steps on how to reproduce this problem, and we should be able to quickly investigate the matter.


**Q: Can I synchronize account data between a web app implementation of this app and an electron framework desktop app version?**

A: Currently, no. This may be considered for a future release if there's demand, though the development would present challenges in secure implementation.


**Q: my rubric spreadsheet upload failed, what's wrong with it?**

A: The rubric upload feature requires strict adherence to format requirements. Check the rubric you're trying to upload for inconsistencies. Compare with the template rubric that should be included with deployment files.

**Q: my student data spreadsheet upload failed, what's wrong with it?**

A: Spreadsheets should be taken directly from UC Canvas or Catalyst downloads as available to professors. The application expects the spreadsheets in the format they came in, so making modifications is not advised, unless simply removing rows or clearing columns of sensitive unused data. If the format these spreadsheets come in has changed, rendering them incompatible, contact one of our developers directly with the matter or open an issue on our GitHub repository and we'll work as quickly as we can to update the application to account for the new formats.
