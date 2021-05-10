menu_list_array= ["Pe-pe Panner Pizza","Veg Supreme Pizza", "Chicken Tandoori Pizza", "Deluxe Vegi Pizza",
"Extra Vaganza Pizza"];

function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
     for(var i=0;i<menu_list_array.length;1++){
     }
     htmldata=htmldata+"</ol>"
         document.getElementById("display_menu").innerHTML = htmldata;
}

function add_iteam(){
    var htmldata;
    var iteam=document.getElementById("add_iteam").value;
    menu_list_array.push(iteam);
    menu_list_array.sort();
    htmldata="<setion class='cards'>"
    for(var i=0;i<menu_list_array.length;1++){
        htmldata=htmldata+'<div class="cards">'+'<img src="images/pizzaImg.png"/>'+menu_list_array[i]
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}