# Simple to understand Go solution

**Author:** axdxux
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4084803/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4084803/)

---

# Complexity
- **Time complexity:** *O(n\xB2)*

- **Space complexity:** *O(1)*

# Code
```
func countPairs(coords [][]int, k int) int {
	pairs := 0
	for i := 0; i < len(coords); i++ {
		for j := 0; j < len(coords); j++ {
			if i != j && (coords[i][0]^coords[j][0])+(coords[i][1]^coords[j][1]) == k {
				pairs++
			}
		}
	}
	return pairs / 2
}
```