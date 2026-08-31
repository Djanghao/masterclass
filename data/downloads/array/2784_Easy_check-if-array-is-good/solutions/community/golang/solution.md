# Easy 2784

**Author:** Farruhbek
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/5568145/](https://leetcode.com/problems/check-if-array-is-good/solutions/5568145/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func isGood(nums []int) bool {
	lenNums := len(nums)
	
	if lenNums < 2 {
		return false
	}
	
	maxNum := nums[0]
	counts := map[int]int{}
	
	for _, num := range nums {
		if num > maxNum {
			maxNum = num
		}
		counts[num]++
	}
	
	if counts[maxNum] != 2 {
		return false
	}
	
	for i := 1; i < maxNum; i++ {
		if counts[i] != 1 {
			return false
		}
	}
	
	if len(counts) != maxNum {
		return false
	}
	
	return true
}
```