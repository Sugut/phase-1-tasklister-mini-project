document.addEventListener("DOMContentLoaded", () => {
  let form= document.querySelector("form")
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    handleToDo(e.target.new_task.value)
    form,reset()
  });
});

function handleToDo(todo){
  let p = document.createElement('p')
  let btn= document.createElement('button')
  btn,addEventListener('click', handleDelete)
  btn.textContent="x"
  p.textContent=todo
  p.appendChild(btn)
  console.log(p)
  document.querySelector("#list").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}