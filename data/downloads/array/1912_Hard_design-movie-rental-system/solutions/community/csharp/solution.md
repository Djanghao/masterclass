# Best C# Solution - Using SortedSet

**Author:** amitgupta847
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/5783017/](https://leetcode.com/problems/design-movie-rental-system/solutions/5783017/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Separate Unrented and Rented Movie Structures:

unrentedMovies: A Dictionary<int, SortedSet<Entry>> where each movie ID maps to a sorted set of Entry (sorted by price, shop, and movie). This allows efficient retrieval of the top 5 cheapest unrented movies.
rentedMovies: A single SortedSet<Entry> to track all rented movies globally, sorted by price, shop, and movie.
Efficient Rent and Drop:

Rent: Removes the movie from unrentedMovies and adds it to rentedMovies.
Drop: Removes the movie from rentedMovies and adds it back to unrentedMovies.
No Rebuilding of Priority Queues: The Drop method no longer rebuilds priority queues from scratch. It directly removes or adds entries to/from the existing sorted sets.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity'
Time Complexity:
Search: O(log k) per insertion into the top-5 list.
Rent/Drop: Efficient O(log n) insertion/removal from sorted sets.
Report: O(log n) per insertion into the top-5 list.

# Code
```csharp []
public class MovieRentingSystem
{
    // Map of shops, with shopId as key
    private Dictionary<int, Shop> shopMap = new Dictionary<int, Shop>();

    // Unrented movie set for each movie, sorted by price and shopId
    private Dictionary<int, SortedSet<Entry>> unrentedMovies = new Dictionary<int, SortedSet<Entry>>();

    // Rented movies sorted by price, shopId, and movieId
    private SortedSet<Entry> rentedMovies = new SortedSet<Entry>(new EntryComparer());

    public MovieRentingSystem(int n, int[][] entries)
    {
        // Initialize shops
        for (int i = 0; i < n; i++)
            shopMap[i] = new Shop(i);

        // Initialize movies and their entries in shops
        foreach (var entry in entries)
        {
            var shopId = entry[0];
            var movieId = entry[1];
            var price = entry[2];

            var movieEntry = new Entry(shopId, movieId, price);
            shopMap[shopId].AddMovie(new Movie(movieId, price));

            // Add to unrentedMovies set for that movie
            if (!unrentedMovies.ContainsKey(movieId))
                unrentedMovies[movieId] = new SortedSet<Entry>(new EntryComparer());
            
            unrentedMovies[movieId].Add(movieEntry);
        }
    }

    // Search for the 5 cheapest unrented shops for a movie
    public IList<int> Search(int movie)
    {
        var result = new List<int>();
        if (unrentedMovies.ContainsKey(movie))
        {
            foreach (var entry in unrentedMovies[movie])
            {
                result.Add(entry.shop);
                if (result.Count == 5) break;
            }
        }
        return result;
    }

    // Rent a movie from a shop
    public void Rent(int shop, int movie)
    {
        var shopObj = shopMap[shop];
        var moviePrice = shopObj.Rent(movie);

        // Remove from unrentedMovies
        if (unrentedMovies.ContainsKey(movie))
        {
            unrentedMovies[movie].Remove(new Entry(shop, movie, moviePrice));
            if (unrentedMovies[movie].Count == 0)
                unrentedMovies.Remove(movie); // Clean up if empty
        }

        // Add to rentedMovies
        rentedMovies.Add(new Entry(shop, movie, moviePrice));
    }

    // Drop a rented movie at a shop
    public void Drop(int shop, int movie)
    {
        var shopObj = shopMap[shop];
        var moviePrice = shopObj.Drop(movie);

        // Remove from rentedMovies
        rentedMovies.Remove(new Entry(shop, movie, moviePrice));

        // Add back to unrentedMovies
        if (!unrentedMovies.ContainsKey(movie))
            unrentedMovies[movie] = new SortedSet<Entry>(new EntryComparer());

        unrentedMovies[movie].Add(new Entry(shop, movie, moviePrice));
    }

    // Report the 5 cheapest rented movies
    public IList<IList<int>> Report()
    {
        var result = new List<IList<int>>();
        foreach (var entry in rentedMovies)
        {
            result.Add(new List<int> { entry.shop, entry.movie });
            if (result.Count == 5) break;
        }
        return result;
    }

    public class Shop
    {
        public int Id { get; set; }
        private Dictionary<int, Movie> _movieMap = new Dictionary<int, Movie>();
        private HashSet<int> _rentedMovies = new HashSet<int>();

        public Shop(int id)
        {
            Id = id;
        }

        public void AddMovie(Movie movie)
        {
            if (!_movieMap.ContainsKey(movie.Id))
                _movieMap[movie.Id] = movie;
        }

        public int Rent(int movieId)
        {
            if (_movieMap.ContainsKey(movieId) && !_rentedMovies.Contains(movieId))
            {
                _rentedMovies.Add(movieId);
                return _movieMap[movieId].Price;
            }
            return -1;
        }

        public int Drop(int movieId)
        {
            if (_rentedMovies.Contains(movieId))
            {
                _rentedMovies.Remove(movieId);
                return _movieMap[movieId].Price;
            }
            return -1;
        }
    }

    public class Movie
    {
        public int Id { get; set; }
        public int Price { get; set; }

        public Movie(int id, int price)
        {
            Id = id;
            Price = price;
        }
    }

    public class Entry
    {
        public int shop, movie, price;

        public Entry(int shop, int movie, int price)
        {
            this.shop = shop;
            this.movie = movie;
            this.price = price;
        }
    }

    public class EntryComparer : IComparer<Entry>
    {
        public int Compare(Entry a, Entry b)
        {
            if (a.price != b.price) return a.price - b.price;
            if (a.shop != b.shop) return a.shop - b.shop;
            return a.movie - b.movie;
        }
    }
}
```