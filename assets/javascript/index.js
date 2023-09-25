function myFunction() {
const menuList = document.getElementById("menu-list");
  if (menuList.className === "hidden") {
    menuList.className += "menu-icon";
  } else {
    menuList.className = "hidden";
  }
}