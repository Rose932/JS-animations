// Anonuymous functions run automatically

    var runButton = document.getElementById("run");
    var resetButton = document.getElementById("reset");
    var box = document.querySelector("#circle");
    var stopButton = document.getElementById("stop");
    var intervalid = 0;

    function forwardBox(){
        var step = 0;
        intervalid = setInterval(function(){
            if (step > 350){
                clearInterval(intervalid);
            } else {
                step++;
                box.style.left = `${step}px`;
                console.log(box.style.left);
            }
        }, 3);
    }

    function resetBox(){
        box.style.left = "0px";
    }
    function stopBox(){
        clearInterval(intervalid);
    }

