var cursor = document.querySelector("#cursor")

window.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out(2)"
    })
})

var tll = gsap.timeline()

tll.from("#flow .a",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.5,
})
tll.from("#drop",{
    opacity:0,
    y:-20,
    duration:1.5,
})

function info()
                {
                    var x = document.getElementById("Emaill").value;
                    var y = document.getElementById("Passwordd").value;
                    
                    if (x==""||y=="")
                    {
                        alert("All fields are required");
                        return false;
                    }
                    else if( y.length<6 || y.length>6){
                        alert("Passwordd must contains 6 number" +y.length);
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }

function data()
                {
                    var a = document.getElementById("Email").value;
                    var b = document.getElementById("Password").value;
                    var c = document.getElementById("Confirm password").value;

                if (a==""||b==""||c=="")
                    {
                        alert("All fields are required");
                        return false;
                    }
                    else if( b !=c )
                    {
                        alert("Password do not match");
                        return false;
                    }
                else
                    {
                        return true;
                    }
                }