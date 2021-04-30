document.querySelector('example-component').addEventListener('exampleEvent', () => console.log('test'));

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "weitere Bilder";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "weniger Bilder";
      moreText.style.display = "inline";
    }
  } 
