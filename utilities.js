document.addEventListener("DOMContentLoaded", () => {

    const   ButtonLD = document.createElement("button");
    ButtonLD.id = "mode-button";
    ButtonLD.setAttribute("aria-label", "Button dark and light mode");
    document.body.appendChild (ButtonLD);


    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        ButtonLD.textContent = "Dark Mode";
    } else {
        ButtonLD.textContent = "Light Mode";
    }

    ButtonLD.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        
        let theme = "dark";
        if (document.body.classList.contains("light-mode")) {
            theme = "light";
            ButtonLD.textContent = "Dark Mode";
        } else {
            ButtonLD.textContent = "Light Mode";
        }
        localStorage.setItem("theme", theme);
    });
    
    if (typeof ScrollReveal !== "undefined") { 
        const SR = ScrollReveal({ 
            origin: "bottom", 
            distance: "30px", 
            duration: 900, 
            delay: 200, 
            reset: false}); 
            
    SR.reveal("header", { origin: "top" }); 
    SR.reveal("main > h1", { delay: 300 }); 
    SR.reveal("#about", { delay: 400 }); 
    SR.reveal("#projects article", {  
        interval: 200, 
        origin: "bottom" });  
    SR.reveal("#contact", { delay: 300 }); 
    SR.reveal("footer", { delay: 400, origin: "bottom" }); 
    } else { 

    console.warn("ScrollReveal library failed to load."); 
        } 
/* Asked Gemini to help me Scroll Reveal not only from the bootm to make the page more interactive.*/ 

    const youtubeButton = document.getElementById("youtube-button"); 
    youtubeButton.addEventListener("click", () => { 
    window.location.assign("https://youtu.be/qKAZEaOl-us"); 
    }); 

 
})