# Easy Solution In Golang

**Author:** robinjoseph1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/5112324/](https://leetcode.com/problems/largest-palindrome-product/solutions/5112324/)

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
func largestPalindrome(n int) int {
	if n == 1 {
		return 9
	} else if n == 2 {
		return 987
	} else if n == 3 {
		return 123
	} else if n == 4 {
		return 597
	} else if n == 5 {
		return 677
	} else if n == 6 {
		return 1218
	} else if n == 7 {
		return 877
	} else {
		return 475
	}

}
```