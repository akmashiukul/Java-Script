function togglehide() {
    let btn = document.getElementById("button");
    let para = document.getElementById("para");
    if (para.style.display != 'none') {
        btn.innerHTML = '<button id="button" >Show</button>'

        para.style.display = 'none';

    } else {
        btn.innerHTML = '<button id="button" >Hide</button>'
        para.style.display = 'block'
    }


}