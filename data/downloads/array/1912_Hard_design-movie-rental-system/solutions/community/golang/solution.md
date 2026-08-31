# Go Heap Priority Solution Beat 100% speed, 100% memory

**Author:** linhbkhn95
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/4447018/](https://leetcode.com/problems/design-movie-rental-system/solutions/4447018/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type IndexKey struct {
	Shop  int
	Movie int
}

func (k IndexKey) String() string {
	return fmt.Sprintf("%d_%d", k.Shop, k.Movie)
}

type MovieRentingSystem struct {
	rentedMovieHeap   *Movies
	unrentedMovies    map[int]*Movies
	rentedMovies      map[string]*RentingMovie
	indexingKeyOffset map[string]*RentingMovie
}

func Constructor(n int, entries [][]int) MovieRentingSystem {
	unrentedMovies := make(map[int]*Movies)
	indexingMovies := make(map[string]*RentingMovie)

	for _, entry := range entries {
		if _, ok := unrentedMovies[entry[1]]; !ok {
			unrentedMovies[entry[1]] = &Movies{}
		}
		m := &RentingMovie{
			Shop:  entry[0],
			Movie: entry[1],
			Price: entry[2],
		}
		heap.Push(unrentedMovies[entry[1]], m)
		indexingMovies[IndexKey{
			Shop:  entry[0],
			Movie: entry[1],
		}.String()] = m
	}

	return MovieRentingSystem{
		indexingKeyOffset: indexingMovies,
		unrentedMovies:    unrentedMovies,
		rentedMovieHeap:   &Movies{},
		rentedMovies:      make(map[string]*RentingMovie),
	}

}

func (this *MovieRentingSystem) Search(movie int) []int {
	movies, ok := this.unrentedMovies[movie]
	if !ok {
		return nil
	}
	result := make([]int, 0, 5)
	eligibleMovies := make([]*RentingMovie, 0, 5)
	for movies.Len() > 0 && len(eligibleMovies) < 5 {
		item := heap.Pop(movies)
		movie := item.(*RentingMovie)
		eligibleMovies = append(eligibleMovies, movie)
		result = append(result, movie.Shop)

	}
	if len(eligibleMovies) == 0 {
		return nil
	}
	for _, e := range eligibleMovies {
		heap.Push(movies, e)
	}
	return result

}

func (this *MovieRentingSystem) Rent(shop int, movie int) {

	key := IndexKey{
		Shop:  shop,
		Movie: movie,
	}

	rentingMovie := this.indexingKeyOffset[key.String()]
	if rentingMovie == nil {
		return
	}

	heap.Remove(this.unrentedMovies[movie], rentingMovie.Offset)
	//remove from heap min
	// add into rentedMovie List
	rentedMovie := &RentingMovie{
		Shop:     shop,
		Movie:    movie,
		Price:    rentingMovie.Price,
		IsRented: true,
	}
	this.rentedMovies[key.String()] = rentedMovie
	heap.Push(this.rentedMovieHeap, rentedMovie)
}

func (this *MovieRentingSystem) Drop(shop int, movie int) {

	key := IndexKey{
		Shop:  shop,
		Movie: movie,
	}
	m, ok := this.rentedMovies[key.String()]
	if !ok {
		return
	}
	rentingMovie := &RentingMovie{
		Shop:  shop,
		Movie: movie,
		Price: m.Price,
	}
	this.indexingKeyOffset[key.String()] = rentingMovie

	heap.Push(this.unrentedMovies[movie], rentingMovie)

	heap.Remove(this.rentedMovieHeap, m.Offset)

	delete(this.rentedMovies, key.String())
}

func (this *MovieRentingSystem) Report() [][]int {
	result := make([][]int, 0, 5)
	historicals := make([]*RentingMovie, 0, 5)
	for this.rentedMovieHeap.Len() > 0 && len(historicals) < 5 {
		item := heap.Pop(this.rentedMovieHeap)
		m := item.(*RentingMovie)
		historicals = append(historicals, m)
		result = append(result, []int{m.Shop, m.Movie})
	}
	if len(historicals) == 0 {
		return nil
	}
	for _, item := range historicals {
		heap.Push(this.rentedMovieHeap, item)
	}
	return result
}

type RentingMovie struct {
	Shop     int
	Movie    int
	Price    int
	Offset   int
	IsRented bool
}

type Movies []*RentingMovie

// Len implements heap.Interface.
func (m Movies) Len() int {
	return len(m)
}

// Less implements heap.Interface.
func (m Movies) Less(i int, j int) bool {
	if !m[i].IsRented {
		if m[i].Price == m[j].Price {
			return m[i].Shop < m[j].Shop
		}
	} else if m[i].Price == m[j].Price {
		if m[i].Shop == m[j].Shop {
			return m[i].Movie < m[j].Movie
		}
		return m[i].Shop < m[j].Shop
	}

	return m[i].Price < m[j].Price
}

// Pop implements heap.Interface.
func (m *Movies) Pop() any {
	item := (*m)[m.Len()-1]
	(*m) = (*m)[:m.Len()-1]
	return item
}

// Push implements heap.Interface.
func (m *Movies) Push(x any) {
	item := x.(*RentingMovie)
	item.Offset = m.Len()
	(*m) = append((*m), item)
}

// Swap implements heap.Interface.
func (m Movies) Swap(i int, j int) {
	m[i].Offset, m[j].Offset = j, i
	m[i], m[j] = m[j], m[i]
}

```