# article_microservice
  This repository is my attempt to create an Article Microservice using the clean architecture pattern
  as described by Robert C. Martin (Uncle Bob) in his [blog article](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).
  The main objective of this architecture is the seperation of the software into layers and applying _the dependecy rule_ resulting in an application that is
  intrinsically testable and making any external part obsolete (like DataBases and Web Frameworks) so it could be replaced with the minimum of fuzz.
## Features
* XSS Protection (via ["sanitize-html"](https://www.npmjs.com/package/sanitize-html))
## Running Locally
#### Prerequisites
* Git
* Node JS
* [MongoDB Atlas](https://www.mongodb.com/atlas) account (free)

1. Clone the repo and install dependencies
  ```
      git clone 
      cd article_microservice
      npm i
  ```
  
2. Modify the .env file

   Save `sampledotenv` as `.env` and then add your database
   
3. Start the server

   To run in development mode
   
   ```
   npm run dev 
   ```
## About
![Clean Architecture ](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

### The Dependency Rule
The concentric circles represent different areas of software. In general, the further in you go, the higher level the software becomes.
The outer circles are mechanisms. The inner circles are policies.

The overriding rule that makes this architecture work is The Dependency Rule.
This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle.
In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

By the same token, data formats used in an outer circle should not be used by an inner circle, especially if those formats are generate by a framework in an outer circle. We don’t want anything in an outer circle to impact the inner circles.
