var arr = [];
var sum = 0;
var bcInput = parseInt(document.querySelector('#poeni').value);
var bcBTN = document.querySelector('#vnesiPoeni');
var prikaziPoeni = document.querySelector('.prikaziPoeni');
let ppS = document.getElementById('ppS');
let ppS2 = document.getElementById('ppS2');
let ara = document.querySelector('.arra');

bcBTN.onclick = function(event) {
  event.preventDefault();

  function checkNum(numS) {
    numS = document.querySelector('#poeni').value;
    if(isNaN(numS)){
      alert('It\'s  not a number');
    } else if(!numS) {
      alert('Enter a number');
    } else {
      var n1 = arr.push(parseInt(numS));      
      var n2;
      n2 = arr.reduce(function(a, b) {
        return a + b;
      });

      ppS.textContent = n2;
      ppS2.innerHTML = '' + n1;
      document.querySelector('.igrani_partii').innerHTML ='Played Games : ' + n1;
      document.querySelector('.arra').innerHTML = arr; 

      sessionStorage.setItem('br', arr);
      sessionStorage.setItem("poeni", n2);
      sessionStorage.setItem('partii', n1);
      console.log(sessionStorage.getItem("poeni", n1));

      let imaBr = sessionStorage.getItem('br');
      imaBr = imaBr ? imaBr.split(',') : [];
      imaBr.push(imaBr);
      sessionStorage.setItem('br', imaBr.toString());      
    }    
  }   
  checkNum()  
};

function postaviPoeni(){
  if(sessionStorage.getItem("poeni") === null) {
    ppS.innerText = "No Info"
  } else {
    ppS.innerText = sessionStorage.getItem('poeni');
  }
}

function postaviPartii() {
  if(sessionStorage.getItem("partii") === null){
    document.querySelector('.igrani_partii').innerHTML = 'Played Games : ' + 'No Info'
  } else {
    document.querySelector('.igrani_partii').innerHTML =
    'Изиграни партии : ' + sessionStorage.getItem('partii');
  }
}

document.querySelector('#reset').onclick = function(e) {
  e.preventDefault();
  sessionStorage.clear();
  window.location.reload(true);
}

var stopwatch = document.getElementById("stopwatch");
var startBtn = document.getElementById("start-btn");
var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;
 
/* function to start stopwatch */
function start(flag) {
    if (flag) {
        startBtn.disabled = true;
    }
 
    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
 
        ms++;
 
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
 
        stopwatch.innerHTML = min + ':' + sec + ':' + ms;
 
        // calling start() function recursivly to continue stopwatch
        start();
 
    }, 10); // setTimeout delay time 10 milliseconds
}
 
/* function to pause stopwatch */
function pause() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}
 
/* function to reset stopwatch */
function reset() {
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startBtn.disabled = false;
}

postaviPoeni()
postaviPartii()
