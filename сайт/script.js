var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0%";
}

function openframe() {
  document.getElementById("myfrnav").style.height = "100%";
}

function closeframe() {
  document.getElementById("myfrnav").style.height = "0%";
}

function handleEscapeKeyPress(event) {
  if (event.key === "Escape") {
      const buttons = document.querySelectorAll(".esc");
      
      buttons.forEach(button => {
          button.click();
      });
  }
}

document.addEventListener("keydown", handleEscapeKeyPress);