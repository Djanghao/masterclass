# Golang 82 ms 8.6 MB

**Author:** maxhero90
**Votes:** 1
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3527099/](https://leetcode.com/problems/power-of-heroes/solutions/3527099/)

---

# Complexity
- Time complexity: $$O(n*logn)$$
- Space complexity: $$O(1)$$
# Code
```
func sumOfPower(nums []int) int {
	mod := 1_000_000_007
	sort.Ints(nums)
	var sum, result int
	for _, num := range nums {
		result = (result + (num*num%mod)*(num+sum)) % mod
		sum = (sum<<1 + num) % mod
	}
	return result
}
```