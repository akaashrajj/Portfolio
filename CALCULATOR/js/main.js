function numbers(val) {
    document.getElementById("display").value += val
}

function operators(ope) {
    document.getElementById("display").value += ope
}

function zero() {
    let txt = document.getElementById("display").value;
    if (txt == '0') {
        document.getElementById("display").value += ''

    }
    else {
        document.getElementById("display").value += '0'

    }
}

function dot() {
    let txt=document.getElementById("display").value;
    if(txt==""){
        document.getElementById("display").value+='0'
    }
    else{
        document.getElementById("display").value+="."
    }
}

function clearalldata() {
    document.getElementById("display").value = ""
}

function result() {
    if(dis)
    document.getElementById("display").value = eval(document.getElementById("display").value)
}

function clearonebyone() {
    let txt = document.getElementById("display").value;
    document.getElementById("display").value = txt.slice(0, length - 1)
}