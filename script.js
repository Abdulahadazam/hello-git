document.getElementById('addButton').addEventListener('click', function() {
    var inputField = document.getElementById('inputField');
    var textList = document.getElementById('textList');
         

    if (inputField.value.trim() !== '') {
        var newListItem = document.createElement('li');
        newListItem.textContent = inputField.value;
        textList.appendChild(newListItem);
        inputField.value = '';
    }
});
 


