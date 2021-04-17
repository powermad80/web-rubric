# Web Rubric Test Plan
##### Overall Test Plan
Our approach to testing our web application will be divided into three main pieces. We will use a suite of unit tests to automatically test individual functions and components across all bounds and potential edge cases to ensure the expected output. A suite of integration tests will then automatically test broader functionality of routines and stacks of function calls within the application to ensure that the desired application inputs will result in the expected outputs, and alert us to any unexpected changes in application behavior as a result of any modifications made to individual functions. Finally, once the application is deployed in its expected permanent operating environment it will be subject to not only these tests but also a set of manual functionality tests, opening the application and ensuring all features operate as expected when under average user operation conditions.

##### Test Case Descriptions
WRAT1.1 **Web Rubric Access Test**

WRAT1.2 Ensures access to sensitive account pages can only happen after successful authentication

WRAT1.3 Test will attempt to access sensitive account details pages and make API calls without first authenticating credentials

WRAT1.4 Inputs: Incorrect & Nonexistent account credentials

WRAT1.5 Outputs: Permissions error messages upon attempted resource access

WRAT1.6 Normal

WRAT1.7 White box

WRAT1.8 Functional

WRAT1.9 Integration

WRLT1.1 **Web Rubric Login Test**

WRLT1.2 Ensures use of valid credentials results in successful authentication and subsequent access to protected resources

WRLT1.3 Test will use known valid account credentials to authenticate and access account sensitive material

WRLT1.4 Inputs: Known valid account credentials for both student and professor accounts

WRLT1.5 Outputs: Redirection to relevant account details upon authentication attempt and successful access of relevant resources upon use of API calls

WRLT1.6 Normal

WRLT1.7 White box

WRLT1.8 Functional

WRLT1.9 Integration

WRUT1.1 **Web Rubric Upload Test**

WRUT1.2 Tests functionality of rubric upload tool

WRUT1.3 Test will upload known valid and properly formatted rubric and determine if web app successfully receives and displays it on account page

WRUT1.4 Inputs: Known valid professor credentials, known valid rubric file (Microsoft Excel Spreadsheet)

WRUT1.5 Outputs: Ability to view rubric on account page within web app

WRUT1.6 Normal

WRUT1.7 White box

WRUT1.8 Functional

WRUT1.9 Integration

WRET1.1 **Web Rubric Edit Test**

WRET1.2 Tests functionality of rubric edit tool

WRET1.3 Test will use edit tool in web app to make changes to every field in an uploaded rubric and validate that the changes have been saved and can be viewed in the app

WRET1.4 Inputs: Known valid professor account credentials, known valid rubric stored on account, list of edits (plaintext) to make to rubric

WRET1.5 Outputs: Validation that new values as specified in inputs can be viewed on the rubric in-app

WRET1.6 Normal

WRET1.7 White box

WRET1.8 Functional

WRET1.9 Integration

WRGT1.1 **Web Rubric Grading Test**

WRGT1.2 Tests ability to assign a grade to a student for an existing rubric

WRGT1.3 Test will use grading tool in web app to assign a grade for a rubric to a student account associated with the professor account and validate that the grade is saved and can be viewed in-app

WRGT1.4 Inputs: Known valid professor account credentials, known valid rubric stored on account, known valid student account associated with professor account, list of sample grade values corresponding with the known valid rubric

WRGT1.5 Outputs: Validation of input grade values saved to server

WRGT1.6 Normal

WRGT1.7 White box

WRGT1.8 Functional

WRGT1.9 Integration

WRCT1.1 **Web Rubric Class Test**

WRCT1.2 Tests ability to upload student lists in standardized spreadsheet form

WRCT1.3 Test will use class info upload tool in web app to upload a spreadsheet list of students, and validate that student info has been parsed and assigned to professor account's class

WRCT1.4 Inputs: Known valid professor account credentials, known valid student information spreadsheet (Microsoft Excel)

WRCT1.5 Outputs: Validation of full list of students assigned to professor account with status "pending"

WRCT1.6 Normal

WRCT1.7 White box

WRCT1.8 Functional

WRCT1.9 Integration

SAAT1.1 **Server Account Association Test**

SAAT1.2 Tests function to associate a student account with a professor account

SAAT1.3 Test will run function to associate a professor and student account, then validate in the database that the accounts are now associated

SAAT1.4 Inputs: Identifiers for valid professor and student account

SAAT1.5 Outputs: "True" if inputs are found as associated accounts, "False" if not

SAAT1.6 Normal

SAAT1.7 White box

SAAT1.8 Functional

SAAT1.9 Unit

SSPT1.1 **Server Spreadsheet Parse Test**

SSPT1.2 Tests function to parse plaintext from uploaded spreadsheet

SSPT1.3 Test will run function to parse an uploaded spreadsheet and output its values in an object containing plaintext attributes and validate that these attribute values match the input

SSPT1.4 Inputs: Known valid spreadsheets for all potential use cases (class students list, grading rubric), known correct plaintext form of values in these spreadsheets

SSPT1.5 Outputs: "True" if function output matches plaintext, "False" if not

SSPT1.6 Normal

SSPT1.7 White box

SSPT1.8 Functional

SSPT1.9 Unit

SCCT1.1 **Server Canvas Connection Test**

SCCT1.2 Tests ability to make API calls to UC Canvas

SCCT1.3 Test will make an API call to UC Canvas to refresh and fetch access tokens as a test of ability to interface with the Canvas API

SCCT1.4 Inputs: Valid UC Canvas API key

SCCT1.5 Outputs: "True" if token refresh API call returns an object containing a valid access token, "False" if not

SCCT1.6 Normal

SCCT1.7 White box

SCCT1.8 Functional

SCCT1.9 Unit

SGAT1.1 **Server Grades Access Test**

SGAT1.2 Tests function for professor to access assigned grades

SGAT1.3 Test will run the function to fetch a list of grade entries associated with a class on a test database known to contain some entries valid for some students

SGAT1.4 Inputs: test database, identifiers for known valid list of database entries

SGAT1.5 Outputs: "True" if database entries returned all match known list of correct entries, "False" if there is any deviation (any correct entry missing, any incorrect entry present)

SGAT1.6 Normal

SGAT1.7 White box

SGAT1.8 Functional

SGAT1.9 Unit

##### Test Case Matrix
| Test ID | Normal/Abnormal | Black/White Box | Functional/Performance | Integration/Unit |
|--|--|--|--|--|
| WRAT1 | Normal | White | Functional | Integration |
| WRLT1 | Normal | White | Functional | Integration |
| WRUT1 | Normal | White | Functional | Integration |
| WRET1 | Normal | White | Functional | Integration |
| WRGT1 | Normal | White | Functional | Integration |
| WRCT1 | Normal | White | Functional | Integration |
| SAAT1 | Normal | White | Functional | Unit |
| SSPT1 | Normal | White | Functional | Unit |
| SCCT1 | Normal | White | Functional | Unit |
| SGAT1 | Normal | White | Functional | Unit |
