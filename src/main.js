// ......................................Toggle Button ..............................


const navMenu = document.getElementById("nav-menu");
const navlink = document.querySelectorAll(".Nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navlink.forEach(link =>{
    link.addEventListener("click",()=>{
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")
    })
})


// ...........................scrollup.........................................

const scrollUp = ()=> {
    const scrollUpBtn = document.getElementById("scroll-up")

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-10");


    }else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-10");
    }


}


window.addEventListener("scroll", scrollUp)


// ................................Active Link.....................................

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "hero"; // Default section

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", activeLink);



// Scroll reveal animation.....................

document.addEventListener("DOMContentLoaded", function() {
    const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 300,
    });

    sr.reveal('.hero_bigtext, .collection_top , .popular_top');
    sr.reveal('.hero_image', {origin:"bottom", delay:500});
    sr.reveal('.hero_content',{origin:"bottom", delay:1000} );
    sr.reveal('.collection_card',{interval:100} );
    sr.reveal('.popular_card',{origin:"left",delay:500} );
    sr.reveal('.popular_card',{interval:100} );

    sr.reveal('.about_top',{origin:"top",delay:300} );
    sr.reveal('.about_left',{origin:"left",delay:500} );
    sr.reveal('.about_right',{origin:"right",delay:1000} );



  
});

