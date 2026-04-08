// Define Item structure
interface Item {
	itemId: number;
	name: string;
	category: string;
	quantity: number;
	price: number;
	supplierName: string;
	stockStatus: string;
	popularItem: boolean;
	comment?: string; // optional
}

// Get references elements
const message = document.getElementById("message");
const list = document.getElementById("list");
const popularList = document.getElementById("popular_list");

// Initial list of items
const items: Item[] = [
	{
		itemId: 1,
		name: "Wireless Mouse",
		category: "Electronics",
		quantity: 50,
		price: 29.99,
		supplierName: "TechSupply Co.",
		stockStatus: "In Stock",
		popularItem: true
	},
	{
		itemId: 2,
		name: "Office Chair",
		category: "Furniture",
		quantity: 10,
		price: 120.0,
		supplierName: "Comfort Seating Ltd.",
		stockStatus: "Low Stock",
		popularItem: false
	},
	{
		itemId: 3,
		name: "Denim Jacket",
		category: "Clothing",
		quantity: 0,
		price: 59.99,
		supplierName: "Fashion Hub",
		stockStatus: "Out of Stock",
		popularItem: false
	},
	{
		itemId: 4,
		name: "Hammer",
		category: "Tools",
		quantity: 25,
		price: 15.49,
		supplierName: "Builder's Choice",
		stockStatus: "In Stock",
		popularItem: true
	},
	{
		itemId: 5,
		name: "LED Desk Lamp",
		category: "Electronics",
		quantity: 5,
		price: 35.99,
		supplierName: "BrightLights Inc.",
		stockStatus: "Low Stock",
		popularItem: false,
		comment: "Energy efficient model"
	},
	{
		itemId: 6,
		name: "Sofa Set",
		category: "Furniture",
		quantity: 0,
		price: 899.99,
		supplierName: "Home Comforts",
		stockStatus: "Out of Stock",
		popularItem: true,
		comment: "Limited edition"
	},
	{
		itemId: 7,
		name: "Cordless Drill",
		category: "Tools",
		quantity: 8,
		price: 89.99,
		supplierName: "HandyTech",
		stockStatus: "Low Stock",
		popularItem: true
	},
	{
		itemId: 8,
		name: "Graphic T-Shirt",
		category: "Clothing",
		quantity: 100,
		price: 19.99,
		supplierName: "Trendy Apparel",
		stockStatus: "In Stock",
		popularItem: false
	},
	{
		itemId: 9,
		name: "Notebook",
		category: "Miscellaneous",
		quantity: 200,
		price: 3.99,
		supplierName: "PaperWorld",
		stockStatus: "In Stock",
		popularItem: false
	},
	{
		itemId: 10,
		name: "Bluetooth Speaker",
		category: "Electronics",
		quantity: 2,
		price: 49.99,
		supplierName: "AudioMax",
		stockStatus: "Low Stock",
		popularItem: true,
		comment: "Waterproof model"
	}
];

// Hold the item currently being edited
let editItem: Item;

/**
 * Displays all items in the main list with edit/delete/feature options
 */
function showItems() {
	list.innerHTML='';
	for(let i=0;i<items.length;i++){
		const liEle: HTMLLIElement = document.createElement("li");
		liEle.classList.add("item-card");

		// Edit button
		const editButton: HTMLButtonElement = document.createElement("button");
		editButton.innerHTML = "Edit";
		editButton.addEventListener("click", function() {
			editItem=items[i];
			(<HTMLInputElement> document.getElementById("itemId")).value = String(editItem.itemId);
			(<HTMLInputElement> document.getElementById("itemName")).value = editItem.name;
			(<HTMLInputElement> document.getElementById("category")).value = editItem.category;
			(<HTMLInputElement> document.getElementById("quantity")).value = String(editItem.quantity);
			(<HTMLInputElement> document.getElementById("price")).value = String(editItem.price);
			(<HTMLInputElement> document.getElementById("supplierName")).value = editItem.supplierName;
			(<HTMLInputElement> document.getElementById("stockStatus")).value = editItem.stockStatus;
			(<HTMLInputElement> document.getElementById("popularItem")).checked = editItem.popularItem;
			(<HTMLInputElement> document.getElementById("comment")).value = editItem.comment||"";
			(<HTMLInputElement> document.getElementById("add_or_edit_form")).scrollIntoView();
		});

		// Delete button
		const deleteButton: HTMLButtonElement = document.createElement("button");
		deleteButton.innerHTML = "Delete";
		deleteButton.addEventListener("click", function() {
			if (confirm(`Do you want to delete ${items[i].name}?`)) {
				items.splice(i,1);
				message.innerHTML = "Delete the item from database!";
				loadItems();
			}
		});

		// Mark as Popular button
		const popularButton: HTMLButtonElement = document.createElement("button");
		popularButton.innerHTML = "Popular";
		popularButton.addEventListener("click", function() {
			items[i].popularItem = true;
			message.innerHTML = "Set the item to popular!";
			loadItems();
		});

		// Display item info
		liEle.innerHTML = `
			<div>
				Item ID: ${items[i].itemId} <br> 
				Item Name: ${items[i].name} <br> 
				Category: ${items[i].category} <br> 
				Quantity: ${items[i].quantity} <br> 
				Price: ${items[i].price} <br> 
				Supplier Name: ${items[i].supplierName} <br>
				Stock Status: ${items[i].stockStatus} <br> 
				Featrued Item: ${items[i].popularItem?"Yes":"No"} <br>
				Comment: ${items[i].comment||"-"} <br>
			</div>
		`;

		// Append action buttons
		liEle.appendChild(editButton);
		liEle.appendChild(deleteButton);
		if (!items[i].popularItem) {
			liEle.appendChild(popularButton);
		}

		list.appendChild(liEle);
	}
}

/**
 * Displays only the popular items in a separate list
 */
function showPopularItems() {
	popularList.innerHTML='';
	for(let i=0;i<items.length;i++){
			if (items[i].popularItem) {
				const liEle: HTMLLIElement = document.createElement("li");
				liEle.classList.add("item-card");
				liEle.innerHTML = `
					<div>
						Item ID: ${items[i].itemId} <br> 
						Item Name: ${items[i].name} <br> 
						Category: ${items[i].category} <br> 
						Quantity: ${items[i].quantity} <br> 
						Price: ${items[i].price} <br> 
						Supplier Name: ${items[i].supplierName} <br>
						Stock Status: ${items[i].stockStatus} <br> 
						Featrued Item: ${items[i].popularItem?"Yes":"No"} <br>
						Comment: ${items[i].comment||"-"} <br>
					</div>
			`;
			popularList.appendChild(liEle);
		}
	}
}

/**
 * Searches for items by name and displays the result
 */
function searchItem() {
	const sName = (<HTMLInputElement> document.getElementById("sName")).value;
	let searchItems = [];

	// Filter items based on search name
	for (let i = 0; i < items.length; i++) {
		if (items[i].name.toLowerCase().indexOf(sName.toLowerCase()) >= 0) {
			searchItems.push(items[i]);
		}
	}
	const result = (<HTMLInputElement> document.getElementById("search_result"));
	result.innerHTML = "";
	if (searchItems.length > 0) {
		for (let i=0;i<searchItems.length;i++) {
			result.innerHTML += `
			<div class="item-card">
				Item ID: ${searchItems[i].itemId} <br> 
				Item Name: ${searchItems[i].name} <br> 
				Category: ${searchItems[i].category} <br> 
				Quantity: ${searchItems[i].quantity} <br> 
				Price: ${searchItems[i].price} <br> 
				Supplier Name: ${searchItems[i].supplierName} <br>
				Stock Status: ${searchItems[i].stockStatus} <br> 
				Featrued Item: ${searchItems[i].popularItem?"Yes":"No"} <br>
				Comment: ${searchItems[i].comment||"-"} <br>
			</div>
		`;
		}
	} else {
		result.innerHTML = 'No Such Item!';
	}
}

/**
 * Handles adding a new item or editing an existing one
 */
function addItem() {
	message.innerHTML = "";

	// Get values from form inputs
	const itemId = (<HTMLInputElement> document.getElementById("itemId")).value;
	const itemName = (<HTMLInputElement> document.getElementById("itemName")).value;
	const category = (<HTMLInputElement> document.getElementById("category")).value;
	const quantity = (<HTMLInputElement> document.getElementById("quantity")).value;
	const price = (<HTMLInputElement> document.getElementById("price")).value;
	const supplierName = (<HTMLInputElement> document.getElementById("supplierName")).value;
	const stockStatus = (<HTMLInputElement> document.getElementById("stockStatus")).value;
	const popularItem = (<HTMLInputElement> document.getElementById("popularItem")).checked;
	const comment = (<HTMLInputElement> document.getElementById("comment")).value;

	// Form validation
	if (itemId === "" || isNaN(Number(itemId))) {
		message.innerHTML = "Item ID should be a number";
		return;
	}
	// Prevent duplicate itemId for new items
	if (editItem == null) {
		for (let i=0;i<items.length;i++){
			if(items[i].itemId == Number(itemId)) {
				message.innerHTML = "Item ID should be unique";
				return;
			}
		}
	}
	// Other field validations
	if (itemName === "") {
		message.innerHTML = "Item name should be enter";
		return;
	}
	if (category === "") {
		message.innerHTML = "Category should be enter";
		return;
	}
	if (quantity === "") {
		message.innerHTML = "Quantity should be enter";
		return;
	}
	if (price === "") {
		message.innerHTML = "Price should be enter";
		return;
	}
	if (supplierName == "") {
		message.innerHTML = "Supplier name should be enter";
		return;
	}
	if (stockStatus == "") {
		message.innerHTML = "Stock status should be enter";
		return;
	}

	// If editing existing item, update its properties
	if (editItem == null) {
		// Add new item
		items[items.length] = {
			itemId: Number(itemId),
			name: itemName,
			category,
			quantity: Number(quantity),
			price: Number(price),
			supplierName,
			stockStatus,
			popularItem,
			comment,
		}
		message.innerHTML = "Add a new item to database!";
	} else {
		editItem.name = itemName;
		editItem.category = category;
		editItem.quantity = Number(quantity);
		editItem.price = Number(price);
		editItem.supplierName = supplierName;
		editItem.stockStatus = stockStatus;
		editItem.popularItem = popularItem;
		editItem.comment = comment;
		message.innerHTML = "Update the item to database!";
		editItem = null; // Clear edit mode
	}

	// Clear form inputs
	(<HTMLInputElement> document.getElementById("itemId")).value = "";
	(<HTMLInputElement> document.getElementById("itemName")).value = "";
	(<HTMLInputElement> document.getElementById("category")).value = "";
	(<HTMLInputElement> document.getElementById("quantity")).value = "";
	(<HTMLInputElement> document.getElementById("price")).value = "";
	(<HTMLInputElement> document.getElementById("supplierName")).value = "";
	(<HTMLInputElement> document.getElementById("stockStatus")).value = "";
	(<HTMLInputElement> document.getElementById("popularItem")).checked = false;
	(<HTMLInputElement> document.getElementById("comment")).value = "";

	// Refresh the item lists
	loadItems()
}

function loadItems() {
	// Initial render of the items
	showItems();
	showPopularItems();
}

loadItems();
