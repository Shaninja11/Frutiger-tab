const inputField = document.getElementById("inputField");
const providerSelect = document.getElementById("chooseprov");
const warning = document.getElementById("warning")
const editwall = document.getElementById("editwall")
var btn = document.getElementById('btn');
var wallpaper = 'Wallpapers/Blue.jpg'
var link = document.getElementById('link');
var label = document.getElementById("label")
var shortmenu = document.getElementById("shortmenu")
var shortnum = ""

// wallpaper
if (localStorage.getItem("wp") != null) {wallpaper = localStorage.getItem("wp")}
document.body.style.backgroundImage= "url("+wallpaper+")"
function choosewall(n){
  localStorage.setItem("wp", n)
  document.body.style.backgroundImage= "url("+n+")"
}

function showwall() {
  if (editwall.style.display == "flex"){
    editwall.style.display = "none"
  } else {
    editwall.style.display = "flex"
  }
}

//shortcuts

for (let i = 1; i < 5; i++) {
  if (localStorage.getItem("label"+i) != null){
    setshortcut(i)
  }
  else {
    document.getElementById("short"+i).innerHTML = "none"
  }
}

function editshort(n) {
  warning.innerHTML = ""
  if (shortmenu.style.display == "flex") {
    shortmenu.style.display = "none"
  } else {
    shortmenu.style.display = "flex"
  }
  link.value = localStorage.getItem(n)
  label.value = localStorage.getItem("label"+n)
  shortnum = n
}

function setshortcut(n) {
  x = document.getElementById("short"+n)
  x.innerHTML = localStorage.getItem("label"+n)
}

function AddShortcut() {
  if (!link.value.includes("http"))  {
    warning.innerHTML = "Invalid URL (Must begin with https:// or http://)"
  }
  else if (label.value == "") {
    warning.innerHTML = "Label cannot be empty"
  }
  else {
    localStorage.setItem(shortnum, link.value)
    localStorage.setItem("label"+shortnum, label.value)
    setshortcut(shortnum)
    shortmenu.style.display = "none"
  }
}

function shortcut(n) {
  window.open(localStorage.getItem(n))
}


// search bar

function search() {
  event.preventDefault();
  let providerUrl;

  switch (providerSelect.value) {
    case "2":
      providerUrl = "https://www.startpage.com/do/dsearch?query=";
      break;
    case "3":
      providerUrl = "https://search.brave.com/search?q=";
      break;
    case "4":
      providerUrl = "https://www.qwant.com/?q=";
      break;
    default:
      providerUrl = "https://www.ecosia.org/search?q=";
  }

  window.open(providerUrl + inputField.value, "_blank");
}
