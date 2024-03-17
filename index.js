function addingEventListener() {
    function handleClick(){alert("Click Me!");}
    const button = document.getElementById("button");
    button.addEventListener("click",handleClick);

}

addingEventListener();
