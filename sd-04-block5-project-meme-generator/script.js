let textInput = document.getElementById('text-input');
let text = document.getElementById('meme-text');
let imgInput = document.getElementById('meme-insert');
let img = document.getElementById('meme-image');
let frameImg = document.getElementById("meme-image-container");
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let memes = document.getElementsByClassName('meme');
let resetBorder = document.getElementById("resetBorder");

textInput.addEventListener('input', function(){
    text.innerHTML = textInput.value;
});

imgInput.addEventListener('input', function(){
    imgInput.files[0].name;
    img.src = URL.createObjectURL(event.target.files[0]);
});

btn1.addEventListener("click", function(){
  frameImg.style.border = "3px dashed red";
});
btn2.addEventListener("click", function(){
  frameImg.style.border = "5px double blue";
});
btn3.addEventListener("click", function(){
  frameImg.style.border = "6px groove green";
});
resetBorder.addEventListener("click", function(){
  frameImg.style.border = "1px solid rgb(0, 0, 0)"
});

for (meme of memes){
  meme.addEventListener('click',function(event){
    let imgMeme = document.getElementById("meme-image");
    imgMeme.src = event.target.src;
  }
)};
