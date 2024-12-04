const scroll_up_btn = document.querySelector("#scroll_up");
const nav_items = document.querySelectorAll(".nav_item");
const active_nav_item = nav_items[0];
const hamburger_menu = document.querySelector("#hamburger_menu");
const hamburger_list = document.querySelector(("#hamburger_list"));
const hamburger_menu_active = document.querySelector("#hamburger_menu_active");


function scroll_to_top(){
    document.querySelector("html").scrollIntoView({
        behavior:  "smooth"
    })
}

//active_flex class controls the visibility of the hamburger menu
hamburger_menu.addEventListener("click", () => {
    if(hamburger_list.classList.contains("active_flex")){
        hamburger_list.classList.remove("active_flex");
    }
    else{
        hamburger_list.classList.add("active_flex");
    }
})
window.addEventListener("scroll", () => {
    hamburger_list.classList.remove("active_flex");
})
hamburger_menu_active.addEventListener("click", () => {
    hamburger_list.classList.remove("active_flex");
})


scroll_up_btn.addEventListener("click", scroll_to_top);
