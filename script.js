var url = "https://api.covid19api.com/country/nepal";

$.getJSON(
    url,
    function(data) {
        //console.log(data);
        var latest = data.length - 1;
        //console.log("Confirmed: " + data[latest].Confirmed);
        //console.log("Recovered: " +data[latest].Recovered);
        //console.log("Deaths: " +data[latest].Deaths);
        $(".confirmed").text("Total Confirmed Cases: " + data[latest].Confirmed);
        $(".recovered").text("Recovered: " +data[latest].Recovered);
        $(".death").text("Deaths: " +data[latest].Deaths);
        $(".active").text("Active: " +data[latest].Active);

        var alldata = [];
        var alllabels = [];
        var activedata = [];
        for (var i = 0; i < data.length; i++) {
            alldata.push(data[i].Confirmed);
            alllabels.push(data[i].Date.slice(0,10));
            activedata.push(data[i].Active);
        }
        console.log(alldata);

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // type of chart
            type: 'line',

            // datasets
            data: {
                labels: alllabels,
                datasets: [{
                    label: 'Total Cases',
                    backgroundColor: 'rgb(255, 99, 132,0.3)',
                    borderColor: 'rgb(255, 99, 132,0.3)',
                    data: alldata,
                    //fill: false
                }, {
                    label: 'Active Cases',
                    backgroundColor: 'rgb(0, 232, 208,0.7)',
                    borderColor: 'rgb(0, 232, 208,0.1)',
                    data: activedata,
                    //fill: false
                }]
            },

            // Configuration options go here
            options: {
                tooltips: {
                    mode: 'label'
                }
            }
        });
    }
)