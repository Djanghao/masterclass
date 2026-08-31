# Short and straight-forward sortedcontainers solution

**Author:** kcsquared
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/1298433/](https://leetcode.com/problems/design-movie-rental-system/solutions/1298433/)

---

There's two clear ways to maintain 'semi-sorted' data structures, where we only care about the `5 minimum elements` of a collection. The first way is to just use a **balanced binary tree** to store rentals and shops with each movie. The second is to use several **heaps** with lazy updating, hashmaps to remember 'rented out' movies, and repeated querying of the minimum until we have the 5 smallest valid elements.

Both options give `O(log n)` cost for each operation, and are worth knowing about. However, using sortedcontainers saves a couple hundred lines of code.

```python
import sortedcontainers as sc
class MovieRentingSystem:
	def __init__(self, n: int, entries: List[List[int]]):
		self.rented = sc.SortedList()  # Triples of price, shop, movie
		self.movies = {}  # Dictionary mapping movie -> sorted list of (price, shop)
		self.movie_and_shop_to_price = {}  # Dictionary mapping (movie, shop) -> price

		for shop, movie, price in entries:
			if movie not in self.movies:
				self.movies[movie] = sc.SortedList()
			self.movies[movie].add((price, shop))
			self.movie_and_shop_to_price[movie, shop] = price

	def search(self, movie: int) -> List[int]:
		if movie not in self.movies:
			return []
		return [x[1] for x in self.movies[movie][:5]]  # Returning the shop numbers

	def rent(self, shop: int, movie: int) -> None:
		my_price = self.movie_and_shop_to_price[movie, shop]
		self.rented.add((my_price, shop, movie))
		self.movies[movie].remove((my_price, shop))

	def drop(self, shop: int, movie: int) -> None:
		my_price = self.movie_and_shop_to_price[movie, shop]
		self.rented.remove((my_price, shop, movie))
		self.movies[movie].add((my_price, shop))

	def report(self) -> List[List[int]]:
		return [x[1:] for x in self.rented[:5]]  # Returning the (shop, movie) pairs
```