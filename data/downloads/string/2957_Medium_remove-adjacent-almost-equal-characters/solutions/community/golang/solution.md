# Go 0ms O(n) solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/5608573/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/5608573/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
func removeAlmostEqualCharacters(word string) int {
    op := 0
    for i := 0; i+1 < len(word); i++ {
        if word[i] == word[i+1] || word[i] + 1 == word[i+1] || word[i] == word[i+1] + 1 {
            op++
            i++
        }
    }
    return op
}
```