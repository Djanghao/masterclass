# Go solution faster than 100% with explanation

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/1033207/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/1033207/)

---

The idea of this solution is to find the first `1` and make that index the old value then find the next `1` and find the difference, if it is smaller than `k` return `false` if not then make the old value the current value.

*Note: `old` is the index of the `1` before the current one*

```
func kLengthApart(nums []int, k int) bool {
    
	old := -1
	for i, num := range nums {
		if num == 1 {
			if old != -1 && nums[old] == 1 && i - old - 1 < k {
				return false
			}
			old = i
		}
	}

	return true
}
```