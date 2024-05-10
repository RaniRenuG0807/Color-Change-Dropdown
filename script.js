function color_choice(){
    let ch = document.getElementById("color");
    let palate = document.getElementById("color_palate")
    let selected_color = palate.options[palate.selectedIndex].value
    ch.style.backgroundColor = selected_color ;   
}