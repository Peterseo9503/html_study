const $button = document.querySelector("[type=button]");
const $section = document.querySelector("#popup");
const $footer = document.querySelector("#foo");
const $a = document.querySelector("a:last-child");
const $aNaver = document.querySelector("#blue");
const $popup = document.querySelector(".popup");
const $popupbtn = document.querySelector(".popupbtn");

//같은 이름을 가진 클레스를 모두 받아온다.
const classes = document.querySelectorAll(".test");

//받아온 수만큼 각 요소에 기능을 넣어준다. 
classes.forEach(function(item) {
    item.addEventListener('click',()=>{
        item.style.background = "green";
    });
} 
);


// 토글기능넣기


$popupbtn.addEventListener('click',()=>{
    $popup.classList.toggle("tomato");
    console.log('클릭되었습니다.')
});





// alert($button);
function dat(){
    $section.style.display = "none";
}

$footer.addEventListener('click',function(){
    $section.style.display = "block";
})

$aNaver.addEventListener('click',function(){
    $aNaver.style.background ="blue";
})


function changeBackground(){
    $a.style.background = "red";
}


// if($button){
//     console.log($button);
// }else{
//     console.log('값이안들어감')
// }

