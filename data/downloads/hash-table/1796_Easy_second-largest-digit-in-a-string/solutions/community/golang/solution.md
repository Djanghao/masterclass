# Go O(n) with 2 ints memory

**Author:** vashik
**Votes:** 2
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/1124532/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/1124532/)

---

```
func secondHighest(s string) int {
    first := -1
    second := -1
    for _,c := range s {
        if unicode.IsDigit(c) {
            digit := int(c - '0')
            if digit > first {
                first, second = digit, first
            } else if digit > second && digit != first {
                second = digit
            }
        }
    }
    return second
}
```