data = [
	{ item: "Chocolate", date: "Fri Jun 12 2020 14:53:15 GMT+0530", Price: 100 },
	{ item: "Sweets", date: "Fri Jun 12 2020 14:53:15 GMT+0530", Price: 300 },
	{ item: "Lays", date: "Fri Jun 12 2020 14:53:15 GMT+0530", Price: 40 },
	{ item: "Brown Bread", date: "Fri Jun 12 2020 14:53:15 GMT+0530", Price: 55 },
	{ item: "Fruits", date: "Fri Jun 12 2020 14:53:15 GMT+0530", Price: 120 },
	{ item: "Vegetables", date: "Fri Jun 12 2020 14:53:15 GMT+0530", Price: 90 },
	{ item: "Flower", date: "Fri Jun 12 2020 14:53:15 GMT+0530", Price: 70 },
];

InventoryData = [
	{ item: "Rice", Quantity: 100 },
	{ item: "Wheat", Quantity: 150 },
	{ item: "Chocolate", Quantity: 10 },
	{ item: "Sweets", Quantity: 40 },
	{ item: "Fruits", Quantity: 120 },
	{ item: "Vegetables", Quantity: 170 },
	{ item: "Oil", Quantity: 100 },
	{ item: "Sugar", Quantity: 125 },
];

let inventoryItem = InventoryData.map((item) => item.item);
let inventoryQty = InventoryData.map((item) => item.Quantity);

// fetching data
let labelItem = data.map((item) => item.item);
let SalesData = data.map((item) => item.Price);

function AddChart() {
	ctx = document.getElementById("chart");
	var ctx, chart;

	chart = new Chart(ctx, {
		type: "line",
		data: {
			labels: labelItem,
			datasets: [
				{
					label: "Sales",
					data: SalesData,
					backgroundColor: createColor(255),
					borderColor: createColor(255),
				},
			],
			borderwidth: 2,
			hoverBorderColor: "#f5f6fa",
		},
		options: {
			//for title of chart
			title: {
				display: true,
				text: "Sales Data of a month",
				fontSize: 24,
			},
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	});
}

// Random function
function random(num) {
	return Math.floor(Math.random() * num);
}

// Color Function
function createColor(num) {
	return `rgba(${random(255)},${random(255)},${random(255)},${0.4})`;
}

function chartInventory() {
	ctx = document.getElementById("chart");
	var ctx, chart;

	chart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: inventoryItem,
			datasets: [
				{
					label: "Quantity",
					data: inventoryQty,
					backgroundColor: createColor(255),
					borderColor: createColor(255),
				},
			],
			borderwidth: 2,
			hoverBorderColor: "#f5f6fa",
		},
		options: {
			//for title of chart
			title: {
				display: true,
				text: "Inventory Data of a month",
				fontSize: 24,
			},
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	});
}

window.addEventListener("load", function () {
	var showChart = document.getElementById("show");
	showChart.addEventListener("click", AddChart);

	var showInventory = document.getElementById("inventoryReport");
	showInventory.addEventListener("click", chartInventory);
});
