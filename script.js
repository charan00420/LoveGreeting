// ---------- Loading Screen ----------
window.onload = function () {

    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("main").style.display = "flex";
    }, 2500);

};

// ---------- Greeting ----------
const hour = new Date().getHours();

const greeting = document.getElementById("greeting");

if(hour < 12){
    greeting.innerHTML = "Good Morning ❤️";
}
else if(hour < 17){
    greeting.innerHTML = "Good Afternoon ❤️";
}
else{
    greeting.innerHTML = "Good Evening ❤️";
}

// ---------- Floating Hearts ----------
const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random()>0.5 ? "❤️" : "🌸";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20+Math.random()*20)+"px";

    heart.style.animationDuration = (4+Math.random()*3)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}

setInterval(createHeart,300);

// ---------- Letter ----------
const message=`Dear Love ❤️,

I don't know if words can fully express what you mean to me.

Every smile of yours brightens my day.

Every conversation with you becomes my favorite memory.

Thank you for being yourself.

No matter what happens...

I'll always choose you.

❤️ Forever Yours ❤️`;

function openLetter(){

    document.getElementById("letter").style.display="block";

    const typing=document.getElementById("typing");

    typing.innerHTML="";

    let i=0;

    const interval=setInterval(()=>{

        typing.innerHTML+=message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(interval);

            document.getElementById("story").style.display="block";

const cards=document.querySelectorAll(".storyCard");

cards.forEach((card,i)=>{
    setTimeout(()=>{
        card.classList.add("show");
    },i*1000);
});

setTimeout(()=>{
    document.getElementById("gallery").style.display="block";
},3500);

document.getElementById("timerCard").style.display="block";
document.getElementById("reasonCard").style.display="block";
document.getElementById("final").style.display="block";
        }

    },35);

}

document.getElementById("startBtn").onclick=openLetter;

// ---------- Gallery ----------
const photos=[
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg"
];

const captions=[
"The smile that stole my heart ❤️",
"My favourite person 🌸",
"The reason behind my happiness ✨",
"My safe place 🤍",
"My beautiful girl ❤️",
"I'll always choose you ❤️"
];

let current=0;

const slider=document.getElementById("slider");
const caption=document.getElementById("caption");

function nextPhoto(){

    slider.style.opacity="0";

    setTimeout(()=>{

        slider.src=photos[current];
        caption.innerHTML=captions[current];

        slider.style.opacity="1";

        current++;

        if(current>=photos.length){
            current=0;
        }

    },500);

}

setInterval(nextPhoto,4000);

nextPhoto();

// ---------- Timer ----------
const startDate=new Date("April 9, 2026 00:00:00");

function timer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

const seconds=Math.floor((diff%(1000*60))/1000);

document.getElementById("timer").innerHTML=
`${days} Days<br>${hours} Hours<br>${minutes} Minutes<br>${seconds} Seconds`;

}

setInterval(timer,1000);

timer();

// ---------- Reasons ----------
const reasons=[
"Your smile 😊",
"Your kindness ❤️",
"Your laugh 😄",
"The way you care 🤍",
"You make ordinary days special ✨",
"Because you're YOU ❤️"
];

let index=0;

document.getElementById("reasonBtn").onclick=function(){

document.getElementById("reason").innerHTML=reasons[index];

index++;

if(index>=reasons.length){
index=0;
}

};

// ---------- Final Surprise ----------
document.getElementById("loveBtn").onclick=function(){

alert("❤️ I Love You More Than Words Can Say ❤️\n\nThank you for being part of my life. 🌹");

};