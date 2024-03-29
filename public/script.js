//uploads image. Stretching will not change ratio.
const input = document.querySelector('input[type="file"]')
const FILE_READY_STATE = {
    EMPTY: 0,
    LOADING: 1,
    DONE: 2
}


input.addEventListener('change', function () {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext('2d');
    const reader = new FileReader()
    reader.onload = function () {
        let img = new Image();
        img.src = reader.result;
        ctx. clearRect(0, 0, c. width, c. height);
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        }
    }
    reader.readAsDataURL(input.files[0])
}, false)

//Button Functions
var cnt = 0;
function CountFun() {
    cnt++
    if (cnt >= 1) {
        window.alert("Tumor/Tissue Percentage: " + (100 * totaltumor) / (totaltissue) + "%");
    }
}

var cnt1 = 0; var boolean;
function CountFun1() {
    cnt1++
    var divData = document.getElementById("showCount1");
    divData.innerHTML = "Tumor Pieces: (" + cnt1 + ")";//this part has been edited
    boolean = true;
}

var cnt2 = 0;
function CountFun2() {
    cnt2++
    var divData = document.getElementById("showCount2");
    divData.innerHTML = "Tissue Pieces: (" + cnt2 + ")";//this part has been edited
    boolean = false;
}


var totaltumor = 0;
var totaltissue = 0;

//Button Funtions       

var pointsarray = [];


function addpoint(event) {
    var rect = myCanvas.getBoundingClientRect();
    var docx = (event.clientX - rect.left);
    var docy = (event.clientY - rect.top);
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(docx, docy, 5, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = "#89F401";
    context.fill();

    var point = { x: docx, y: docy };
    pointsarray.push(point);

    if (pointsarray.length > 1) {
        let a = pointsarray.length;
        context.beginPath();
        context.moveTo(pointsarray[a - 2].x, pointsarray[a - 2].y);
        context.lineTo(pointsarray[a - 1].x, pointsarray[a - 1].y);
        context.stroke();
    }
}
myCanvas.addEventListener('click', addpoint);

