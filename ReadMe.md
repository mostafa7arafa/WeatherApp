# Weather Journal App
<h3>Table of content</h3>

 1. Description
 2. How it works?
 3. Sources
 ## Description
 Weather Journal App is a web application resposible for getting data from OpenWeatherMap.org and modify this data with adding to it the current feeling, then showing it to the user by updating the UI, the app will take **Zip Code** for specific place in USA and your feeling, then it will get the weather plus outputing your feeling for it. 
 
The code is divided to two main parts: Client side and Server side, client side is responsible for fetching (search for) the data in the input link, then sending it to the server side, also client side is resposible for updating the UI (website or user interface) with the date gotten from server side. While the server side is responsible for activiting the server, server is the place we can store in it the data got from the API and modify it.
## How it works?
first of all you need to open server.js then go to the terminal to activate the server by writing in the command line **node server.js** , after finishing excuting this line **Server is running at port: 8000** massege will be shown in the terminal.
>Note: make sure that the terminal is open in the same file that has server.js file.
>
when you finish, you will head to the browser then type to URL box **localhost:8000**, the website page will appear to you, then you can type the places' Zip code, then write your feeling, then press generate, you will get date, weather temperature and the input feeling right away. 
## Sources
 1. https://developer.mozilla.org/en-US/docs/Web/CSS/position
 2. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 3. https://drive.google.com/file/d/1_No9E3_-4ekSW1ucDYCsva-CVAzTUmcM/view
 4. https://www.codegrepper.com/code-examples/javascript/how+to+push+data+in+object+javascript
 5. https://openweathermap.org/appid
 6. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 7. https://nfpdiscussions.udacity.com/
 8. https://classroom.udacity.com/nanodegrees/nd001-mena-nfp2/parts/5c546e88-361e-4c4d-8fbd-1ad6dee27810/modules/42f360ec-ea7d-4619-8780-882642a3edd3/lessons/346b2d26-5c1e-4d05-b442-26222f2c93e1/concepts/58e551fe-9a86-4f82-89bc-ab737f5a399e

