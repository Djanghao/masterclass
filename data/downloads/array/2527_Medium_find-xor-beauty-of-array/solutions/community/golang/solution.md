# Golang 50 ms 10.4 MB

**Author:** maxhero90
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3024587/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3024587/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$
# Code
```
func xorBeauty(nums []int) int {
	var result int
	for _, num := range nums {
		result ^= num
	}
	return result
}
```