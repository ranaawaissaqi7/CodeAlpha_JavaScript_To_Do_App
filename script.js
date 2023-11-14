
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('taskInput').focus();
});

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    var listItem = document.createElement('li');
    listItem.innerHTML = '<span>' + taskInput.value + '</span><button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
    
    // Append the new item to the list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';

    // Set focus back to the input field
    taskInput.focus();
}

function deleteTask(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}
