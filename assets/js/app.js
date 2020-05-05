let btSearch = document.getElementById('btSearch');
btSearch.addEventListener('click', function (e) {
    e.preventDefault();
    loadWine();
})

let searchInput = document.getElementById('searchInput');

let URL_LINK = 'http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines';
const imgURL = 'http://localhost/projetCaviste/assets/img/pics/';
let output = '';
function loadWine() {
    const XHR = new XMLHttpRequest();
    XHR.open('GET', URL_LINK, true);
    XHR.onreadystatechange = function () {
        if (this.readyState == 4) {
            //console.log(this.readyState);
            if (this.status == 200) {
                //console.log(this.responseText);
                let wines = JSON.parse(this.responseText);
                console.log(wines);
                console.log(typeof(wines));
                Object
                    .values(wines)
                    .forEach(wine => {
                        console.log(wine.name);
                        console.log(wine.picture);
                        output += `
                        <div class="card bg-light mb-3 mr-2" style="height:450px;">
                            <div class="card-body">
                                <img class="card-img img-thumbnail"style="height:300px;" src="${imgURL}${wine.picture}">
                            </div>
                            <div class="card-header">
                                 <h5 class="card-title">${wine.name}</h5>
                                 <p class="card-text text-muted">Pays producteur: <strong>${wine.country}</strong>.</p>
                                <p class="card-text">Année - ${wine.year}</p>
                            </div>
                      </div>
                        `;
                    });
                    document.getElementById('result').innerHTML = output;
            }
        } else {
            console.log('Error');
        }
    }
    XHR.send();
}
