
    let btSearch = document.getElementById('btSearch');
    btSearch.addEventListener('click', function (e) {
        e.preventDefault();
        alert('OK !');
    })

let URL_LINK = 'http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines';
let output = '';
  const XHR = new XMLHttpRequest();
  XHR.open('GET',URL_LINK,true);
  XHR.onreadystatechange = function(){
      if(this.readyState ==4){
          //console.log(this.readyState);
          if(this.status==200){
              //console.log(this.responseText);
            let wines = JSON.parse(this.responseText);
            console.log(wines);
            console.log(typeof(wines));
            Object.values(wines).forEach(wine => {
                console.log(wine.name);
            });
          }
      }else{
          console.log('Error');
      }
  }
  XHR.send();
