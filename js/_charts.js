$(document).ready(function () {
    var ctx = document.getElementById('progress-chart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["Done", "Open"],
            datasets: [{
                backgroundColor: ['rgb(190, 219, 57)','rgb(125,125,125)'],
                borderColor: 'rgb(255, 255, 255)',
                data: [10, 20],
            }]
        },

        // Configuration options go here
        options: {}
    });
});