$(document).ready(function(){
    $('body').on('submit', '#searchForm', function (e) {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

//Get Movies From OMDB API
function getMovies(searchText) {
    $.ajax({
        method: 'Get',
        url: 'http://www.omdbapi.com?s=' + searchText
    }).done(function (data) {
        console.log(data);
    });
}