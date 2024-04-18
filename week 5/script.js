// let temp = 17;
// let temp = prompt ("What is today's temprature?")
// if(temp>=20 && temp<30)
// {
//     console.log("it feels sunny and warm");
// }
// else if (temp>10 && temp<20)
// {
//     console.log("it feels cold");
// }
// else if (temp>=30)
// {
//     console.log("it is boiling hot");
// }
// else if (temp<10)
// {
//     console.log("it is freezing");
// }

let body = document.querySelector("body");
function checkWeather () {
    let box = document.querySelector(".outer");
    console.log("I am being clicked");
    let myInput = document.querySelector("#myTemp");
    let temp = myInput.value;
    console.log("current temp is", temp);
    if(temp>=20 && temp<30)
    {
        body.style.backgroundColor = "orange"
        outer.style.backgroundColor = "lime"
        console.log("it feels sunny and warm");
    }
    else if (temp>10 && temp<20)
    {
        body.style.backgroundColor = "lightblue"
        console.log("it feels cold");
    }
    else if (temp>=30)
    {
        body.style.backgroundColor = "crimson"
        console.log("it is boiling hot");
    }
    else if (temp<10)
    {
        body.style.backgroundColor = "gray"
        console.log("it is freezing");
    }
}