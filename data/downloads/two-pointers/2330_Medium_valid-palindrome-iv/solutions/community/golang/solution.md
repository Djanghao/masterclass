# Beat 100% solution

**Author:** AnaghaC
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/5489191/](https://leetcode.com/problems/valid-palindrome-iv/solutions/5489191/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If char from pointer 1 not match with char at pointer 2 add checkSum +1 and after for loop just check it. if it's more than 2 so it a complicate Palindrome and return false else if it's less than 2 it's easy to convert it into palindrome. It contains 0 so 0 mean it's palindrome

# Approach
<!-- Describe your approach to solving the problem. -->
Add a counter to count how many times change

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func makePalindrome(s string) bool {
    left := 0
	right := len(s) - 1
	checkSum := 0

	for left < right {
		if s[left] != s[right] {
			checkSum++
		}
		left++
		right--
	}

	if checkSum>2{
		return false
	}
	return true
}
```