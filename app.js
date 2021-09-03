const api_Key = `b65e0a542c4a05420441afeb24fb78e8`;
const searchTemp = ()=>{
    const city = document.getElementById('input').value;
    document.getElementById('input').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`
    // Fecthing the data
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemp(data));
}

const setInnerText = (id,text)=>{
    document.getElementById(id).innerText = text;
}

// Display Temperature 
const displayTemp = (data)=>{
    setInnerText('city',data.name);
    setInnerText('temp',data.main.temp);
    setInnerText('condition',data.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src',url);
}