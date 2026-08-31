# Go 99% solution by rand.Intn(n)

**Author:** tjucoder
**Votes:** 3
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/529556/](https://leetcode.com/problems/shuffle-an-array/solutions/529556/)

---

```go
type Solution struct {
	original []int
}

func Constructor(nums []int) Solution {
	rand.Seed(time.Now().UnixNano())
	return Solution{
		original: nums,
	}
}

/** Resets the array to its original configuration and return it. */
func (s *Solution) Reset() []int {
	return s.original
}

/** Returns a random shuffling of the array. */
func (s *Solution) Shuffle() []int {
	shuffle := make([]int, len(s.original))
	copy(shuffle, s.original)
	for i := 0; i < len(shuffle)-1; i++ {
		index := rand.Intn(len(shuffle)-i)
		shuffle[len(shuffle)-1-i], shuffle[index] = shuffle[index], shuffle[len(shuffle)-1-i]
	}
	return shuffle
}
```