# Golang Bit Manipulation solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3815697/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3815697/)

---

# Complexity
- Time complexity: O(N)
- Space complexity: O(N)

# Code
```go
func doesValidArrayExist(derived []int) bool {
	origin0 := make([]int, len(derived))
	origin1 := make([]int, len(derived))
	origin1[0] = 1
	for i := 0; i < len(derived)-1; i++ {
		origin0[i+1] = derived[i] ^ origin0[i]
		origin1[i+1] = derived[i] ^ origin1[i]
	}
	if derived[len(derived)-1] == origin0[len(derived)-1] ^ origin0[0] {
		return true
	}
	if derived[len(derived)-1] == origin1[len(derived)-1] ^ origin1[0] {
		return true
	}
	return false
}
```