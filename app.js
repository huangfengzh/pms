// Get references elements
var message = document.getElementById("message");
var list = document.getElementById("list");
var popularList = document.getElementById("popular_list");
// Initial list of items
var items = [
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
var editItem;
/**
 * Displays all items in the main list with edit/delete/feature options
 */
function showItems() {
    list.innerHTML = '';
    var _loop_1 = function (i) {
        var liEle = document.createElement("li");
        liEle.classList.add("item-card");
        // Edit button
        var editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.addEventListener("click", function () {
            editItem = items[i];
            document.getElementById("itemId").value = String(editItem.itemId);
            document.getElementById("itemName").value = editItem.name;
            document.getElementById("category").value = editItem.category;
            document.getElementById("quantity").value = String(editItem.quantity);
            document.getElementById("price").value = String(editItem.price);
            document.getElementById("supplierName").value = editItem.supplierName;
            document.getElementById("stockStatus").value = editItem.stockStatus;
            document.getElementById("popularItem").checked = editItem.popularItem;
            document.getElementById("comment").value = editItem.comment || "";
            document.getElementById("add_or_edit_form").scrollIntoView();
        });
        // Delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function () {
            if (confirm("Do you want to delete ".concat(items[i].name, "?"))) {
                items.splice(i, 1);
                message.innerHTML = "Delete the item from database!";
                loadItems();
            }
        });
        // Mark as Popular button
        var popularButton = document.createElement("button");
        popularButton.innerHTML = "Popular";
        popularButton.addEventListener("click", function () {
            items[i].popularItem = true;
            message.innerHTML = "Set the item to popular!";
            loadItems();
        });
        // Display item info
        liEle.innerHTML = "\n\t\t\t<div>\n\t\t\t\tItem ID: ".concat(items[i].itemId, " <br> \n\t\t\t\tItem Name: ").concat(items[i].name, " <br> \n\t\t\t\tCategory: ").concat(items[i].category, " <br> \n\t\t\t\tQuantity: ").concat(items[i].quantity, " <br> \n\t\t\t\tPrice: ").concat(items[i].price, " <br> \n\t\t\t\tSupplier Name: ").concat(items[i].supplierName, " <br>\n\t\t\t\tStock Status: ").concat(items[i].stockStatus, " <br> \n\t\t\t\tFeatrued Item: ").concat(items[i].popularItem ? "Yes" : "No", " <br>\n\t\t\t\tComment: ").concat(items[i].comment || "-", " <br>\n\t\t\t</div>\n\t\t");
        // Append action buttons
        liEle.appendChild(editButton);
        liEle.appendChild(deleteButton);
        if (!items[i].popularItem) {
            liEle.appendChild(popularButton);
        }
        list.appendChild(liEle);
    };
    for (var i = 0; i < items.length; i++) {
        _loop_1(i);
    }
}
/**
 * Displays only the popular items in a separate list
 */
function showPopularItems() {
    popularList.innerHTML = '';
    for (var i = 0; i < items.length; i++) {
        if (items[i].popularItem) {
            var liEle = document.createElement("li");
            liEle.classList.add("item-card");
            liEle.innerHTML = "\n\t\t\t\t\t<div>\n\t\t\t\t\t\tItem ID: ".concat(items[i].itemId, " <br> \n\t\t\t\t\t\tItem Name: ").concat(items[i].name, " <br> \n\t\t\t\t\t\tCategory: ").concat(items[i].category, " <br> \n\t\t\t\t\t\tQuantity: ").concat(items[i].quantity, " <br> \n\t\t\t\t\t\tPrice: ").concat(items[i].price, " <br> \n\t\t\t\t\t\tSupplier Name: ").concat(items[i].supplierName, " <br>\n\t\t\t\t\t\tStock Status: ").concat(items[i].stockStatus, " <br> \n\t\t\t\t\t\tFeatrued Item: ").concat(items[i].popularItem ? "Yes" : "No", " <br>\n\t\t\t\t\t\tComment: ").concat(items[i].comment || "-", " <br>\n\t\t\t\t\t</div>\n\t\t\t");
            popularList.appendChild(liEle);
        }
    }
}
/**
 * Searches for items by name and displays the result
 */
function searchItem() {
    var sName = document.getElementById("sName").value;
    var searchItems = [];
    // Filter items based on search name
    for (var i = 0; i < items.length; i++) {
        if (items[i].name.toLowerCase().indexOf(sName.toLowerCase()) >= 0) {
            searchItems.push(items[i]);
        }
    }
    var result = document.getElementById("search_result");
    result.innerHTML = "";
    if (searchItems.length > 0) {
        for (var i = 0; i < searchItems.length; i++) {
            result.innerHTML += "\n\t\t\t<div class=\"item-card\">\n\t\t\t\tItem ID: ".concat(searchItems[i].itemId, " <br> \n\t\t\t\tItem Name: ").concat(searchItems[i].name, " <br> \n\t\t\t\tCategory: ").concat(searchItems[i].category, " <br> \n\t\t\t\tQuantity: ").concat(searchItems[i].quantity, " <br> \n\t\t\t\tPrice: ").concat(searchItems[i].price, " <br> \n\t\t\t\tSupplier Name: ").concat(searchItems[i].supplierName, " <br>\n\t\t\t\tStock Status: ").concat(searchItems[i].stockStatus, " <br> \n\t\t\t\tFeatrued Item: ").concat(searchItems[i].popularItem ? "Yes" : "No", " <br>\n\t\t\t\tComment: ").concat(searchItems[i].comment || "-", " <br>\n\t\t\t</div>\n\t\t");
        }
    }
    else {
        result.innerHTML = 'No Such Item!';
    }
}
/**
 * Handles adding a new item or editing an existing one
 */
function addItem() {
    message.innerHTML = "";
    // Get values from form inputs
    var itemId = document.getElementById("itemId").value;
    var itemName = document.getElementById("itemName").value;
    var category = document.getElementById("category").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    var supplierName = document.getElementById("supplierName").value;
    var stockStatus = document.getElementById("stockStatus").value;
    var popularItem = document.getElementById("popularItem").checked;
    var comment = document.getElementById("comment").value;
    // Form validation
    if (itemId === "" || isNaN(Number(itemId))) {
        message.innerHTML = "Item ID should be a number";
        return;
    }
    // Prevent duplicate itemId for new items
    if (editItem == null) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].itemId == Number(itemId)) {
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
            category: category,
            quantity: Number(quantity),
            price: Number(price),
            supplierName: supplierName,
            stockStatus: stockStatus,
            popularItem: popularItem,
            comment: comment,
        };
        message.innerHTML = "Add a new item to database!";
    }
    else {
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
    document.getElementById("itemId").value = "";
    document.getElementById("itemName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("supplierName").value = "";
    document.getElementById("stockStatus").value = "";
    document.getElementById("popularItem").checked = false;
    document.getElementById("comment").value = "";
    // Refresh the item lists
    loadItems();
}
function loadItems() {
    // Initial render of the items
    showItems();
    showPopularItems();
}
loadItems();
