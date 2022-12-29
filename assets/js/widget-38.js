"use strict";

// Class definition
var KTChartsWidget38 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_38_chart");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-900');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');    

        var options = {
            series: [{
                name: '電壓(V)',
                data: [110.2,110.2,110.2,110.2,110.3,110.2,110.4,110.2,110.2,110.3,110.2,110.1,110.2,110.2,110.2,110.8,110.2,110.2,110.4,110.2,110.5,110.2,110.2,110.5,110.2,110.7,110.2,110.6,110.2,110.1]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['28%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false,
                offsetY: -28,
                style: {
                    fontSize: '13px',
                    colors: [labelColor]
                },
                    formatter: function(val) {
                        return val + "V";
                    }
            },
            // stroke: {
            //     show: true,
            //     width: 30,
            //     colors: ['transparent']
            // },
            xaxis: {
                categories: ["11/01","11/02","11/03","11/04","11/05","11/06","11/07","11/08","11/09","11/10","11/11","11/12","11/13","11/14","11/15","11/16","11/17","11/18","11/19","11/20","11/21","11/22","11/23","11/24","11/25","11/26","11/27","11/28","11/29","11/30"],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                min: 108,
                max: 112,
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    },
                    formatter: function(val) {
                        return Math.round(val * 100) / 100 + 'V';
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return  + val;
                    }
                } 
            },
            colors: [KTUtil.getCssVariableValue('--kt-primary'), KTUtil.getCssVariableValue('--kt-primary-light')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);
    }

    // Public methods
    return {
        init: function () {
            initChart();

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart();
            });
        }        
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget38;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget38.init();
});


 