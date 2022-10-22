//step 1: when user enter the mouse , we need to show the dropdown
//- at a time we need to show only one dropdown
// step 2: When user leaves the mouse , we need to hide the dropdown
// step 3: we nedd to add backgroud to each dropdown menu
//------------------------------------------------------------------

//DOM elements 
//------------------------------------------------------------------
const navListItemsEL = document.querySelectorAll(".navbar__nav > li")  //( ">" uses in quary selector) direct child list( li ) only pick 
//console.log("All list item are:",navListItemsEL);
const dropdownBg = document.querySelector(".dropdownBackground")

//Show dropdown
//------------------------------------------------------------------
function showDropdown(event){//function expression allow to entire page
    //console.log("whats this event : " , event.target)//altrenative method for call function (this)
    this.classList.add("mouse-enter")
     setTimeout(()=>{
         this.classList.add("mouse-enter-active")
     }, 150)
         //console.log("what is this now" , this)
    //Add background now
    const listItemDropdown = this.querySelector(".dropdown")
    addBackground(listItemDropdown)
}
//Add background
//------------------------------------------------------------------
function addBackground(dropdown){
    dropdownBg.classList.add("open")
    //console.log()//
    const dropdownCord = dropdown.getBoundingClientRect()
    console.log(dropdown)
    const cords = {
        width : dropdownCord.width,
        height : dropdownCord.height,
        top : dropdownCord.top,
        left : dropdownCord.left
    }
    console.log("I got the width and height of current dropdown :" , cords.width , cords.height)
    dropdownBg.style.cssText = `
    width : ${cords.width}px;
    height : ${cords.height}px;
    top : ${cords.top}px;
    left : ${cords.left}px;

    `
}

// Hide dropdown
//------------------------------------------------------------------
function hideDropdown(){
//console.log("mouse leaves")
this.classList.remove("mouse-enter" , "mouse-enter-active")
}

// Event listeners
//------------------------------------------------------------------
//Mouse enter
navListItemsEL.forEach((listItem)=>{//callback fn--"I will call back later!" a function which is to be executed after another function has finished execution. 
    //console.log("all list items are: ", listItem)
    listItem.addEventListener("mouseenter", showDropdown)
})

// Mouse leave 
navListItemsEL.forEach((listItem)=>{
    listItem.addEventListener("mouseleave", hideDropdown)
})

// //function expression
// const test2 = ()=>{
//     console.log("Function expression ", this)
// }
// //function declaration
// function test1(){
//     console.log("Function declaration :" this)
// }
