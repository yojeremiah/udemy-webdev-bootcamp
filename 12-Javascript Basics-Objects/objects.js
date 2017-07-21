// Movie database exercise
var movieDB = [
    {title: "Dude Where's My Car", rating: 3, hasWatched: true}, 
    {title: "Napolean Dynamite", rating: 4.5, hasWatched: true}, 
    {title: "Pineapple Express", rating: 5, hasWatched: true}, 
    {title: "Shawshank Redemption", rating: 2, hasWatched: false}, 
];

// function to print output for movie database
function printMovieDB(mDB) {
    // loop through each item in mDB array
    mDB.forEach(function(movie){
        // check if hasWatched is true or false & print accordingly
        if (movie.hasWatched === true){
            console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
        }
        else {
            console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " stars");
        }
    });
    return;
}

printMovieDB(movieDB);