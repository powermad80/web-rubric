# Text Execution

### WRLT1.1 Web Rubric Login Test

#### Steps:
1. Open login page
2. Enter known valid username + password (default: user and pass both "admin")
3. Click "login"
#### Expected Results:
* Login is successful and redirects user to home page
* Text in top-right corner of screen reads "Log out", indicating user's login status
#### Test Execution History
**2021-4-10**

Execution type: manual

Tester: Hannah Dubusker

Result: pass



### WRET1.1 Web Rubric Edit Test
#### Steps:
1. In rubric editor interface, create or open any rubric
2. Make any changes to all data and text fields in the editor
3. Click "save"
4. Switch to rubric grading page
5. Select any student(s) and then select the saved rubric for earlier steps
6. Click "Begin Grading"
#### Expected Results:
* Rubric appears in page view
* All changes made are reflected in view exactly as input on editor page
#### Test Execution History
**2021-4-10**

Execution type: manual

Tester: Hannah Dubusker

Result: pass


### WRCT1.1 Web Rubric Class Test
#### Steps:
1. Open View Grades/Students page in web app
2. Click the "add students" button
3. In the file picker dialog that opens, open a known valid CSV spreadsheet of class student data
#### Expected Results:
* View on page populates with student data exactly as written in the uploaded spreadsheet
#### Test Execution History
**2021-4-10**

Execution type: manual

Tester: Hannah Dubusker

Result: pass


### SGAT1.1 Server Grades Access Test
#### Steps:
1. Open View Grades/Students page in web app
2. Click on table entry displayed for some student with known assigned grades in database
#### Expected Results:
* Web view populates right-hand table with all grades in database associated with the clicked student
#### Test Execution History
**2021-4-10**

Execution type: manual

Tester: Hannah Dubusker

Result: pass


### SCCT1.1 Server Canvas Connection Test
#### Steps:
1. Using valid user API key, use Canvas API functions to send a POST request to Canvas requesting class & student info associated with user account
#### Expected Results:
* Function returns valid and verifiable data
#### Test Execution History
**2021-4-3**

Execution type: automatic

Test author: Hannah Dubusker

Result: fail

**Notes: Canvas API for ASP.NET frameworks poorly supported, and security concerns exist for this application. Difficulties with getting this passing may indicate need for different (manual?) approach to populating data.**


### SSPT1.1 Server Spreadsheet Parse Test
#### Steps:
1. Open rubric editor page
2. Click the "upload rubric" button
3. Select known valid rubric spreadsheet file
#### Expected Results:
* Rubric editor populates with data accurately reflecting the spreadsheet file
#### Test Execution History
**2021-4-10**

Execution type: manual

Tester: Hannah Dubusker

Result: pass


### SAAT1.1 Server Account Association Test
#### 2021-4-3: Test Depreciated - functionality no longer part of project scope


### WRGT1.1 Web Rubric Grading Test
#### Steps:
1. Open Grade Students page in web app
2. Select any student(s)
3. Select any rubric
4. Click "Begin Grading"
5. Assign any grade to the rubric by choosing any number of cells to click in the displayed rubric
6. Click submit to save the grade
7. Open Add/View Students page
8. Click the name of the student graded in earlier step
#### Expected Results:
* In right-hand table, the exact grade input is displayed as assigned to the student
#### Test Execution History
**2021-4-10**

Execution type: manual

Tester: Hannah Dubusker

Result: pass

