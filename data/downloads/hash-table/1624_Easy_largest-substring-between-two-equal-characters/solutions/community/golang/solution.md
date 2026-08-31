# Go one pass map 0ms 2MB

**Author:** vashik
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/900399/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/900399/)

---

```
func maxLengthBetweenEqualCharacters(s string) int {
    seen := make(map[rune]int)
    maxlen := -1
    
    for i,r := range s {
        if j,ok := seen[r]; ok {
            d := i - j - 1
            if d > maxlen {
                maxlen = d
            }
        } else {
            seen[r] = i
        }
    }
    return maxlen    
}
```