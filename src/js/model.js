const API_URL = 'https://api.themoviedb.org/3/discover/movie?';
const API_KEY = 'api_key=6a55627a0b1d370a7f55c28d1eeb36d1';

const getMovies = async function(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
}
getMovies(`${API_URL}${API_KEY}`);







/*
// save this as hash map 
MOVIE
Action          28
Adventure       12
Animation       16
Comedy          35
Crime           80
Documentary     99
Drama           18
Family          10751
Fantasy         14
History         36
Horror          27
Music           10402
Mystery         9648
Romance         10749
Science Fiction 878
TV Movie        10770
Thriller        53
War             10752
Western         37

and 

TV SHOW
Action & Adventure  10759
Animation           16
Comedy              35
Crime               80
Documentary         99
Drama               18
Family              10751
Kids                10762
Mystery             9648
News                10763
Reality             10764
Sci-Fi & Fantasy    10765
Soap                10766
Talk                10767
War & Politics      10768
Western             37
*/