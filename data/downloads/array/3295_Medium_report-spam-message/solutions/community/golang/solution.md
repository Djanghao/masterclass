# easy  solution

**Author:** zarifjorayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5955145/](https://leetcode.com/problems/report-spam-message/solutions/5955145/)

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
func reportSpam(message []string, bannedWords []string) bool {
    bannedSet := make(map[string]struct{})
    for _, word := range bannedWords {
        bannedSet[word] = struct{}{}
    }

    count := 0
    for _, word := range message {
        if _, found := bannedSet[word]; found {
            count++
        }
        if count >= 2 {
            return true
        }
    }
    return false
}
```