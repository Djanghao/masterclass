# Go O(n) time O(1) space

**Author:** agilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3813701/](https://leetcode.com/problems/split-strings-by-separator/solutions/3813701/)

---

```
func splitWordsBySeparator(words []string, separator byte) []string {
    result := make([]string, 0)
    
    for k := 0; k < len(words); k++ {
        for i, j := 0, 0; i <= len(words[k]); i++ {
            if i == len(words[k]) || words[k][i] == separator {
                if i - j > 0 {
                    result = append(result, words[k][j:i])
                }
                j = i + 1
            }
        }
    }

    return result
}
```