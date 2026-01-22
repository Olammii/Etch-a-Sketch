const body = document.querySelector("body");
const btn = document.querySelector("#btn-reset");
const container = document.createElement("div");
container.className = "container";
container.style.cssText = "display: flex;margin-top: 20px;";
body.appendChild(container);

const box = document.querySelector(".container");
const size = 16;

function makegrid(size = 16){
    const squareSize = 576 / size;

    for(let i = 0; i < size; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < size; j++){
            let column = document.createElement("div");
            column.classList.add("column");
            column.style['border'] = `${squareSize / 100}px solid white`;
            column.style['width'] = `${squareSize}px`;
            column.style['height'] = `${squareSize}px`;
            column.style['background-color']= `#d8d8d8`;
            column.style['borderRadius'] = `2px`;
            // column.textContent = (i * size) + j;
            
            column.addEventListener("mouseover", function(){
                this.classList.add("hovered");
                this.style.backgroundColor = "#ffa500";
                
            })
            row.appendChild(column);
        } box.appendChild(row);
    }
}
function deleteSquare(){
    var child = box.lastElementChild;
    while(child){
        box.removeChild(child);
        child = box.lastElementChild;
    }
}


function reset(e){
     var desiredSize = prompt("How many squares per side? ");
     deleteSquare();
     makegrid(desiredSize);
}

btn.addEventListener("click", reset);
window.addEventListener("load", () => {
    makegrid()
})