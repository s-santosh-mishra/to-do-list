const add = document.getElementById("bt1");
const tasks = document.getElementById("body");
const inp = document.getElementById("top")
const bt3 = document.getElementById("bt3")

bt3.style.display = "none"
function showbt3() {
    if (tasks.children.length > 0) {
        bt3.style.display = "block"
    }
    else{
        bt3.style.display = "none"
    }
}

bt3.addEventListener(("click"),()=>{
    let cfmtion = confirm("Are you sure to delete all the tasks!")
    if(cfmtion == true){
        tasks.innerHTML=""
        showbt3()
    }
    else{
        return
    }
    
})

add.addEventListener("click", () => {
    if (inp.value == "") {
        alert("Please enter a task")
        return
    }
    const newTask = document.createElement("div");
    newTask.className = "i_body";
    newTask.innerHTML = `
            <div class="task" id="task_select">
                <input type="checkbox" name="checkbox" class="check">
                <span class="contt">${inp.value}</span>
            </div>
            <button title="Delete the Task" class="in_bt">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
    tasks.appendChild(newTask);
    showbt3()
    inp.value = ""
    inp.focus()

    const checked = newTask.querySelector(".check")
    checked.addEventListener("click", () => {
        newTask.classList.toggle("checked")
    })

    const con_dlt = newTask.querySelector(".in_bt")
    con_dlt.addEventListener("click", () => {
        tasks.removeChild(newTask)
        showbt3()
    })
    
});

inp.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission or newline
        add.click(); // Simulate click on the Add button
    }
});


const clr = document.getElementById("bt2")
clr.addEventListener("click", () => {
    inp.value = ""

})

