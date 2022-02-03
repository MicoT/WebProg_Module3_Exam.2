function removestart(){
    document.getElementById('start-text').remove();
}
function aetherC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    document.getElementById('image-charc').style.border = "8px solid white"
    document.getElementById("image-charc").width = "200";
    document.getElementById("image-charc").height = "200";
    charc.setAttribute('src', 'assets/Aether.png');
    document.body.appendChild(charc);
}
function beidouC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Beidou.png');
    document.body.appendChild(charc);
}
function albedoC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Albedo.png');
    document.body.appendChild(charc);
}
function noelleC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Noelle.png');
    document.body.appendChild(charc);
}
function hutaoC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Hutao.png');
    document.body.appendChild(charc);
}
function jeanC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Jean.png');
    document.body.appendChild(charc);
}
function raidenC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Raiden.png');
    document.body.appendChild(charc);
}
function kleeC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Klee.png');
    document.body.appendChild(charc);
}
function razorC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Razor.png');
    document.body.appendChild(charc);
}
function eulaC(){
    var charc = document.getElementById("image-charc");
    document.getElementById('image-charc').style.backgroundColor = "blanchedalmond"
    charc.setAttribute('src', 'assets/Eula.png');
    document.body.appendChild(charc);
}
function anemo(){
    var ele = document.getElementById("image-ele");
    document.getElementById("image-ele").width = "100";
    document.getElementById("image-ele").height = "100";
    ele.setAttribute('src', 'assets/anemo.png');
    document.body.appendChild(ele);
}
function electro(){
    var ele = document.getElementById("image-ele");
    ele.setAttribute('src', 'assets/electro.png');
    document.body.appendChild(ele);
}
function cryo(){
    var ele = document.getElementById("image-ele");
    ele.setAttribute('src', 'assets/cryo.png');
    document.body.appendChild(ele);
}
function pyro(){
    var ele = document.getElementById("image-ele");
    ele.setAttribute('src', 'assets/pyro.png');
    document.body.appendChild(ele);
}
function geo(){
    var ele = document.getElementById("image-ele");
    ele.setAttribute('src', 'assets/geo.png');
    document.body.appendChild(ele);
}
function travelerFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/travelerfull.png');
    document.body.appendChild(full);
}
function beidouFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Beidoufull.png');
    document.body.appendChild(full);
}
function albedoFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Albedofull.png');
    document.body.appendChild(full);
}
function noelleFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Noellefull.png');
    document.body.appendChild(full);
}
function hutaoFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Hutaofull.png');
    document.body.appendChild(full);
}
function jeanFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Jeanfull.png');
    document.body.appendChild(full);
}
function raidenFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Raidenfull.png');
    document.body.appendChild(full);
}
function kleeFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Kleefull.png');
    document.body.appendChild(full);
}
function razorFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Razorfull.png');
    document.body.appendChild(full);
}
function eulaFull(){
    var full = document.getElementById("image-fullb");
    full.setAttribute('src', 'assets/Eulafull.png');
    document.body.appendChild(full);
}
function getNewName(){
    fetch("https://api.genshin.dev/characters/all")
        .then(function(response){
            console.log(response);
            response.json().then(function (data){
                console.log(data)
                var lucky = document.getElementById('number').value;
                if (lucky == '1'){
                    aetherC(),anemo(),travelerFull(),removestart();
                    hname = data[36].name;
                    hvision = data[36].vision;
                    hwep = data[36].weapon;
                    hnat = data[36].nation;
                    haffi = data[36].affiliation;
                    hconsta = data[36].constellation;
                    hbirth = data[36].birthday;
                    hdesc = data[36].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('hero').style.backgroundColor="blanchedalmond"
                    document.getElementById('hero').style.border="5px solid white"
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('vision').style.backgroundColor="blanchedalmond"
                    document.getElementById('vision').style.border="5px solid white"
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('weapon').style.backgroundColor="blanchedalmond"
                    document.getElementById('weapon').style.border="5px solid white"
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('nation').style.backgroundColor="blanchedalmond"
                    document.getElementById('nation').style.border="5px solid white"
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('affiliation').style.backgroundColor="blanchedalmond"
                    document.getElementById('affiliation').style.border="5px solid white"
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('constellation').style.backgroundColor="blanchedalmond"
                    document.getElementById('constellation').style.border="5px solid white"
                    document.getElementById('birthdate').innerHTML='Birthdate: Unknown';
                    document.getElementById('birthdate').style.backgroundColor="blanchedalmond"
                    document.getElementById('birthdate').style.border="5px solid white"
                    document.getElementById('desc').innerHTML=hdesc;
                    document.getElementById('desc').style.backgroundColor="blanchedalmond";
                    document.getElementById('desc').style.border="5px solid white"
                }else if (lucky == '2'){
                    beidouC(),electro(),beidouFull();
                    hname = data[6].name;
                    hvision = data[6].vision;
                    hwep = data[6].weapon;
                    hnat = data[6].nation;
                    haffi = data[6].affiliation;
                    hconsta = data[6].constellation;
                    hbirth = data[6].birthday;
                    hdesc = data[6].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }else if (lucky == '3'){
                    albedoC(),geo(),albedoFull();
                    hname = data[0].name;
                    hvision = data[0].vision;
                    hwep = data[0].weapon;
                    hnat = data[0].nation;
                    haffi = data[0].affiliation;
                    hconsta = data[0].constellation;
                    hbirth = data[0].birthday;
                    hdesc = data[0].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }else if (lucky == '4'){
                    noelleC(),geo(),noelleFull();
                    hname = data[25].name;
                    hvision = data[25].vision;
                    hwep = data[25].weapon;
                    hnat = data[25].nation;
                    haffi = data[25].affiliation;
                    hconsta = data[25].constellation;
                    hbirth = data[25].birthday;
                    hdesc = data[25].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }else if (lucky == '5'){
                    hutaoC(),pyro(),hutaoFull();
                    hname = data[15].name;
                    hvision = data[15].vision;
                    hwep = data[15].weapon;
                    hnat = data[15].nation;
                    haffi = data[15].affiliation;
                    hconsta = data[15].constellation;
                    hbirth = data[15].birthday;
                    hdesc = data[15].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }else if (lucky == '6'){
                    jeanC(),anemo(),jeanFull();
                    hname = data[16].name;
                    hvision = data[16].vision;
                    hwep = data[16].weapon;
                    hnat = data[16].nation;
                    haffi = data[16].affiliation;
                    hconsta = data[16].constellation;
                    hbirth = data[16].birthday;
                    hdesc = data[16].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }else if (lucky == '7'){
                    raidenC(),electro(),raidenFull();
                    hname = data[27].name;
                    hvision = data[27].vision;
                    hwep = data[27].weapon;
                    hnat = data[27].nation;
                    haffi = data[27].affiliation;
                    hconsta = data[27].constellation;
                    hbirth = data[27].birthday;
                    hdesc = data[27].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }else if (lucky == '8'){
                    kleeC(),pyro(),kleeFull();
                    hname = data[20].name;
                    hvision = data[20].vision;
                    hwep = data[20].weapon;
                    hnat = data[20].nation;
                    haffi = data[20].affiliation;
                    hconsta = data[20].constellation;
                    hbirth = data[20].birthday;
                    hdesc = data[20].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }else if (lucky == '9'){
                    razorC(),electro(),razorFull();
                    hname = data[28].name;
                    hvision = data[28].vision;
                    hwep = data[28].weapon;
                    hnat = data[28].nation;
                    haffi = data[28].affiliation;
                    hconsta = data[28].constellation;
                    hbirth = data[28].birthday;
                    hdesc = data[28].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }else if (lucky == '10'){
                    eulaC(),cryo(),eulaFull();
                    hname = data[11].name;
                    hvision = data[11].vision;
                    hwep = data[11].weapon;
                    hnat = data[11].nation;
                    haffi = data[11].affiliation;
                    hconsta = data[11].constellation;
                    hbirth = data[11].birthday;
                    hdesc = data[11].description;
                    document.getElementById('hero').innerHTML = 'Name: '+hname;
                    document.getElementById('vision').innerHTML = 'Vision: '+hvision;
                    document.getElementById('weapon').innerHTML = 'Weapon: '+hwep;
                    document.getElementById('nation').innerHTML = 'Nation: '+hnat;
                    document.getElementById('affiliation').innerHTML = 'Affiliation: '+haffi;
                    document.getElementById('constellation').innerHTML='Constellation: '+hconsta;
                    document.getElementById('birthdate').innerHTML='Birthdate: '+hbirth;
                    document.getElementById('desc').innerHTML=hdesc;
                }
                
            })   
        })
        .catch(function (err){
            console.log(err + '404');
        })
}
