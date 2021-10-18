/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
//add 1 to month as d.getMonth is array starts from zero to first month to 11 for last one.
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

//acquiring api credentials from OpenWeatherMap website. 

const apiKey = '&appid=49e11f53292e73e2af9d1601440ef372&units=metric';
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

//event to start the show.
document.getElementById('generate').addEventListener('click', findIt);
//nested event callBack function.
function findIt(event) {
    //value to be posted.
    const feeling = document.getElementById('feelings').value;
    const zipCode = document.getElementById('zip').value;
    //async function to get the selected data from Api.
    findTemp(baseURL, zipCode, apiKey)
        //then adding (posting) to the returned data our current feeling.
        .then((data) => {
            //console.log(data);
            postData("/addFeel", {
                date: newDate,
                temp: data.main.temp,
                feeling: feeling,
            }).then(updateUI());
        });
};
//getting data from Api using fetch api.
const findTemp = async (url, zip, api) => {
    const res = await fetch(url + zip + api);
    try {
        const data = await res.json();
        return data;
    } catch (e) {
        console.log('error', e);
    }
}
/*calling the server post route /addFeel to add feeling to it with
temp that returned from server and date declared above*/
const postData = async (url = '', data = {}) => {
    //console.log(data)
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData
    } catch (e) {
        console.log("error", e);
    }
}
//updating user interface by getting data by get route /all.
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = `<strong>Today's date:</strong> ${allData.date}`;
        //temp getten from api in kelvin, so I changed it to be shown as Celsius.
        document.getElementById('temp').innerHTML = `<strong>Today's Temp:</strong> ${Math.round(allData.temp)}°C`;
        document.getElementById('content').innerHTML = `<strong>My feeling:</strong> ${allData.feeling}`;

    } catch (e) {
        console.log("error", e);
    }
}