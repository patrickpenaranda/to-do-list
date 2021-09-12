window.addEventListener("load", () => {
var add_btn = document.getElementById("add");
var column_2 = document.getElementById("column-2-id");
var column_1 = document.getElementById("column-1-id");
var error_message = document.createElement("h2");
var message_div = document.createElement("div");
var users_name = document.getElementById("two");

document.getElementById("textbox").addEventListener("click", delete_error_msg, false)
document.getElementById("textbox").addEventListener("keypress", delete_error_msg, false)

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
        var ul_div = document.createElement("div");
        var div_lists = document.createElement("div");
        var u_lists = document.createElement("ul");
        var lists = document.createElement("li");
        var dlete_btn = document.createElement("i");
        var success = document.createElement("i");
        var dlete_btn_div = document.createElement("div");
        
        sessionStorage.setItem(users_name.value, textBox);   

            success.setAttribute("class","far fa-calendar-check")

            success.style.cursor = "pointer";
            success.style.background = "green";
            success.style.color = "white";

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
            lists.innerText = sessionStorage.getItem(users_name.value);
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

            dlete_btn_div.style.display = "flex";
            dlete_btn_div.style.width = "25%";
            dlete_btn_div.style.justifyContent = "space-between"
            dlete_btn_div.style.padding = ".5rem .5rem";
            dlete_btn_div.style.flexDirection = "row";
            dlete_btn_div.appendChild(success);
            dlete_btn_div.appendChild(dlete_btn);
            div_lists.appendChild(ul_div);
            div_lists.appendChild(dlete_btn_div);

            const dumm = users_name.value;

            dlete_btn.addEventListener("click", (event)=> {
                const btn = event.target;

                if(btn.className == "fas fa-trash") {
                    
                    const key = btn.parentElement.parentElement.innerText;
                    console.log(key);
                    sessionStorage.removeItem(dumm);
                    btn.parentElement.parentElement.remove();
                }
            })

            column_2.append(div_lists);

        }
        
        document.getElementById("textbox").value = "";
        document.getElementById("two").value = "";
    }



    //Main Function
function display() {


    for(let i = 0; i < sessionStorage.length; i++) { 
        var dlete_btn = document.createElement("i");
        var column_2 = document.getElementById("column-2-id");
        var textBox = document.getElementById("textbox");
        var ul_div = document.createElement("div");
        var div_lists = document.createElement("div");
        var u_lists = document.createElement("ul");
        var lists = document.createElement("li");
        
        var success = document.createElement("i");
        var dlete_btn_div = document.createElement("div");


        const mediaQuery = window.matchMedia("(max-width: 650px)");


        function myfunction(e) {
            if(e.matches){
                success.style.padding = "1rem 10%";
                dlete_btn.style.padding = "1rem 10%";
            }
            else {
                success.style.padding = ".5rem 20%";
                dlete_btn.style.padding = ".5rem 20%";
            }
        }

            mediaQuery.addListener(myfunction);
            success.setAttribute("class","far fa-calendar-check")      
            success.style.cursor = "pointer";
            success.style.background = "green";
            success.style.color = "white";

            

            dlete_btn.setAttribute("class", "fas fa-trash");
            
            dlete_btn.style.cursor = "pointer";
            dlete_btn.style.color = "white";
            dlete_btn.style.background = "red";

            
            
            


            lists.innerText = sessionStorage.getItem(sessionStorage.key(i));
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

            dlete_btn_div.style.display = "flex";
            dlete_btn_div.style.width = "25%";
            dlete_btn_div.style.justifyContent = "space-between"
            dlete_btn_div.style.padding = ".5rem .5rem";
            dlete_btn_div.style.flexDirection = "row";

            dlete_btn.addEventListener("click", (event)=> {
                const btn = event.target;

                if(btn.className == "fas fa-trash") {
                    
                    const key = btn.parentElement.parentElement.innerText;
                    console.log(key);
                    sessionStorage.removeItem(sessionStorage.key(i));
                    btn.parentElement.parentElement.remove();
                }
            })

            dlete_btn_div.appendChild(success);
            dlete_btn_div.appendChild(dlete_btn);

            

            div_lists.appendChild(ul_div);
            div_lists.appendChild(dlete_btn_div);

            
            column_2.append(div_lists);
        }
        
        
        
    }

}, false)

