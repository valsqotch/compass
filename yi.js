const indi = document.getElementById("indi-roa"),
      angdp = document.getElementById("ds");

let xl,yl,cx,cy,ang;
xl=window.innerWidth;
yl=window.innerHeight;
cx=xl/2;
cy=yl/2;
window.addEventListener("mousemove",function(info){
    //console.log(info.pageX + ", " + info.pageY);
    //console.log(Math.atan((info.pageY - cy)/(info.pageX - cx))*-57.13);
    ang=Math.atan((info.pageY - cy)/(info.pageX - cx))*-57.13;
    if(info.pageX < cx){ //rotate things
        indi.style.transform = "rotate(" + (180 - ang) + "deg) ";
    }
    else{
        indi.style.transform = "rotate(" + -ang + "deg)";
    }
    if(ang<0||info.pageX<cx){ //display things
        if(ang<0&&info.pageX>cx){
            angdp.innerText = parseInt(ang+360);
        }
        else{
            angdp.innerText = parseInt(ang+180);
        }
    }
    else{
        angdp.innerText = parseInt(ang);
    }
    console.log(ang);
    //indi.style.transform = "rotateZ(" + ang + "deg) translate(" + 100*Math.cos(ang) + "px," + 100*Math.sin(ang) + "px)";
    //indi.style.transform = "rotate(" + -ang + "deg)";
    //console.log(100*Math.cos(ang));
})
window.addEventListener("resize",function(){
    xl=window.innerWidth;
    yl=window.innerHeight;
    cx=xl/2;
    cy=yl/2;
})