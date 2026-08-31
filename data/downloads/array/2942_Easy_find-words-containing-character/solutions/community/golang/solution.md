# )

**Author:** Elmir14
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/5878278/](https://leetcode.com/problems/find-words-containing-character/solutions/5878278/)

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
func findWordsContaining(words []string, x byte) []int {
    var res []int
    for indx, word := range words  {
        for _ , letter := range word  {
             if string(letter) == string(x) {
                res = append(res,  indx)
                break
             }
        }
    }
    return res
}
```