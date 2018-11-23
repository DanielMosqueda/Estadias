window.onload= function (argument) {
var numeros = (5+8+8+5+8+7+5+8)/8;
var h = 18;
var m= 23;
	document.getElementById("Pro1").innerHTML = " Promedio General del curso :"+"  "+ numeros+"%";
	document.getElementById("Pro2").innerHTML = " Promedio General del curso :"+"  "+ numeros+"%";
	document.getElementById("Pro3").innerHTML = " Promedio General del curso :"+"  "+ numeros+"%";
	document.getElementById("Pro4").innerHTML = " Promedio General del curso :"+"  "+ numeros+"%";
	document.getElementById("manNumber").innerHTML = h;
	document.getElementById("womanNumber").innerHTML = m;
	document.getElementById("manNumber2").innerHTML = h;
	document.getElementById("womanNumber2").innerHTML = m;
	document.getElementById("manNumber3").innerHTML = h;
	document.getElementById("womanNumber3").innerHTML = m;
	document.getElementById("manNumber4").innerHTML = h;
	document.getElementById("womanNumber4").innerHTML = m;



	var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Mujeres", "Hombres", ],
        datasets: [{
            label: '# of Votes',
            data: [23, 18],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                
                
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Mujeres", "Hombres", ],
        datasets: [{
            label: '# of Votes',
            data: [23, 18],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                
                
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}