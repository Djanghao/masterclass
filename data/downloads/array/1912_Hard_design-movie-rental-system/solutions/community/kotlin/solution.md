# Kotlin solution, Hashmap + TreeSet

**Author:** decsent
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/2922401/](https://leetcode.com/problems/design-movie-rental-system/solutions/2922401/)

---

```
class MovieRentingSystem(n: Int, entries: Array<IntArray>) {

    data class Entry(val id: Int, val movie: Int, val price: Int)

    // moves | (shop id | entry)
    // will be used in mapping
    private val movesToShopWithEntry = hashMapOf<Int, HashMap<Int, Entry>>()

    private val rentedMovies = TreeSet<Entry>(compareBy<Entry> { it.price }.thenBy { it.id }.thenBy { it.movie })

    private val unrentedMoviesToEntries = hashMapOf<Int, TreeSet<Entry>>()

    init {
        // fill data structures
        entries.map { array -> Entry(array[0], array[1], array[2]) }
            .forEach { entry ->
                val movieId = entry.movie
                val shopId = entry.id
                val shopToEntry = movesToShopWithEntry.getOrDefault(movieId, hashMapOf())
                shopToEntry[shopId] = entry
                movesToShopWithEntry[movieId] = shopToEntry

                // at the beginning all movies are unrented
                val unrentedMoviesToEntry = unrentedMoviesToEntries.getOrDefault(
                    movieId,
                    TreeSet<Entry>(compareBy<Entry> { it.price }.thenBy { it.id })
                )
                unrentedMoviesToEntry.add(entry)
                unrentedMoviesToEntries[movieId] = unrentedMoviesToEntry
            }
    }

    fun search(movie: Int): List<Int> {
        val unrentedEntries = unrentedMoviesToEntries[movie]
        return unrentedEntries?.take(5)
            ?.map { entry -> entry.id }
            ?: emptyList<Int>()
    }

    fun rent(shop: Int, movie: Int) {
        val entry = movesToShopWithEntry[movie]?.get(shop) ?: return
        doOperationWithRentedMovies(entry, Operation.ADD)
        doOperationWithUnrentedEntriesByMoviesId(movie, entry, Operation.REMOVE)
    }

    fun drop(shop: Int, movie: Int) {
        val entry = movesToShopWithEntry[movie]?.get(shop) ?: return
        doOperationWithRentedMovies(entry, Operation.REMOVE)
        doOperationWithUnrentedEntriesByMoviesId(movie, entry, Operation.ADD)
    }

    fun report(): List<List<Int>> {
        return rentedMovies.take(5)
            .map { entry -> arrayListOf(entry.id, entry.movie) }
    }

    enum class Operation {
        REMOVE,
        ADD
    }

    /**
     * Removes or adds entry for unrented movies.
     */
    private fun doOperationWithUnrentedEntriesByMoviesId(movieId: Int, entry: Entry, operation: Operation) {
        val unrentedEntries = unrentedMoviesToEntries.getOrDefault(
            movieId,
            TreeSet<Entry>(compareBy<Entry> { it.price }.thenBy { it.id })
        )
        when (operation) {
            Operation.REMOVE -> unrentedEntries.remove(entry)
            Operation.ADD -> unrentedEntries.add(entry)
        }
        unrentedMoviesToEntries[movieId] = unrentedEntries
    }

   /**
     * Removes or adds entry for rented movies.
     */
    private fun doOperationWithRentedMovies(entry: Entry, operation: Operation) {
        when (operation) {
            Operation.REMOVE -> rentedMovies.remove(entry)
            Operation.ADD -> rentedMovies.add(entry)
        }
    }
}
```