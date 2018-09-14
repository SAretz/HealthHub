(function(){
    function HR_DashboardController($scope) {

        function init() {
            $("body").removeAttr("data-layout");
            initCharts();
        }
        init();

        function initCharts() {

//
// Splite Area
//

            var options = {
                chart: {
                    height: 380,
                    type: 'area',
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                colors: ["#727cf5", "#6c757d", "#ff5a4e"],
                series: [{
                    name: 'Series 1',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: 'Series 2',
                    data: [11, 32, 45, 32, 34, 52, 41]
                },{
                    name: 'Series 3',
                    data: [23, 43, 43, 4, 23, 23, 23]
                }],

                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                },
                tooltip: {
                    fixed: {
                        enabled: false,
                        position: 'topRight'
                    }
                },
                grid: {
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.2
                    },
                    borderColor: '#f1f3fa'
                }
            }

            var chart = new ApexCharts(
                document.querySelector("#spline-area"),
                options
            );

            chart.render();


//
// AREA CHART - DATETIME X-AXIS
//

            var options = {
                annotations: {
                    yaxis: [{
                        value: 30,
                        borderColor: '#999',
                        yAxisIndex: 0,
                        label: {
                            show: true,
                            text: 'Support',
                            style: {
                                color: "#fff",
                                background: '#00E396'
                            }
                        }
                    }],
                    xaxis: [{
                        value: new Date('14 Nov 2012').getTime(),
                        borderColor: '#999',
                        yAxisIndex: 0,
                        label: {
                            show: true,
                            text: 'Rally',
                            style: {
                                color: "#fff",
                                background: '#775DD0'
                            }
                        }
                    }]
                },
                chart: {
                    type: 'area',
                    height: 380,
                    scroller: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    data:
                        [{
                            x: 1996,
                            y: 322
                        },
                            {
                                x: 1997,
                                y: 324
                            },
                            {
                                x: 1998,
                                y: 329
                            },
                            {
                                x: 1999,
                                y: 342
                            },
                            {
                                x: 2000,
                                y: 348
                            },
                            {
                                x: 2001,
                                y: 334
                            },
                            {
                                x: 2002,
                                y: 325
                            },
                            {
                                x: 2003,
                                y: 316
                            },
                            {
                                x: 2004,
                                y: 318
                            },
                            {
                                x: 2005,
                                y: 330
                            },
                            {
                                x: 2006,
                                y: 355
                            },
                            {
                                x: 2007,
                                y: 366
                            },
                            {
                                x: 2008,
                                y: 337
                            },
                            {
                                x: 2009,
                                y: 352
                            },
                            {
                                x: 2010,
                                y: 377
                            },
                            {
                                x: 2011,
                                y: 383
                            },
                            {
                                x: 2012,
                                y: 344
                            },
                            {
                                x: 2013,
                                y: 366
                            },
                            {
                                x: 2014,
                                y: 389
                            },
                            {
                                x: 2015,
                                y: 334
                            }
                        ]
                }],
                markers: {
                    size: 0,
                    style: 'hollow',
                },
                xaxis: {
                    type: 'datetime',
                    min: new Date('01 Mar 2012').getTime()
                },
                yaxis: {
                    // min: 24,
                },
                tooltip: {
                    key: {
                        format: 'dd MMM yyyy'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0,
                        stops: [0, 40, 100]
                    }
                },

            }

            var chart = new ApexCharts(
                document.querySelector("#area-chart-datetime"),
                options
            );

            chart.render();
        }

    }
    HR_DashboardController.$inject = ['$scope'];

    angular.module('HealthApp').controller('HR_DashboardController',HR_DashboardController);
}());
