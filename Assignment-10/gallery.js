document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click",function() {
        this.style.zIndex = 10;
    });
});