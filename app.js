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

postaviPoeni()
postaviPartii()
