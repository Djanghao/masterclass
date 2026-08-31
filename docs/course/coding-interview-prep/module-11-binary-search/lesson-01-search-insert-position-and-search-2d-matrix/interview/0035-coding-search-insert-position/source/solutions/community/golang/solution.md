# Go Concise 100%

**Author:** credford
**Votes:** 20
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/1787521/](https://leetcode.com/problems/search-insert-position/solutions/1787521/)

---

```
func searchInsert(nums []int, target int) int {
	l := 0
	r := len(nums) - 1
	for l <= r {
		m := l + (r-l)/2
		v := nums[m]
		switch {
		case v < target:
			l = m + 1
		case v > target:
			r = m - 1
		default:
			return m
		}
	}
	return l
}
```

Also, the Go troll solution since this is the exact behavior of `sort.SearchInts`:
```
func searchInsert_troll(nums []int, target int) int {
	return sort.SearchInts(nums, target)
}
```