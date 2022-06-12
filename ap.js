//button remove 
var removeItemsButtons= document.getElementsByClassName("remove")
console.log(removeItemsButtons)
for (var i=0; i< removeItemsButtons.length; i++){
    var button = removeItemsButtons[i]
    button.addEventListener('click',function(event){
        //console.log('clicked')
        /*var removeArticle= document.getElementsByClassName('remove').innerHTML="Are you want to Delete this artcile";
        alert(removeArticle)*/
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}
//counter
var add= document.getElementById('add');
var sub= document.getElementById('sub');
var num= document.getElementById('num');
var qty= parseInt(num.innerText);

add.addEventListener('click', function(){
    qty=qty+1;
    num.innerHTML=qty; 
});

sub.addEventListener('click',function(){
    qty=qty-1;
    if (qty < 1){
        qty=1;
    }
    num.innerHTML=qty;
});
var add2= document.getElementById('add2');
var sub2= document.getElementById('sub2');
var num2= document.getElementById('num2');
var qty2= parseInt(num2.innerText);

add2.addEventListener('click', function(){
    qty2=qty2+1;
    num2.innerHTML=qty2; 
});

sub2.addEventListener('click',function(){
    qty2=qty2-1;
    if (qty2 < 1){
        qty2=1;
    }
    num2.innerHTML=qty2;
});
var add3= document.getElementById('add3');
var sub3= document.getElementById('sub3');
var num3= document.getElementById('num3');
var qty3= parseInt(num3.innerText);

add3.addEventListener('click', function(){
    qty3=qty3+1;
    num3.innerHTML=qty3; 
});

sub3.addEventListener('click',function(){
    qty3=qty3-1;
    if (qty3 < 1){
        qty3=1;
    }
    num3.innerHTML=qty3;
});
//button add
/*var addToCarButton = document.getElementsByClassName("shop-button")
for (var i=0; i<addToCarButton.length; i++){
    var button = addToCarButton[i]
    button.addEventListener('click', addToCarClicked)

}
function addToCarClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = 
    console.log(title)
}*/