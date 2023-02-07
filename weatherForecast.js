function weather() {
    let city = document.getElementById("city")
    let response1 = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=930a1ba727a99be0ffe9c24abd87902d&units=metric")
    response1.then((res) => {
        res.json().then((data) => {
            let para = document.getElementById("para");
            para.innerHTML="<br>Current Temperature : "+data.main.temp+"<br><br>"+"Maximum Temperature : "+data.main.temp_max+"<br><br>"+"Minimum Temperature : "+data.main.temp_min+"<br><br><br>"
        })
    })
    let response2 = fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=930a1ba727a99be0ffe9c24abd87902d&units=metric")
    response2.then((res) => {
        res.json().then((data) => {
            let j = 0;
            var temp = [];
            var date = [];
            for (let i = 0; i < data.list.length; i = i + 8) {
                temp[j] = data.list[i].main.temp;
                a = data.list[i].dt_txt.split(" ");
                date[j] = a[0];
                console.log(temp[j])
                console.log(date[j])
                j++;
            }
            chartPlotting(date, temp)
        })
    })

}
function chartPlotting(date, temp) {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: date,
            datasets: [{
                label: 'Temperature',
                data: temp,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


