!function (r) {
    "use strict";
    var a = function () {
        this.$body = r("body"), this.charts = []
    };
    a.prototype.respChart = function (a, t, e, o) {

        var i = a.get(0).getContext("2d"), d = r(a).parent();
        return function () {
            var n;

            n = new Chart(i, {type:"radar", data: e, options: o});

            return n
        }()
    }, a.prototype.initCharts = function () {
        var a = [];
        if (r("#radar-chart-example").length > 0) {
            a.push(this.respChart(r("#radar-chart-example"), "Radar", {
                labels: ["Sleeping", "Cycling", "Running"],
                datasets: [{
                    label: "Activity",
                    backgroundColor: "rgba(57,175,209,0.2)",
                    borderColor: "#39afd1",
                    pointBackgroundColor: "#39afd1",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#39afd1",
                    data: [56, 55, 60]
                }]
            }, {maintainAspectRatio: !1}))
        }
        return a
    }, a.prototype.init = function () {
        var a = this;
        Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif', a.charts = this.initCharts(), r(window).on("resize", function (t) {
            r.each(a.charts, function (r, a) {
                try {
                    a.destroy()
                } catch (r) {
                }
            }), a.charts = a.initCharts()
        })
    }, r.ChartJs = new a, r.ChartJs.Constructor = a
}(window.jQuery), function (r) {
    "use strict";
    r.ChartJs.init()
}(window.jQuery);