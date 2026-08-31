# Golang | TC O(log n), SC O(1) | sort.Search

**Author:** Dexes
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/3839955/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/3839955/)

---

# Complexity
- Time complexity: O(log n)
- Space complexity: O(1)

# Code
```
func missingElement(nums []int, k int) int {
	k += nums[0]
	i := sort.Search(len(nums), func(i int) bool { return nums[i]-i >= k }) - 1

	return i + k
}
```