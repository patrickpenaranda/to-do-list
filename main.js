window.addEventListener("load", () => {
var add_btn = document.getElementById("add");
var column_2 = document.getElementById("column-2-id");
var column_1 = document.getElementById("column-1-id");
var error_message = document.createElement("h2");
var message_div = document.createElement("div");


document.getElementById("textbox").addEventListener("click", delete_error_msg, false)
document.getElementById("textbox").addEventListener("keypress", delete_error_msg, false)
<<<<<<< HEAD
=======

>>>>>>> 56bd76ed8c8eb572754680af4f7a781df765b345

display();

function delete_error_msg(event) {
    var btn = event.target;
    var div_column_1 = btn.parentElement.childNodes;
    div_column_1.forEach(element => {
        if(element.className === "errorMsg_div") {
            element.remove();
        }
    });    
}

window.addEventListener("keydown", enter_Event, true)


//Enter key
function enter_Event(key) {
    if(key.keyCode == "13") {
        main(); 
    }
}

//Add btton
add_btn.addEventListener("click", () => {
    main();
})

const mediaQuery = window.matchMedia("(max-width: 650px)");

function myfunction(e) {
    if(!e.matches){
        document.getElementsByTagName('li').style.fontFamily = "Coronetscript, cursive";
    }
}
mediaQuery.addListener(myfunction);


//main function
function main() {
    
    var textBox = document.getElementById("textbox").value;
    if(textBox == "") {
        error_message.style.color = 'white';
        error_message.style.background = 'red';
        error_message.innerText = "Empty Field";
        error_message.style.width = "75%";
        error_message.style.marginLeft = "auto";
        error_message.style.marginRight = "auto";
        error_message.style.marginTop = ".5rem";
        error_message.style.marginBottom = "0";
        message_div.setAttribute("class", "errorMsg_div")
        message_div.appendChild(error_message);
        column_1.appendChild(message_div);
        console.log("Empty Field!");    
    } else {
        var i = localStorage.length;
        var ul_div = document.createElement("div");
        var div_lists = document.createElement("div");
        var u_lists = document.createElement("ul");
        var lists = document.createElement("li");
        var dlete_btn = document.createElement("i");
        var success = document.createElement("i");
        var dlete_btn_div = document.createElement("div");
        var unicode = document.createElement("span");

        unicode.innerHTML = "&#9755";
        unicode.style.paddingTop = "15px";
        unicode.style.fontSize = "20px";
        unicode.style.paddingLeft = "5px"
        unicode.style.color = "black";

        localStorage.setItem(textBox, unicode.innerHTML);   

            success.setAttribute("class","far fa-calendar-check")

            success.style.cursor = "pointer";
            success.style.background = "green";
            success.style.color = "white";
            success.style.marginRight = "25%"
            dlete_btn.setAttribute("class", "fas fa-trash")
            
            dlete_btn.style.cursor = "pointer";
            dlete_btn.style.color = "white";
            dlete_btn.style.background = "red";

            const mediaQuery = window.matchMedia("(max-width: 650px)");


            function myfunction(e) {
                if(e.matches){
                    success.style.padding = "1rem 10%";
                    dlete_btn.style.padding = "1em 10%";
                }
                else {
                    success.style.padding = ".5rem 20%";
                    dlete_btn.style.padding = ".5rem 20%";
                }
            }
            mediaQuery.addListener(myfunction);

            lists.innerText = textBox;
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
            div_lists.style.border = "1px solid gray";
            div_lists.style.fontWeight = "700";

            dlete_btn_div.style.display = "flex";
            dlete_btn_div.style.width = "25%";
            dlete_btn_div.style.padding = ".5rem .5rem";
            dlete_btn_div.style.flexDirection = "row";
            dlete_btn_div.appendChild(success);
            dlete_btn_div.appendChild(dlete_btn);
            div_lists.appendChild(unicode);
            div_lists.appendChild(ul_div);
            div_lists.appendChild(dlete_btn_div);

            dlete_btn.addEventListener("click", (event)=> {
                const btn = event.target;
                if(btn.className == "fas fa-trash") {
                    const key = btn.parentElement.parentElement.childNodes[1].innerText;
                    console.log(key);
                    localStorage.removeItem(key);
                    btn.parentElement.parentElement.remove();
                }
            })

            success.addEventListener("click", (e)=> {
                if(e.target.className === "far fa-calendar-check") {
                    var span = e.target.parentElement.parentElement.childNodes[0];
                    var key = e.target.parentElement.parentElement.childNodes[1].innerText;
                    span.innerHTML = "&#10003"
                    span.style.color = "green";

                    var value = span.innerHTML;
                    localStorage.removeItem(key);
                    localStorage.setItem(key, value);
                }
            })

            dlete_btn_div.appendChild(success);
            dlete_btn_div.appendChild(dlete_btn);
            div_lists.appendChild(ul_div);
            div_lists.appendChild(dlete_btn_div);

            column_2.append(div_lists);

        }
        document.getElementById("textbox").value = "";
    }



    //Window Session Start
function display() {

    for(let i = 0; i < localStorage.length; i++) { 
        var dlete_btn = document.createElement("i");
        var column_2 = document.getElementById("column-2-id");
        var textBox = document.getElementById("textbox");
        var ul_div = document.createElement("div");
        var div_lists = document.createElement("div");
        var u_lists = document.createElement("ul");
        var lists = document.createElement("li");
        
        var success = document.createElement("i");
        var dlete_btn_div = document.createElement("div");

        var unicode = document.createElement("span");

        
        const mediaQuery = window.matchMedia("(max-width: 650px)");

        function myfunction(e) {
            if(e.matches){
                success.style.padding = "1rem 10%";
                dlete_btn.style.padding = "1rem 10%";
            }
        }

            mediaQuery.addListener(myfunction);

            success.setAttribute("class","far fa-calendar-check")      
            success.style.cursor = "pointer";
            success.style.background = "green";
            success.style.color = "white";
            success.style.marginRight = "25%"

            dlete_btn.setAttribute("class", "fas fa-trash");
            
            dlete_btn.style.cursor = "pointer";
            dlete_btn.style.color = "white";
            dlete_btn.style.background = "red";

            lists.innerText = localStorage.key(i.toString());
            
            lists.style.overflowWrap = "break-word";
            lists.style.wordBreak = "break-word";
            lists.style.listStyle = "none";

            unicode.innerText = localStorage.getItem(lists.innerText)
            unicode.style.paddingTop = "15px";
            unicode.style.fontSize = "20px";
            unicode.style.paddingLeft = "5px"
            
            if(localStorage.getItem(localStorage.key(i)) == "✓") {
                console.log("true")
                unicode.style.color = "green";
            } else {
                unicode.style.color = "black";
            }
            

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
            div_lists.style.border = "1px solid gray";
            div_lists.style.fontWeight = "700";

            dlete_btn_div.style.display = "flex";
            dlete_btn_div.style.width = "25%";
            dlete_btn_div.style.padding = ".5rem .5rem";
            dlete_btn_div.style.flexDirection = "row";

            dlete_btn.addEventListener("click", (event)=> {
                const btn = event.target;
                var key = btn.parentElement.parentElement.childNodes[1].innerText;
                if(btn.className == "fas fa-trash") {
                    
                    console.log(key);
                    localStorage.removeItem(key)
                    btn.parentElement.parentElement.remove();
                }
                key = "";
            })

            success.addEventListener("click", (e)=> {
                if(e.target.className === "far fa-calendar-check") {
                    var span = e.target.parentElement.parentElement.childNodes[0];
                    var key = e.target.parentElement.parentElement.childNodes[1].innerText;
                    span.innerHTML = "&#10003"
                    span.style.color = "green";

                    var value = span.innerHTML;
                    localStorage.removeItem(key);
                    localStorage.setItem(key, value);

                }  
            })

            dlete_btn_div.appendChild(success);
            dlete_btn_div.appendChild(dlete_btn);

            
            div_lists.appendChild(unicode);
            div_lists.appendChild(ul_div);
            div_lists.appendChild(dlete_btn_div);

            
            column_2.append(div_lists);
        }
}

}, false)

