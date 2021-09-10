var add_btn = document.getElementById("add");
var column_2 = document.getElementById("column-2-id");
var column_1 = document.getElementById("column-1-id");
var tbox = document.getElementById("textbox");
var error_message = document.createElement("h2");
var message_div = document.createElement("div");

window.addEventListener("keydown", enter_Event, true)

function enter_Event(key) {
    if(key.keyCode == "13") {
        main();
    }
}


add_btn.addEventListener("click", () => {
    main();
})

function main() {
    var textBox = document.getElementById("textbox");
    if(textBox.value == "") {
        error_message.style.color = 'white';
        error_message.style.background = 'red';
        error_message.innerText = "Empty Field";
        error_message.style.width = "75%";
        error_message.style.marginLeft = "auto";
        error_message.style.marginRight = "auto";
        error_message.style.marginTop = ".5rem";
        error_message.style.marginBottom = "0";
        message_div.appendChild(error_message);
        column_1.appendChild(message_div);
        console.log("Empty Field!");
        tbox.addEventListener('click', ()=> {
            error_message.parentElement.remove();
        })
        
    } else {
        console.log(textBox.value);
        
        var div_lists = document.createElement("div");
        var u_lists = document.createElement("ul");
        var lists = document.createElement("li");
        var dlete_btn = document.createElement("i");
        dlete_btn.setAttribute("class", "fas fa-trash")
        dlete_btn.style.padding = ".5rem";
        dlete_btn.style.cursor = "pointer";
        dlete_btn.style.background = "gray";
        lists.innerText = textBox.value;
        lists.style.display = "flex";
        lists.style.justifyContent = "space-around";
        lists.append(dlete_btn);

        u_lists.append(lists);

        div_lists.style.margin = ".5rem 0";
        div_lists.style.borderRadius = "10px";
        div_lists.style.border = "1px solid black";
        div_lists.appendChild(u_lists);

        
        dlete_btn.addEventListener("click", ()=> {
            dlete_btn.parentElement.parentElement.parentElement.remove();
        })
        column_2.append(div_lists);
        textBox.value = "";
    }
}