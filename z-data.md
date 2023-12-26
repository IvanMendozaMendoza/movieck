# Movie App Project

## User Stories:

1. **As a user, I want to see a list of popular movies.**
   - **Feature:** Display a list of popular movies retrieved from TMDb API.
   - **API Endpoint:** `/movie/popular`

2. **As a user, I want to search for movies by title.**
   - **Feature:** Implement a search bar to enter movie titles.
   - **Feature:** Display search results based on the entered title.
   - **API Endpoint:** `/search/movie`

3. **As a user, I want to view detailed information about a specific movie.**
   - **Feature:** Clicking on a movie should show detailed information.
   - **API Endpoint:** `/movie/{movie_id}`

4. **As a user, I want to see the top-rated movies.**
   - **Feature:** Display a list of top-rated movies.
   - **API Endpoint:** `/movie/top_rated`

5. **As a user, I want to see upcoming movie releases.**
   - **Feature:** Show a list of upcoming movie releases.
   - **API Endpoint:** `/movie/upcoming`

6. **As a user, I want to explore movies by genres.**
   - **Feature:** Display a list of movie genres.
   - **Feature:** Allow filtering movies by selected genre.
   - **API Endpoint:** `/genre/movie/list`

7. **As a user, I want to save my favorite movies.**
   - **Feature:** Provide a way to mark movies as favorites.
   - **Feature:** Display a list of user's favorite movies.

## Logical Flow:

### Initialize the App:

- Fetch popular movies on app load.
- Display a grid of movie posters with basic details.

### Search Functionality:

- Implement a search bar.
- On search, fetch and display results dynamically.

### Movie Details:

- When a movie is clicked, fetch and display detailed information.

### Top-rated and Upcoming Movies:

- Implement navigation to switch between top-rated and upcoming movies.

### Genres:

- Display a list of movie genres.
- Allow users to filter movies by selecting a genre.

### Favorites:

- Implement a mechanism to mark/unmark movies as favorites.
- Display a separate section for favorite movies.

## API Requests:

- **Base URL:** `https://api.themoviedb.org/3`
- **API Key:** Obtain your API key by signing up at [TMDb API](https://www.themoviedb.org/documentation/api).

## Code Structure:

### HTML:

- `index.html`: Main page layout.
- `movie-details.html`: Detailed information about a specific movie.

### JavaScript:

- `main.js`: Handles initialization, fetching, and rendering of movies.
- `search.js`: Manages the search functionality.
- `details.js`: Manages the display of detailed movie information.
- `favorites.js`: Handles saving and displaying favorite movies.

### CSS:

- `styles.css`: Basic styling for the app.

## Challenges:

1. **No Frameworks:**
   - Challenge yourself to manage the application state without using any frameworks.
   - Implement basic DOM manipulation for rendering and updating UI.

2. **Async Operations:**
   - Handle asynchronous API requests using JavaScript Promises or `async/await`.

3. **Responsive Design:**
   - Ensure your app is responsive and works well on different screen sizes.

4. **Optimize API Calls:**
   - Implement a caching mechanism to avoid unnecessary API calls.

5. **Clean Code:**
   - Focus on writing clean, modular, and well-documented code.
