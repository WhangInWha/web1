$(document).ready(function(){
    $('body').on('submit', '#searchForm', function (e) {
        let searchText = $('#searchText');
        alert(searchText);
        e.preventDefault();
    });
});