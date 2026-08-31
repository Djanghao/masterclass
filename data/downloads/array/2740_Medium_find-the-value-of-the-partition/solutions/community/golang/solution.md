# 🔥 Go/Python One Line Solution | Beat 97% | With Explanation 🔥

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/5536540/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/5536540/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Sort `nums` first and the minimum difference between two neighboured element is the answer.

# Complexity
- Time complexity: $$O(n\	ext{log}n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Python []
class Solution:
    def findValueOfPartition(self, nums: List[int]) -> int:
        return min(y - x for x, y in pairwise(sorted(nums)))
```
```Go []
func findValueOfPartition(nums []int) int {
	sort.Ints(nums)
	ans := nums[1] - nums[0]
	for i := 2; i < len(nums); i++ {
		ans = min(ans, nums[i]-nums[i-1])
	}
	return ans
}
```