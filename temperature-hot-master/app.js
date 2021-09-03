const api_Key = `b65e0a542c4a05420441afeb24fb78e8`;
const searchTemp = ()=>{
    const city = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`
    // Fecthing the data
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemp(data));
}


// Display Temperature 
const displayTemp = (data)=>{
    console.log(data);
}