# [Go] Two maps and a heap - discussion

**Author:** sebnyberg
**Votes:** 8
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/2382537/](https://leetcode.com/problems/design-a-food-rating-system/solutions/2382537/)

---

For these types of problems, consider:

* How many elements are there?
* What are the access patterns?
* What is the worst-case scenario?

In a real-world scenario, the access patterns are more well-known.
For example, ChangeRating may be called 100 times as often as HighestRated.

Sadly, on Leetcode, they rarely give this info, and test cases usually try all extremes,
so you are forced to find a generic solution to cater for all cases.

`ChangeRating` is easy to solve - simply store all food items in a map.

`HighestRated` needs to efficiently find the highest value, and so a heap is a good approach.

When a food item changes, the rating will also affect the heap.
To solve this, we may share the same food item between the map and the heap,
and use `heap.Fix(&h, idx)` to "fix" the heap after an item's rating has changed.

To "fix" the heap, you must keep track of where the food item is in the heap.
For this, the food item is given an auxiliary `heapIdx` field.

**What if each cuisine only had one food item?**

Consider the extreme case of having one food item per cuisine. 
Then there is a lot of overhead in having one heap per item, right?

Actually, no. The heap is a pointer to a slice, which is a SliceHeader + uintptr.
In total that is 256 bits of data, as opposed to 64 bits. Trading 192 bits for a heap is very cheap.

The real discussion is not in terms of performance but rather about complexity.
A heap is arguably more complex than a simple slice.
So if it was known that it is exceedingly rare for a cuisine to have more than, say, 5 items each.
Then I'd go with a slice instead. Not because it's faster, but because it's simpler.

```go
type food struct {
	name    string
	cuisine string
	rating  int

	heapIdx int // keep track of food item's position in the heap
}

type FoodRatings struct {
	foods    map[string]*food
	cuisines map[string]*foodHeap
}

func Constructor(foods []string, cuisines []string, ratings []int) FoodRatings {
	// The idea is to use pointers and heap.Fix to manage updates to the
	// heap and ratings of a given food.
	var r FoodRatings
	r.cuisines = make(map[string]*foodHeap)
	r.foods = make(map[string]*food)
	for i := range foods {
		if _, exists := r.cuisines[cuisines[i]]; !exists {
			r.cuisines[cuisines[i]] = &foodHeap{}
		}
		f := &food{
			name:    foods[i],
			cuisine: cuisines[i],
			rating:  ratings[i],
		}
		heap.Push(r.cuisines[cuisines[i]], f)
		r.foods[foods[i]] = f
	}
	return r
}

func (this *FoodRatings) ChangeRating(food string, newRating int) {
	f := this.foods[food]
	f.rating = newRating
	heap.Fix(this.cuisines[f.cuisine], f.heapIdx)
}

func (this *FoodRatings) HighestRated(cuisine string) string {
	return (*this.cuisines[cuisine])[0].name
}

type foodHeap []*food

func (h foodHeap) Len() int { return len(h) }
func (h foodHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
	h[i].heapIdx = i
	h[j].heapIdx = j
}
func (h foodHeap) Less(i, j int) bool {
	if h[i].rating == h[j].rating {
		return h[i].name < h[j].name
	}
	return h[i].rating > h[j].rating
}
func (h *foodHeap) Push(x interface{}) {
	a := x.(*food)
	a.heapIdx = len(*h)
	*h = append(*h, a)
}
func (h *foodHeap) Pop() interface{} {
	n := len(*h)
	it := (*h)[n-1]
	*h = (*h)[:n-1]
	return it
}
```