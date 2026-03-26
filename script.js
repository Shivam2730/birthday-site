// BOOK
window.addEventListener("load", () => {
    const book = document.getElementById("book");

    book.addEventListener("click", () => {
        book.classList.add("open");
        setTimeout(()=>book.style.display="none",1500);
    });
});

// NAME
const params=new URLSearchParams(window.location.search);
const name=params.get("name")||"Bestie";

document.getElementById("name").innerText=
"Happy 21st Birthday "+name+" 🎉";

// MESSAGE
const text="Miss Dizzi and yaa auntu di preet... 💙\n\nHAPPY BIRTHDAY TO YOU 🎉🎂";
let i=0;

function type(){
    if(i<text.length){
        let char=text[i];
        if(char==="\\n"){
            document.getElementById("message").innerHTML+="<br><br>";
        }else{
            document.getElementById("message").innerHTML+=char;
        }
        i++;
        setTimeout(type,40);
    }
}
type();

// MUSIC
const music=document.getElementById("music");
document.getElementById("musicBtn").onclick=()=>music.play();

// CONFETTI
setInterval(()=>{
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.animationDuration=(2+Math.random()*3)+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
},200);

// POPUP + SWIPE
const images=document.querySelectorAll(".gallery img");
const popup=document.getElementById("popup");
const popupImg=document.getElementById("popupImg");
let current=0;

images.forEach((img,index)=>{
    img.onclick=()=>{
        popup.style.display="flex";
        popupImg.src=img.src;
        current=index;
    };
});

document.getElementById("close").onclick=()=>popup.style.display="none";

// SWIPE
let startX=0;

popup.addEventListener("touchstart",e=>{
    startX=e.touches[0].clientX;
});

popup.addEventListener("touchend",e=>{
    let endX=e.changedTouches[0].clientX;

    if(endX<startX-50){
        current=(current+1)%images.length;
    }
    else if(endX>startX+50){
        current=(current-1+images.length)%images.length;
    }

    popupImg.src=images[current].src;
});

// DESKTOP ARROWS
document.addEventListener("keydown",e=>{
    if(popup.style.display==="flex"){
        if(e.key==="ArrowRight"){
            current=(current+1)%images.length;
        }
        if(e.key==="ArrowLeft"){
            current=(current-1+images.length)%images.length;
        }
        popupImg.src=images[current].src;
    }
});