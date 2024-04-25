function tap() {
    var waterElement = document.getElementById("water");
    var tapwater = document.getElementById("tapwater");
    var currentState = waterElement.style.animationPlayState;
    var tapcurrentState = tapwater.style.animationPlayState;
    var tap = document.getElementById("tap");

    if (currentState === "running" || tapcurrentState === "running") {
        waterElement.style.animationPlayState = "paused";
        tapwater.style.animationPlayState = "paused";
        tap.style.backgroundColor="red"
        tapwater.style.backgroundColor="white";
    } else {
        tap.style.backgroundColor="green"
        waterElement.style.animationPlayState = "running";
        tapwater.style.animationPlayState = "running"; 
        tapwater.style.backgroundColor="#008cff";
    }
}
