$(document).ready(function() {
    $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.themoviedb.org/3/search/person?query=Sandra+Bullock&api_key=c2e1a90db2b771c4076bbfc772a8baae').then(function(data) {
        console.log(data);
    })
});
