# Golang Solution

**Author:** Azizjon003
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/3401681/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/3401681/)

---


# Complexity
- Time complexity:54%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:85%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func numOfStrings(patterns []string, word string) int {
    count := 0
    for _, s := range patterns {
        if strings.Contains(word, s) {
            count++
        }
    }
    return count
}

```