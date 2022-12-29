// Class definition
var KTChartsWidget23 = (function () {
	// Private methods
	var initChart = function () {
		// Check if amchart library is included
		if (typeof am5 === "undefined") {
			return;
		}

		var element = document.getElementById("kt_charts_widget_23");

		if (!element) {
			return;
		}

		var root;

		var init = function() {
			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			root = am5.Root.new(element);

			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([am5themes_Animated.new(root)]);

			// Create chart
			// https://www.amcharts.com/docs/v5/charts/xy-chart/
			var chart = root.container.children.push(
				am5xy.XYChart.new(root, {
					panX: false,
					panY: false,
					layout: root.verticalLayout,
				})
			);

			var data = [
				{
					date: "11/01",
					remaining: 800,
					used: 840,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/02",
					remaining: 813,
					used: 840.60,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/03",
					remaining: 800,
					used: 878.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/04",
					remaining: 815,
					used: 882.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/05",
					remaining: 800,
					used: 515.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/06",
					remaining: 818,
					used: 556.40,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/07",
					remaining: 800,
					used: 779.60,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/08",
					remaining: 819,
					used: 843.40,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/09",
					remaining: 800,
					used: 920.60,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/10",
					remaining: 815,
					used: 969.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/11",
					remaining: 800,
					used: 865.40,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/12",
					remaining: 818,
					used: 674.40,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/13",
					remaining: 800,
					used: 693.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/14",
					remaining: 810,
					used: 853.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/15",
					remaining: 807,
					used: 838.40,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/16",
					remaining: 800,
					used: 903.60,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/17",
					remaining: 809,
					used: 918.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/18",
					remaining: 800,
					used: 858.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/19",
					remaining: 814,
					used: 571.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/20",
					remaining: 807,
					used: 610.75,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/21",
					remaining: 800,
					used: 850.25,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/22",
					remaining: 814,
					used: 786.75,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/23",
					remaining: 800,
					used: 761.25,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/24",
					remaining: 805,
					used: 614.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/25",
					remaining: 800,
					used: 749.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/26",
					remaining: 819,
					used: 571.75,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/27",
					remaining: 800,
					used: 555.25,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/28",
					remaining: 815,
					used: 897.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/29",
					remaining: 810,
					used: 907.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					date: "11/39",
					remaining: 800,
					used: 706.00,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
			];

			// Create axes
			// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
			var xAxis = chart.xAxes.push(
				am5xy.CategoryAxis.new(root, {
					categoryField: "date",
					renderer: am5xy.AxisRendererX.new(root, {}),
					//tooltip: am5.Tooltip.new(root, {}),
				})
			);

			xAxis.data.setAll(data);

			xAxis.get("renderer").labels.template.setAll({
				paddingTop: 20,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-500")),
			});

			xAxis.get("renderer").grid.template.setAll({
				disabled: true,
				strokeOpacity: 0,
			});

			var yAxis = chart.yAxes.push(
				am5xy.ValueAxis.new(root, {
					min: 0,
					extraMax: 0.1,
					renderer: am5xy.AxisRendererY.new(root, {}),
				})
			);

			yAxis.get("renderer").labels.template.setAll({
				paddingTop: 0,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-500")),
			});

			yAxis.get("renderer").grid.template.setAll({
				stroke: am5.color(KTUtil.getCssVariableValue("--kt-gray-300")),
				strokeWidth: 1,
				strokeOpacity: 1,
				strokeDasharray: [3],
			});

			// Add series
			// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
			var series1 = chart.series.push(
				am5xy.ColumnSeries.new(root, {
					name: "剩餘容量",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "remaining",
					categoryXField: "date",
					tooltip: am5.Tooltip.new(root, {
						pointerOrientation: "horizontal",
						labelText: "{name} in {categoryX}: {valueY} {info}",
					}),
				})
			);

			series1.columns.template.setAll({
				tooltipY: am5.percent(10),
				templateField: "columnSettings",
			});

			series1.data.setAll(data);

			var series2 = chart.series.push(
				am5xy.LineSeries.new(root, {
					name: "用電量(kWh)",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "used",
					categoryXField: "date",
					fill: am5.color(KTUtil.getCssVariableValue("--kt-success")),
					stroke: am5.color(KTUtil.getCssVariableValue("--kt-success")),
					tooltip: am5.Tooltip.new(root, {
						pointerOrientation: "horizontal",
						labelText: "{name} in {categoryX}: {valueY} {info}",
					}),
				})
			);

			series2.strokes.template.setAll({
				stroke: am5.color(KTUtil.getCssVariableValue("--kt-success")),
			});

			series2.strokes.template.setAll({
				strokeWidth: 3,
				templateField: "strokeSettings",
			});

			series2.data.setAll(data);

			series2.bullets.push(function () {
				return am5.Bullet.new(root, {
					sprite: am5.Circle.new(root, {
						strokeWidth: 3,
						stroke: am5.color(KTUtil.getCssVariableValue("--kt-success")),
						radius: 5,
						fill: am5.color(KTUtil.getCssVariableValue("--kt-success-light")),
					}),
				});
			});

			series1.columns.template.setAll({
				strokeOpacity: 0,
				cornerRadiusBR: 0,
				cornerRadiusTR: 6,
				cornerRadiusBL: 0,
				cornerRadiusTL: 6,
			});

			chart.set("cursor", am5xy.XYCursor.new(root, {}));

			chart.get("cursor").lineX.setAll({ visible: false });
			chart.get("cursor").lineY.setAll({ visible: false });

			// Add legend
			// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
			var legend = chart.children.push(
				am5.Legend.new(root, {
					centerX: am5.p50,
					x: am5.p50,
				})
			);
			legend.data.setAll(chart.series.values);

			legend.labels.template.setAll({
				fontWeight: "600",
				fontSize: 14,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			// Make stuff animate on load
			// https://www.amcharts.com/docs/v5/concepts/animations/
			chart.appear(1000, 100);
			series1.appear();
		}

		am5.ready(function () {
			init();
		}); // end am5.ready()

		// Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
	};

	// Public methods
	return {
		init: function () {
			initChart();
		},
	};
})();

// Webpack support
if (typeof module !== "undefined") {
	module.exports = KTChartsWidget23;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTChartsWidget23.init();
});
