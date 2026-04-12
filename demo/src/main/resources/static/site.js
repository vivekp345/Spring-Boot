var john = true;
var random;

function change(){
    random = false;
    if(john){
        document.getElementById("Name").innerHTML="Jane Doe";
        document.getElementById("Email").innerHTML="Jane@gmail.com";
        document.getElementById("Image").setAttribute("src","./img_avatar2.png")
        john=false;
    }
    else{
        document.getElementById("Name").innerHTML="John Doe";
        document.getElementById("Email").innerHTML="John@gmail.com";
        document.getElementById("Image").setAttribute("src","./img_avatar.png")
        john=true;
    }

    document.getElementById("randomImage").innerHTML="";
}

async function Random(){
    random = true;

    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
    document.getElementById("Name").innerHTML = user.name.first + " " + user.name.last;
    document.getElementById("Email").innerHTML = user.email;
    const gender = user.gender;
    if(gender==="male"){
        document.getElementById("Image").setAttribute("src","./img_avatar.png")
    }
    else{
        document.getElementById("Image").setAttribute("src","./img_avatar2.png")
    }
    if(random){
        const image = user.picture.large;
        let p = document.getElementById("randomImage");
        p.innerHTML = '<img src="' + image + '" alt="Random User" style="width: 100%;">';
    }
    else{
        document.getElementById("randomImage").innerHTML="";
    }
}