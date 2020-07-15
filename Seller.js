window.addEventListener("load", function () {
    var form = document.getElementById("form");
    form.addEventListener("submit", () => {
        event.preventDefault()
        add_data()
    });
    console.log(form)
    // display_data();
    var tbody = document.getElementById("xyz");
    console.log(tbody)
});

// var products = [{
//     product: "Rice",
//     rate: 45,
//     id: 1
// }, {
//     product: "Bread",
//     rate: 45,
//     id: 2
// }]

var datas = [];
var current_page = 1;
var tickets_per_page = 5;
var total_page = 1;
function add_data() {
    event.preventDefault();

    var items = document.getElementById("items").value;
    var quantity = document.getElementById("qty").value;
    var amount = document.getElementById("amount").value
    var time = new Date();
    time = time.toLocaleTimeString();

    var data = {
        id: datas.length + 1,
        items: items,
        quantity: quantity,
        amount: amount,
        time: time,
    };

    datas.push(JSON.stringify(data));

    render_ticket(datas);
}

function render_ticket(datas) {
    var tbody = document.querySelector("tbody");
    console.log(tbody)
    tbody.innerHTML = "";

    if (datas.length == 0) {
        tbody.innerHTML =
            '<tr><td class="text-center text-red" colspan="4">No Data Available</td></tr>';
    }
    for (var i = 0; i < tickets_per_page; i++) {
        console.log(datas[i])
        var row = create_row_data(datas[i]);
        tbody.append(row);
    }
    setup_pagination();
}

//create row
function create_row_data(data) {
    var tr = document.createElement("tr");

    var id = document.createElement("td");
    id.textContent = data.id;

    var items = document.createElement("td");
    items.textContent = data.items;

    var quantity = document.createElement("td");
    quantity.textContent = data.quantity;

    var amount = document.createElement("td");
    amount.textContent = data.amount * data.quantity;

    var time = document.createElement("td");
    time.textContent = data.time;

    tr.append(id, items, quantity, amount, time);

    return tr;
}

// var filter = document.getElementById("filter");
// filter.addEventListener("change", function () {
//     var value = this.value;
//     var filtered = tickets.filter(function (ticket) {
//         return ticket.category == value;
//     });
//     render_ticket(filtered);
// });

function pagination_btn(n) {
    var pageItem = document.createElement("li");
    pageItem.setAttribute("class", "page-item");
    var pageLink = document.createElement("a");
    pageLink.setAttribute("class", "page-link");
    pageLink.textContent = n;
    pageLink.addEventListener("click", page_change(n));
    pageItem.append(pageLink);
    return pageItem;
}

function setup_pagination() {
    total_page = Math.ceil(tickets.length / tickets_per_page);
    var pagination = document.querySelector(".pagination");
    //   var next = document.getElementById("next");
    pagination.innerHTML = "";

    for (var i = 1; i < total_page + 1; i++) {
        var btn = pagination_btn(i);
        pagination.append(btn);
    }
}

function page_change(n) {
    return function () {
        current_page = n;
        var start = (current_page - 1) * tickets_per_page;
        var end = start + tickets_per_page;
        var pageList = tickets.slice(start, end);
        display_data()
        render_ticket(pageList);
    };
}

function display_data() {
    var page = document.getElementById("total");
    page.textContent = current_page + " / " + total_page;
}
