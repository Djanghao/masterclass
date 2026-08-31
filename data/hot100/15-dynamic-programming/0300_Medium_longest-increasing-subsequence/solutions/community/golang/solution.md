# Golang O(nlogn) solution

**Author:** redtree1112
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/74866/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/74866/)

---

The idea pretty much borrowed from this:
https://discuss.leetcode.com/topic/28738/java-python-binary-search-o-nlogn-time-with-explanation
I really am not confident that I can come up with this without having an experience of at least once solving a similar problem...

```
func lengthOfLIS(nums []int) int {
	var tails []int
	for i := 0; i < len(nums); i++ {
		tlen := len(tails)
		if tlen == 0 {
			tails = []int{nums[i]}
			continue
		}
		if nums[i] > tails[tlen-1] {
			tails = append(tails, nums[i])
			continue
		}

		start, end, mid := 0, tlen-1, 0
		for start != end {
			mid = start + (end-start)/2
			if nums[i] > tails[mid] {
				start = mid + 1
			} else {
				end = mid
			}
		}
		tails[end] = nums[i]
	}
	return len(tails)
}
```