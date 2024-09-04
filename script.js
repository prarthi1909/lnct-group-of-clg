gsap.to("#nav",{
    backgroundColor:"black",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        // marker:true,
        start:"top -30%",
        end:"top -25%",
        scrub:true,
    }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        marker:"true",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 50%",
        end:"top 50%",
        marker:"true",
        scrub:3,
    }
})
gsap.from(".card",{
    scale:0.6,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // start:"top 50%",
        // end:"top 50%",
        scrub:1,
    }
})
var course1=document.querySelector("#courses1")
var check=0
course1.addEventListener("click",function(){
    if(check==0){
        course1.innerHTML=" 1. Engineering and Architecture<br> B.Tech Artificial intelligence and Machine learning<br>B.Tech Computer Science and Engineering<br> BE Internet Of Things and cyber security Including Block Chain Technology<br>B.Tech Cyber Security<br>BE civil Engineering<br>B.Tech civil Engineering<br>B.Tech Electronics and Communication Engineering<br>B.Tech Mechanical Engineering<br>BE chemical Engineering lateral Entry<br>BE civil Engineering lateral Entry<br>BE computer science and Engineering lateral Entry "
        course1.style.color="darkblue"
        course1.style.backgroundColor="green"
        check=1
    }else{
        course1.innerHTML="1. Engineering and Architecture"
        course1.style.color="black"
        course1.style.backgroundColor="orange"

        check=0
    }
})
var course2=document.querySelector("#courses2")
var check=0
course2.addEventListener("click",function(){
    if(check==0){
        course2.innerHTML="2. Computer Application and IT<br>BE Computer science and Engineering<br>B.Tech Computer science and Engineering<br>BE Information Technology<br>B.Tech Cyber Security<br>BE computer science and Engineering lateral Entry<br>BE Information Technology lateral Entry"
        course2.style.color="darkblue"
        course2.style.backgroundColor="white"
        check=1
    }else{
        course2.innerHTML="2. Computer Application and IT"
        course2.style.color="black"
        course2.style.backgroundColor="yellow"
        check=0
    }
})
var course3=document.querySelector("#courses3")
var check=0
course3.addEventListener("click",function(){
    if(check==0){
        course3.innerHTML="3. Managment and Business Administration<br>MBA<br>MBA Financial Managment"
        course3.style.color="darkblue"
        course3.style.backgroundColor="aqua"
        check=1


    }else{
        course3.innerHTML="3. Managment and Business Administration"
        course3.style.color="black"
        course3.style.backgroundColor="green"
        check=0
    }
})
var course4=document.querySelector("#courses4")
var check=0
course4.addEventListener("click",function(){
    if(check==0){
        course4.innerHTML="4. Sciences<br>BE Artificial Intelligence and Data Science<br>BE Artificial Intelligence and Data Science"
        course4.style.color="blue"
        course4.style.backgroundColor="maroon"
        check=1

    }else{
        course4.innerHTML="4. Sciences"
        course4.style.color="black"
        course4.style.backgroundColor="darkpink"
        check=0
    }
})
var course5=document.querySelector("#courses5")
var check=0
course5.addEventListener("click",function(){
    if(check==0){
        course5.innerHTML="5. Animation and Design<br>M.Tech VLSI Design"
        course5.style.color="darkblue"
        course5.style.backgroundColor="pink"
        check=1

    }else{
        course5.innerHTML="5. Animation and Design"
        course5.style.color="black"
        course5.style.backgroundColor="lightgreen"
        check=0
    }
})


