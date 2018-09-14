(function(){
    function DashboardController($scope) {
        function init() {
            initWizard();
            initChart();

        }
        init();

        function initWizard() {
            $('#progressbarwizard').bootstrapWizard({
                onTabShow: function (tab, navigation, index) {
                    var $total = navigation.find('li').length;
                    var $current = index + 1;
                    var $percent = ($current / $total) * 100;
                    $('#progressbarwizard').find('.bar').css({ width: $percent + '%' });
                }
            });
        }

        function initChart() {

            //
            // CIRCLE CHART - CUSTOM ANGLE
            //

            var options = {
                chart: {
                    height: 380,
                    width: 380,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: -30,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,

                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#0acf97', '#727cf5', '#fa5c7c', '#ffbc00'],
                series: [76,67,61,90],
                labels: ['Steps', 'Workouts', 'Artikel', 'Videos'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '13px',
                    position: 'left',
                    verticalAlign: 'top',
                    textAnchor: 'end',
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function(seriesName, opts) {
                        return seriesName + ":  " + opts.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 8,
                    },
                    containerMargin: {
                        left: 180,
                        top: 8
                    }
                },
                responsive: [{
                    breakpoint: 380,
                    options: {
                        chart: {
                            height: 240,
                            width: 240,
                        },
                        legend: {
                            show: false
                        }
                    }
                }]
            }

            var chart = new ApexCharts(
                document.querySelector("#circle-angle-radial"),
                options
            );

            chart.render();
        }


    }
    DashboardController.$inject = ['$scope'];




    angular.module('HealthApp').controller('DashboardController',DashboardController);
}());
