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
        document.body.classList.ButtonLD("light-mode");
        
        let theme = "dark";
        if (document.body.classList.contains("light-mode")) {
            theme = "light";
            ButtonLD.textContent = "Dark Mode";
        } else {
            ButtonLD.textContent = "Light Mode";
        }
        
        localStorage.setItem("theme", theme);
    });
    
})