Setup Information
Server Setup: Install all dependencies in the server folder by running "npm i", then start it with "npm start".
Client Setup: Install all dependencies in the client (sell-or-buy) folder by running "npm i", and start by running "ng serve".
Database Requirement: MongoDB needs to be installed.
Access: Open http://localhost:4200 in your browser.
Please note that the project is not yet finished and is under development!

Project Documentation: My Angular Project
Public Section
Unauthenticated Users
For unauthenticated users, the project provides the following features:

Home Page: http://localhost:4200/home-page
Login Page: http://localhost:4200/login
Register Page: http://localhost:4200/register

Section Only for Authenticated Users
For authenticated users, the project offers the following functionalities:

Catalog Page: http://localhost:4200/catalog
Authenticated Users see all records.
Create Record Page: http://localhost:4200/create
Authenticated Users can create a record
Profile Page: http://localhost:4200/profile
Users can view their email and any records they have created.
Details Page: http://localhost:4200/catalog/:id
Users can see detailed information about a record.
If the user owns the record, they see buttons for editing and deleting.
Edit Record Page: http://localhost:4200/catalog/:id/edit
Users who own the record can edit the information for a given record.
Upon pressing the "Delete" button, if the user owns the record, it will be deleted.

Data Validation
To ensure the validity of the entered data, the project utilizes the built-in form validation capabilities in Angular. This includes field requirements, minimum and maximum length for text fields, and others.

Error Handling
In case of an error returned from the server, users will receive an appropriate error message, aiding them in understanding the issue and taking necessary actions.
