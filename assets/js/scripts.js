

// Add a checked symbol when clicking on a menu category 
var list = document.getElementById('menu-categories');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI' ) {
        ev.target.classList.toggle('checked');
    }
   
}, false);
// Deselect all other categories and show specfic menu
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
/*var menuicons= document.getElementById('menu-categories');
menuicons.onclick = function (event){
    var target = getEventTarget(event);
    alert(target);
}*/
var ul = document.getElementById('menu-categories');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    var selectedcategory = target.innerText;
    var selectedcategoryimage = target.id;

    //Categories 
    var sizecategory = document.getElementById("size-category");
    var doughcategory = document.getElementById("dough-category");
    var cheesecategory = document.getElementById("cheese-category");
    var saucecategory = document.getElementById("sauce-category");
    var meatcategory = document.getElementById("meat-category");
    var veggiescategory = document.getElementById("veggies-category");

    //Specfic menus 
    var sizemenu = document.getElementById("size-menu");
    var doughmenu = document.getElementById("dough-menu");
    var cheesemenu = document.getElementById("cheese-menu");
    var saucemenu = document.getElementById("sauce-menu");
    var meatmenu = document.getElementById("meat-menu");
    var veggiesmenu = document.getElementById("veggies-menu");

    if (selectedcategory == 'Size' || selectedcategoryimage == 'size-icon') {
        sizecategory.classList.add('checked');
        //Remove checked from other items 
        doughcategory.classList.remove('checked');
        cheesecategory.classList.remove('checked');
        saucecategory.classList.remove('checked');
        meatcategory.classList.remove('checked');
        veggiescategory.classList.remove('checked');

        sizemenu.style.display="flex";
        doughmenu.style.display="none";
        cheesemenu.style.display="none";
        saucemenu.style.display="none";
        meatmenu.style.display="none";
        veggiesmenu.style.display="none";
    }
    if (selectedcategory == 'Dough'|| selectedcategoryimage == 'dough-icon') {
        doughcategory.classList.add('checked');

        sizecategory.classList.remove('checked');
        cheesecategory.classList.remove('checked');
        saucecategory.classList.remove('checked');
        meatcategory.classList.remove('checked');
        veggiescategory.classList.remove('checked');

        sizemenu.style.display="none";
        doughmenu.style.display="flex";
        cheesemenu.style.display="none";
        saucemenu.style.display="none";
        meatmenu.style.display="none";
        veggiesmenu.style.display="none";
    }

    if (selectedcategory == 'Cheese'|| selectedcategoryimage == 'cheese-icon') {
        cheesecategory.classList.add('checked');

        sizecategory.classList.remove('checked');
        doughcategory.classList.remove('checked');
        saucecategory.classList.remove('checked');
        meatcategory.classList.remove('checked');
        veggiescategory.classList.remove('checked');

        sizemenu.style.display="none";
        doughmenu.style.display="none";
        cheesemenu.style.display="flex";
        saucemenu.style.display="none";
        meatmenu.style.display="none";
        veggiesmenu.style.display="none";
    }

    if (selectedcategory == 'Sauce'|| selectedcategoryimage == 'sauce-icon') {
        saucecategory.classList.add('checked');

        sizecategory.classList.remove('checked');
        cheesecategory.classList.remove('checked');
        doughcategory.classList.remove('checked');
        meatcategory.classList.remove('checked');
        veggiescategory.classList.remove('checked');

        sizemenu.style.display="none";
        doughmenu.style.display="none";
        cheesemenu.style.display="none";
        saucemenu.style.display="flex";
        meatmenu.style.display="none";
        veggiesmenu.style.display="none";
    }

    if (selectedcategory == "Meat"|| selectedcategoryimage == 'meat-icon') {
        meatcategory.classList.add('checked');

        sizecategory.classList.remove('checked');
        doughcategory.classList.remove('checked');
        saucecategory.classList.remove('checked');
        cheesecategory.classList.remove('checked');
        veggiescategory.classList.remove('checked');

        sizemenu.style.display="none";
        doughmenu.style.display="none";
        cheesemenu.style.display="none";
        saucemenu.style.display="none";
        meatmenu.style.display="flex";
        veggiesmenu.style.display="none";
    }

    if (selectedcategory == 'Veggies' || selectedcategoryimage == 'veggies-icon') {
        veggiescategory.classList.add('checked');

        sizecategory.classList.remove('checked');
        doughcategory.classList.remove('checked');
        saucecategory.classList.remove('checked');
        meatcategory.classList.remove('checked');
        cheesecategory.classList.remove('checked');

        sizemenu.style.display="none";
        doughmenu.style.display="none";
        cheesemenu.style.display="none";
        saucemenu.style.display="none";
        meatmenu.style.display="none";
        veggiesmenu.style.display="flex";
    }
}
//Get size
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var ul = document.getElementById('size-menu');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    //Get size text
    var selectedsize = (target.innerText).replace(/\s+/g, '');
    //Get size icon
    var selectedsizeicon = (target.id);
    //Get size checkbox 
    var selectedsizeiconbox = (target.id);
    //Sizes 
    var smallsize = document.getElementById("Small");
    var mediumsize = document.getElementById("Medium");
    var largesize= document.getElementById("Large");

    var smalliconbox =document.getElementById("small-icon-box");
    var mediumiconbox =document.getElementById("medium-icon-box");
    var largeiconbox =document.getElementById("large-icon-box");

    var pizzapreviewsize = document.getElementById("pizza-preview").getElementsByTagName("img");
    //Add size to price list 
    var pricelist = document.getElementById("price-list");
    var sizepricelist = document.getElementById("size-selected");
    if (selectedsize == "Small" || 
        selectedsizeicon =="small-icon" || 
        selectedsizeiconbox =="small-icon-box") {

        smalliconbox.classList.add('checkbox');
        mediumiconbox.classList.remove('checkbox');
        largeiconbox.classList.remove('checkbox');

        smallsize.classList.add('checked');
        mediumsize.classList.remove('checked');
        largesize.classList.remove('checked');
        sizepricelist.innerHTML="Small +8.99"; 

        for (var i = 0; i < pizzapreviewsize.length; i++) {
            pizzapreviewsize[i].style.maxWidth = "65%";
        }
    }
    if (selectedsize == "Medium" || 
        selectedsizeicon =="medium-icon" || 
        selectedsizeiconbox =="medium-icon-box") {
            
        smalliconbox.classList.remove('checkbox');
        mediumiconbox.classList.add('checkbox');
        largeiconbox.classList.remove('checkbox');

        smallsize.classList.remove('checked');
        mediumsize.classList.add('checked');
        largesize.classList.remove('checked');
        sizepricelist.innerHTML="Medium +9.99"; 

        for (var i = 0; i < pizzapreviewsize.length; i++) {
            pizzapreviewsize[i].style.maxWidth = "70%";
        }
    }

    if (selectedsize == "Large" || 
        selectedsizeicon =="large-icon" || 
        selectedsizeiconbox =="large-icon-box") {

        smalliconbox.classList.remove('checkbox');
        mediumiconbox.classList.remove('checkbox');
        largeiconbox.classList.add('checkbox');

        smallsize.classList.remove('checked');
        mediumsize.classList.remove('checked');
        largesize.classList.add('checked');
        sizepricelist.innerHTML="Large +10.99"; 
        for (var i = 0; i < pizzapreviewsize.length; i++) {
            pizzapreviewsize[i].style.maxWidth = "75%";
        }
    }
    updateTotal();
}
// Pick a Dough /  Crust  
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var ul = document.getElementById('dough-menu');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    //Get crust text
    var selectedcrust = (target.innerText).replace(/\s+/g, '');
    var selectedcrusticonconfirm="";
   //Get crust icon
    var selectedcrusticon = target.tagName;
    //Crust icon box
    var selectedcrusticonbox = target.id;

    if (selectedcrusticon == 'IMG'){
        selectedcrusticonconfirm = target.id;
        //alert(selectedcrust + " " + selectedcrusticonconfirm);
    }
     //Crusts
    var whitecrust= document.getElementById("White crust");
    var wholewheatcrust = document.getElementById("Whole wheat crust");
    var whitecrustbox = document.getElementById("whitecrust-icon-box");
    var wheatcrustbox = document.getElementById("wheatcrust-icon-box");
    //Previews
    var previewholewheatcrust = document.getElementById("preview-wholewheatcrust");
    var previewhitecrust = document.getElementById("preview-whitecrust");
    
    
    //Add size to price list 
    var doughpricelist = document.getElementById("dough-selected");
    if (selectedcrust == "Whitecrust" ||
    selectedcrusticonconfirm == "whitecrust-icon"||
    selectedcrusticonbox == "whitecrust-icon-box") {

        whitecrustbox.classList.add('checkbox');
        wheatcrustbox.classList.remove('checkbox');

        whitecrust.classList.add('checked');
        wholewheatcrust.classList.remove('checked');

        doughpricelist.innerHTML="White crust";    
        previewhitecrust.style.visibility="visible";
        previewholewheatcrust.style.visibility="hidden";
    }
    if (selectedcrust == "Wholewheatcrust" || 
        selectedcrusticonconfirm == "wheatcrust-icon" ||
        selectedcrusticonbox == "wheatcrust-icon-box") {
        whitecrustbox.classList.remove('checkbox');
        wheatcrustbox.classList.add('checkbox');
    
        whitecrust.classList.remove('checked');
        wholewheatcrust.classList.add('checked');

        doughpricelist.innerHTML="Wholewheat crust +1.00";  
        previewhitecrust.style.visibility="hidden";
        previewholewheatcrust.style.visibility="visible";
    }
    updateTotal();
}
// Pick a Sauce
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var ul = document.getElementById('sauce-menu');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    var selectedsauce = (target.innerText).replace(/\s+/g, '');
    var selectedsauceicon = target.tagName;
    var selectedsauceiconconfirm="";

    if (selectedsauceicon == 'IMG'){
        selectedsauceiconconfirm = target.id;
        //alert(selectedcrust + " " + selectedcrusticonconfirm);
    }
    //Sauce
    var tomatosauce= document.getElementById("Tomato sauce");
    var pestosauce = document.getElementById("Pesto sauce");
    var topppingselectedsauce = document.getElementById("topping-selected-sauce");

    var tomatosaucebox = document.getElementById("tomatosauce-icon-box");
    var pestosaucebox = document.getElementById("pestosauce-icon-box");
    var selectedsauceiconbox=target.id;
    //Preview
    var previewtomatosauce = document.getElementById("preview-tomatosauce");
    var previewpestosauce = document.getElementById("preview-pestosauce");

    //alert(selectedsauce);
   
    //Add size to price list 
    var saucepricelist = document.getElementById("sauce-selected");
    if (selectedsauce == "Tomatosauce" || 
    selectedsauceiconconfirm == "tomatosauce-icon" ||
    selectedsauceiconbox =="tomatosauce-icon-box" ) {
        tomatosaucebox.classList.add('checkbox');
        pestosaucebox.classList.remove('checkbox');

        tomatosauce.classList.add('checked');
        pestosauce.classList.remove('checked');
        saucepricelist.innerHTML="Tomato sauce";      
        topppingselectedsauce.innerHTML = "Tomato sauce";

        previewtomatosauce.style.visibility="visible";
        previewpestosauce.style.visibility="hidden";
    }
    if (selectedsauce == "Pestosauce" || 
    selectedsauceiconconfirm == "pestosauce-icon" ||
    selectedsauceiconbox == "pestosauce-icon-box" ) {
        tomatosaucebox.classList.remove('checkbox');
        pestosaucebox.classList.add('checkbox');

        tomatosauce.classList.remove('checked');
        pestosauce.classList.add('checked');
        saucepricelist.innerHTML="Pesto sauce"; 
        topppingselectedsauce.innerHTML = "Pesto sauce";

        previewtomatosauce.style.visibility="hidden";
        previewpestosauce.style.visibility="visible";
    }
}
//Meat menu
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var ul = document.getElementById('meat-menu');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    //Text from selected topping and remove spaces
    var selectedtopping = (target.innerText).replace(/\s+/g, '');
    var selectedtoppingconfirm = "";
    
    var selectedtoppingbox = target.id;
    //alert (selectedtopping);
    //Meat toppings
    var pepperoni = document.getElementById("pepperoni");
    var bacon = document.getElementById("bacon");
    var sausage = document.getElementById("sausage");
    var ham = document.getElementById("ham");

    //Meat toppings checkbox
    var pepperonibox = document.getElementById('pepperoni-icon-box');
    var baconbox = document.getElementById('bacon-icon-box');
    var sausagebox = document.getElementById('sausage-icon-box');
    var hambox = document.getElementById('ham-icon-box');
    if (target.tagName == 'IMG'){
        selectedtoppingconfirm = target.id;
    }
   
    if (selectedtoppingconfirm == "icon-pepperoni" ||
    selectedtopping == "Pepperoni" ||
    selectedtoppingbox == "pepperoni-icon-box"){
       
        pepperoni.classList.toggle('checked');
        pepperonibox.classList.toggle('checkbox');
        selectedtopping = "Pepperoni";
    }
    if (selectedtoppingconfirm == "icon-ham" ||
    selectedtopping == "Ham" ||
    selectedtoppingbox =="ham-icon-box"){
      
        ham.classList.toggle('checked');
        hambox.classList.toggle('checkbox');
        selectedtopping = "Ham";
    }
    if (selectedtoppingconfirm == "icon-bacon" ||
    selectedtopping == "Bacon" ||
    selectedtoppingbox =="bacon-icon-box"){
      
        bacon.classList.toggle('checked');
        baconbox.classList.toggle('checkbox');
        selectedtopping = "Bacon";
    }
    if (selectedtoppingconfirm == "icon-sausage"||
    selectedtopping == "Sausage" ||
    selectedtoppingbox =="sausage-icon-box"){
       
        sausage.classList.toggle('checked');
        sausagebox.classList.toggle('checkbox');
        selectedtopping = "Sausage";
    }
    var t = document.createTextNode(selectedtopping);
    var to = document.createTextNode(selectedtopping  + " +1.00");
    //Topping selected list 
    var li = document.createElement("li");
    li.appendChild(t);
    //Topping price list 
    var priceli = document.createElement("li");
    priceli.appendChild(to);
   
    updateTopping(selectedtopping,li,priceli);
    updateTotal();
}

//Veggies menu
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var ul = document.getElementById('veggies-menu');
ul.onclick = function (event) {
    var target = getEventTarget(event);

    //Text from selected topping and remove spaces
    var selectedtopping = (target.innerText).replace(/\s+/g, '');
    var selectedtoppingconfirm = "";

    //Box selected
    var selectedtoppingbox = target.id;
    //Veggie toppings
    var greenpepper = document.getElementById("greenpepper");
    var redpepper = document.getElementById("redpepper");
    var redonion = document.getElementById("redonions");
    var pineapple = document.getElementById("pineapple");
    var basil = document.getElementById("basil");
    var blackolives = document.getElementById("blackolives");
    var greenolives= document.getElementById("greenolives");
    var mushrooms = document.getElementById("mushrooms");

     //Veggie toppings box 
     var greenpepperbox = document.getElementById("greenpepper-icon-box");
     var redpepperbox = document.getElementById("redpepper-icon-box");
     var redonionbox = document.getElementById("redonions-icon-box");
     var pineapplebox = document.getElementById("pineapple-icon-box");
     var basilbox = document.getElementById("basil-icon-box");
     var blackolivesbox = document.getElementById("blackolives-icon-box");
     var greenolivesbox = document.getElementById("greenolives-icon-box");
     var mushroomsbox = document.getElementById("mushrooms-icon-box");
    
    if (target.tagName == 'IMG'){
        selectedtoppingconfirm = target.id;
    }

    if (selectedtoppingconfirm == "icon-greenpepper" ||
    selectedtopping == "Greenpepper" ||
    selectedtoppingbox == "greenpepper-icon-box"){

        greenpepper.classList.toggle('checked');
        greenpepperbox.classList.toggle('checkbox');
        selectedtopping = "Greenpepper";
    }
    if (selectedtoppingconfirm == "icon-redpepper"||
    selectedtopping == "Redpepper" ||
    selectedtoppingbox == "redpepper-icon-box"){

        redpepper.classList.toggle('checked');
        redpepperbox.classList.toggle('checkbox');
        selectedtopping = "Redpepper";
    }
    if (selectedtoppingconfirm == "icon-redonions"||
    selectedtopping == "Redonions" ||
    selectedtoppingbox == "redonions-icon-box"){

        redonion.classList.toggle('checked');
        redonionbox.classList.toggle('checkbox');
        selectedtopping = "Redonions";
    }
    if (selectedtoppingconfirm == "icon-pineapple" ||
    selectedtopping == "Pineapple" ||
    selectedtoppingbox == "pineapple-icon-box"){

        pineapple.classList.toggle('checked');
        pineapplebox.classList.toggle('checkbox');
        selectedtopping = "Pineapple";
    }
    if (selectedtoppingconfirm == "icon-basil" ||
    selectedtopping == "Basil" ||
    selectedtoppingbox == "basil-icon-box"){

        basil.classList.toggle('checked');
        basilbox.classList.toggle('checkbox');
        selectedtopping = "Basil";
    }
    if (selectedtoppingconfirm == "icon-blackolives" ||
    selectedtopping == "Blackolives" ||
    selectedtoppingbox == "blackolives-icon-box"){

        blackolives.classList.toggle('checked');
        blackolivesbox.classList.toggle('checkbox');
        selectedtopping = "Blackolives";
    }
    if (selectedtoppingconfirm == "icon-greenolives" ||
    selectedtopping == "Greenolives" ||
    selectedtoppingbox == "greenolives-icon-box"){

        greenolives.classList.toggle('checked');
        greenolivesbox.classList.toggle('checkbox');
        selectedtopping = "Greenolives";
    }
    if (selectedtoppingconfirm == "icon-mushrooms" ||
    selectedtopping == "Mushrooms" ||
    selectedtoppingbox == "mushrooms-icon-box"){

        mushrooms.classList.toggle('checked');
        mushroomsbox.classList.toggle('checkbox');
        selectedtopping = "Mushrooms";
    }

    var t = document.createTextNode(selectedtopping);
    var to = document.createTextNode(selectedtopping  + " +1.00");
    //Topping selected list 
    var li = document.createElement("li");
    li.appendChild(t);
    //Topping price list 
    var priceli = document.createElement("li");
    priceli.appendChild(to);
    
  
    updateTopping(selectedtopping,li,priceli);
    updateTotal();
}

function updateTopping (x,l,pl,){
    //menu 
    var li = l;
    var priceli=pl;
  
    var menu = document.getElementById(x.toLowerCase());
    //Topping selection list
    var toppingselection = document.getElementById("topping-selected");
    var t = "topping-" +x;
    var toppingX = document.getElementById(t.toLowerCase()); //
    //Price list
    var pricelist = document.getElementById("price-list");
    var p ="price-" +x;
    var priceX = document.getElementById(p.toLowerCase());
    //Preview image
    var pr = "preview-" + x;
    var previewX = document.getElementById(pr.toLowerCase());
    //Icon image

    //var i = y;
    //menu.classList.toggle("checked");
    if(menu.classList.contains("checked" )){
        li.id= t.toLowerCase();
        priceli.id= p.toLowerCase(); 
        toppingselection.appendChild(li);
        pricelist.appendChild(priceli);
        previewX.style.visibility="visible";
    }
    else{
        toppingX.remove(); 
        priceX.remove();
        previewX.style.visibility="hidden";
    }
    
}
function updateTotal() {
    var pricelist = document.getElementById("total-price");
    var pricelistitems = document.getElementById("price-list").getElementsByTagName("li");
    var sizePrice = 0;
    var total= 0;
    
    for (var i = 0; i < pricelistitems.length; i++) {
        //alert(pricelistitems[i].innerHTML);
        //Sizes
        if (pricelistitems[i].innerHTML == "Small +8.99"){
            sizePrice=8.99;
        }
        if (pricelistitems[i].innerHTML == "Medium +9.99"){
            sizePrice = 9.99;
        }
        if (pricelistitems[i].innerHTML == "Large +10.99"){
            sizePrice = 10.99;
        }
        //Dough 
        if(pricelistitems[i].innerHTML == "Wholewheat crust +1.00"){
            total += 1.00;
        }

        //Meat
        if (pricelistitems[i].innerHTML =="Pepperoni +1.00" ||
            pricelistitems[i].innerHTML =="Bacon +1.00" ||
            pricelistitems[i].innerHTML =="Ham +1.00" ||
            pricelistitems[i].innerHTML =="Sausage +1.00"){
            total += 1.00;
        }

        //Veggies
        if (pricelistitems[i].innerHTML =="Greenpepper +1.00" ||
            pricelistitems[i].innerHTML =="Redpepper +1.00" ||
            pricelistitems[i].innerHTML =="Redonions+1.00" ||
            pricelistitems[i].innerHTML =="Pineapple +1.00" ||
            pricelistitems[i].innerHTML =="Spinach +1.00" ||
            pricelistitems[i].innerHTML =="Basil +1.00" ||
            pricelistitems[i].innerHTML =="Blackolives +1.00" ||
            pricelistitems[i].innerHTML =="Greenolives +1.00" ||
            pricelistitems[i].innerHTML =="Mushrooms +1.00"){
            total += 1.00;
        }

    }
    total += sizePrice;
    pricelist.innerHTML="Total: $" +  parseFloat(Math.round(total* 100) / 100).toFixed(2);
}

// Finish order button
// 
var finishorder = document.getElementById('finish-button');
finishorder.addEventListener('click', function (ev) {

   alert("Pizza has been added to the cart!");
   location.reload();
}, false);

var startorder = document.getElementById('home-button');
startorder.onclick = function (event) {
    window.location.href = "order.html";
}

