let textarea = document.getElementById("textArea");
let counter = document.getElementById("counter");

textarea.addEventListener("input",function() {
    let words = this.value.trim().split(/\s+/).filter(w => w.length);
    counter.innerText = `Words: ${words.length}, Characters: ${this.value.length}`;
    if(this.value.length > 200) alert("Character limit exceeded!");
});