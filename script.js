let accueil = document.getElementById('accueil')
let parcours = document.getElementById('parcours')
let apropos = document.getElementById('apropos')
let lines = document.getElementById('lines')
let nav = document.getElementById('navbar')

let arr = [accueil, parcours, apropos]

function check(e){
    arr.forEach(element => {
       element.style.display = 'none' 
    });
    e = e.innerHTML.replace(/ /g, "").toLowerCase()
    document.getElementById(e).style.display = 'block'
    if(e != 'accueil'){
        lines.classList.replace('d-flex', 'd-none')
        if(e == 'parcours'){
            nav.classList.replace('bg-transparent', 'bgbody')
        }else if( e == 'apropos'){
            nav.classList.replace('bg-transparent', 'bgbody')
        }
    }else{
        lines.classList.replace('d-none', 'd-flex')
        document.body.style.backgroundColor = '#131B23'
        nav.classList.replace('bgbody', 'bg-transparent')
    }
};


