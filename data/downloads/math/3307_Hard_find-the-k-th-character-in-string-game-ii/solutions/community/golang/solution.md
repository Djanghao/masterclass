# Go solution

**Author:** lainhdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846222/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5846222/)

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
```golang []
func kthCharacter(k int64, operations []int) byte {
    k--
	c := 0
	for i := len(operations) - 1; i >= 0; i-- {
		if k>>i&1 == 1 {
			c += operations[i]
		}
	}
	return 'a' + byte(c%26)
}
```