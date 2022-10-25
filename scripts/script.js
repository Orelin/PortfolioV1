
const trianglify = window.trianglify || require('trianglify')

const options = { 
    height: window.innerHeight*1.2, 
    width: window.innerWidth,
    cellSize: 40,
    variance: 2,
    seed: null,
    //xColors: ["#2C3333", "#395B64", "#A5C9CA", "#E7F6F2"], //Neutro 3/4
    xColors: ["#AAC4FF", "#FFE3E1", "#FFD1D1", "#FF9494"], //Helado
    //xColors: "random",
    yColors: "match",
    fill: true,
    colorSpace: 'lab',
    colorFunction: trianglify.colorFunctions.interpolateLinear(2),
    strokeWidth: 0,
    points: null
}
let pattern = trianglify(options)
document.body.appendChild(pattern.toCanvas())


const noClic = document.querySelector(".noClic");
noClic.addEventListener("mousedown", () => {
    options.xColors = "random";
    pattern = trianglify(options);
    document.body.appendChild(pattern.toCanvas());
})