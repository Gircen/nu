

export function UpHome(){
    var text = document.getElementById('text');
    text.innerHTML="Добро пожаловать!"
    text.style.opacity=0.7;
}

export function getUrlVars() {
    var vars ;
    var parts = window.location.href.replace(/[#&]+([^=&]+)/gi, function(m,key) {
        vars = key;
    });
    return vars;
}
export function route(x){
    switch(x) {
        case 'home':
            UpHome();
            break;
        default:
            UpHome();
            break;
    }
}
