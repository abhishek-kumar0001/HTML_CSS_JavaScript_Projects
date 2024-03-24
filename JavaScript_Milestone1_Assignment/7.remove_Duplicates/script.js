let itemContainer = [];

function addItem() {
  let item = document.getElementById('user-item').value;
  if (!item) {
    alert("Please enter an item.");
    return;
  }
  
  if (!itemContainer.includes(item)) {
    itemContainer.push(item);
    alert("Successfully added item.");
  } else {
    alert("Item already added.");
  }
}

document.getElementById('submit-btn').addEventListener("click", addItem);