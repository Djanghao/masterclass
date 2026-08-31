# Official Solution

**Link:** [https://leetcode.com/problems/design-movie-rental-system/solution/](https://leetcode.com/problems/design-movie-rental-system/solution/)

---

### Approach: Hash Map + Ordered Set Approach

#### Intuition

When we look at this problem, one key detail is that each shop can have at most one copy of a movie. That means the pair $(\textit{shop}, \textit{movie})$ uniquely identifies a movie in the input list $\textit{entries}$. To keep track of prices, we can use a hash map called $\textit{t_price}$, where each key is the pair $(\textit{shop}, \textit{movie})$ and the value is simply the movie’s price.

The important thing about $\textit{t_price}$ is that we never actually change it. No matter whether a movie is rented or dropped, the price stays fixed. To handle availability, we need two other structures: one for movies that are currently available, and one for those that are already rented. Let’s call them $\textit{t_valid}$ and $\textit{t_rent}$, respectively.

For available movies, we want to support fast searching of the cheapest shops. A good way to do this is to store, for each movie, an ordered set of pairs $(\textit{price}, \textit{shop})$. That way, when we run a $\texttt{search(movie)}$ query, we can just grab the first five elements. Renting and dropping is then just about removing or inserting these pairs into the right set.

For rented movies, we need to be able to report the cheapest five overall, across all shops and all movies. Here an ordered set works well again, except this time we store triplets $(\textit{price}, \textit{shop}, \textit{movie})$. This ordering ensures that when we take the first five elements, we’re getting the correct answer.

So, putting this together:

- The constructor builds $\textit{t_price}$ and fills in $\textit{t_valid}$ with all available movies.
- $\texttt{search(movie)}$ just returns the first five shops from $\textit{t_valid}[movie]$.
- $\texttt{rent}$ removes a movie from $\textit{t_valid}$ and adds it to $\textit{t_rent}$.
- $\texttt{drop}$ does the opposite.
- $\texttt{report}$ simply takes the first five triplets from $\textit{t_rent}$ and extracts the shop and movie.

This design keeps all operations efficient, since inserts, deletes, and lookups in ordered sets are logarithmic. The memory usage is also linear in the size of the input.

#### Implementation

<iframe src="https://leetcode.com/playground/cSxcZKDR/shared" frameBorder="0" width="100%" height="500" name="cSxcZKDR"></iframe>

#### Complexity Analysis

- Time complexity:

    - $\texttt{MovieRentingSystem(n, entries)}$ operation: $O(n \log n)$.

    - $\texttt{search(movie)}$ operation: $O(\log n)$.

    - $\texttt{rent(shop, movie)}$ operation: $O(\log n)$.

    - $\texttt{drop(shop, movie)}$ operation: $O(\log n)$.

    - $\texttt{report()}$ operation: $O(\log n)$.

- Space complexity: $O(n)$.

---