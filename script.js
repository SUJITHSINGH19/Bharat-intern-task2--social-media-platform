function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message) {
      const chatBox = document.querySelector('.chat-box');
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.innerHTML = `<strong>User:</strong> ${message}`;
      chatBox.appendChild(messageDiv);
      messageInput.value = '';
    }
  }
  
  function assignTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value;
    if (task) {
      alert(`Task assigned: ${task}`);
      taskInput.value = '';
    }
  }
  