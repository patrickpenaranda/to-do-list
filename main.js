window.addEventListener("load", () => {
var add_btn = document.getElementById("add");
var column_2 = document.getElementById("column-2-id");
var column_1 = document.getElementById("column-1-id");
var tbox = document.getElementById("textbox");
var error_message = document.createElement("h2");
var message_div = document.createElement("div");


window.addEventListener("keydown", enter_Event, true)


//Enter key
function enter_Event(key) {
    if(key.keyCode == "13") {
        main();
    }
}

//Delete icon
add_btn.addEventListener("click", () => {
    main();
})

//main function
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
    
        var ul_div = document.createElement("div");
        var div_lists = document.createElement("div");
        var u_lists = document.createElement("ul");
        var lists = document.createElement("li");
        var dlete_btn = document.createElement("i");
        var dlete_btn_div = document.createElement("div");

        dlete_btn.setAttribute("class", "fas fa-trash")
        dlete_btn.style.padding = ".5rem";
        dlete_btn.style.cursor = "pointer";
        dlete_btn.style.background = "gray";
        dlete_btn_div.style.paddingRight = "20%";
        dlete_btn_div.style.paddingLeft = "20%";
        dlete_btn_div.style.paddingTop = ".5rem"

        lists.innerText = textBox.value;
        lists.style.fontFamily = "Coronetscript, cursive";
        lists.style.overflowWrap = "break-word";
        lists.style.wordBreak = "break-word";
        lists.style.listStyle = "none";

        u_lists.style.display = "flex";
        u_lists.style.flexWrap = "wrap";
        u_lists.append(lists);

        ul_div.style.display = "flex";
        ul_div.style.flexWrap = "wrap";
        ul_div.style.width = "75%";
        ul_div.style.maxWidth = "75%";
        ul_div.appendChild(u_lists);

        div_lists.style.margin = ".5rem 0";
        div_lists.style.display = "flex";
        div_lists.style.borderRadius = "10px";
        div_lists.style.border = "1px solid black";
        
        div_lists.style.fontWeight = "700";

        dlete_btn_div.appendChild(dlete_btn);
        div_lists.appendChild(ul_div);
        div_lists.appendChild(dlete_btn_div);
        
        
        dlete_btn.addEventListener("click", ()=> {
            dlete_btn.parentElement.parentElement.remove();
        })
        column_2.append(div_lists);
        textBox.value = "";
    }
}
})

    



