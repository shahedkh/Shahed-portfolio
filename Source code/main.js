function toggle() {
    let element = document.getElementById("navbar-list");
    if(element.classList.contains("show")){
        element.classList.remove("show");
    }else{
        element.classList.add("show");
    }
  }