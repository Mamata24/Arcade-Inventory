window.addEventListener("load", function () {
	var addItem = document.getElementById("addItem");
	addItem.addEventListener("click", addtoInventory);
});

function addtoInventory() {
	var addForm = document.getElementById("addForm");
	// addForm.innerHTML = "";

	var form = document.createElement("form");
	let formRow = document.createElement("div");

	let formGroupItem = document.createElement("div");
	let formGroupQty = document.createElement("div");
	let formGroupPrice = document.createElement("div");
	let BtnformGroup = document.createElement("div");

	formGroupItem.setAttribute("class", "form-group col-md-3");
	formGroupQty.setAttribute("class", "form-group col-md-3");
	formGroupPrice.setAttribute("class", "form-group col-md-3");
	BtnformGroup.setAttribute("class", "form-group col-md-3  mt-4");

	let labelITem = document.createElement("label");
	let labelQty = document.createElement("label");
	let labelPRice = document.createElement("label");

	labelITem.setAttribute("for", "item");
	labelQty.setAttribute("for", "quantity");
	labelPRice.setAttribute("for", "price");

	labelITem.textContent = "Item";
	labelQty.textContent = "Quantity";
	labelPRice.textContent = "Price per Unit(in Rs.)";

	let inputItem = document.createElement("input");
	let inputQty = document.createElement("input");
	let inputPrice = document.createElement("input");

	inputItem.setAttribute("class", "form-control");
	inputQty.setAttribute("class", "form-control");
	inputPrice.setAttribute("class", "form-control");

	inputItem.setAttribute("type", "text");
	inputQty.setAttribute("type", "text");
	inputPrice.setAttribute("type", "text");

	inputItem.setAttribute("id", "item");
	inputQty.setAttribute("id", "quantity");
	inputPrice.setAttribute("id", "price");

	let addBtn = document.createElement("button");

	addBtn.textContent = "Add";
	addBtn.setAttribute("class", "btn btn-success");
	addBtn.setAttribute("id", "addBtn");

	formGroupItem.append(labelITem, inputItem);
	formGroupQty.append(labelQty, inputQty);
	formGroupPrice.append(labelPRice, inputPrice);
	BtnformGroup.append(addBtn);

	formRow.setAttribute("class", "form-row");

	formRow.append(formGroupItem, formGroupQty, formGroupPrice, BtnformGroup);

	form.append(formRow);

	addForm.append(form);
}
