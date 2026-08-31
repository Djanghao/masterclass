# Golang O(n*logn)/O(1) cumulative sum as balance

**Author:** user2418K
**Votes:** 1
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3357166/](https://leetcode.com/problems/reducing-dishes/solutions/3357166/)

---

# Intuition
- Sorting the array in ascenging order
- Iterate over the array from the tail and track the cummulative sum. When it becomes less than zero, then stop iteration since if we continue we reduce the maximum result we'd like to achieve
- Iterate over the array starting from the index we found in the previous step till the end and count the resulting maximum satisfaction
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*logn) - because of the sort
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxSatisfaction(satisfaction []int) int {
	sort.Ints(satisfaction)

	i, balance := len(satisfaction)-1, 0
	for ; i >= 0; i-- {
		if balance+satisfaction[i] < 0 {
			break
		}
		balance += satisfaction[i]
	}
	result := 0
	i++
	for j := 1; i < len(satisfaction); i, j = i+1, j+1 {
		result += satisfaction[i] * j
	}
	return result
}

```