let accueil = document.getElementById('accueil')
let parcours = document.getElementById('parcours')
let apropos = document.getElementById('apropos')
let lines = document.getElementById('lines')


let arr = [accueil, parcours, apropos]

// arr.forEach(element => {
//     if(!element.classList.contains('act')){
//         element.style.display = 'none'
//     }else{
//         element.style.display = 'block'
//     }
// });

// let bg = document.getElementById('bg-custom')
let nav = document.getElementById('navbar')

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

    // if(e == 'accueil'){
    //     lines.classList.replace('d-none', 'd-flex')
    //     bg.style.backgroundColor = '#131B23'
    // }else if(e == 'parcours'){
    //     bg.style.backgroundColor = 'green'
    // }else if( e == 'apropos'){
    //     bg.style.backgroundColor = 'red'
    // }
};


