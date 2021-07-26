document.addEventListener("DOMContentLoaded", () => {
  //Variables to use within the event listner and other functions.
  const formBox = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  //sumbit event on the form element.
  formBox.addEventListener("submit", function(event) {
    event.preventDefault()

    const taskInput = document.querySelector("#new-task-description").value
    //User input container, used input as the inner text. 
    const newTask = document.createElement("li")
    newTask.innerText = taskInput

    //Append list to the UL in html, while creaitng a new li. 
    taskList.appendChild(newTask)
    formBox.reset();
    //Delete button added to the Li as the Li is created so it can be delted.
    const buttonElement = document.createElement('button')
    buttonElement.innerText = 'Delete'
    buttonElement.addEventListener("click", function(){
      newTask.remove();
    })
    newTask.appendChild(buttonElement)


  
  
  
  })


  

});
