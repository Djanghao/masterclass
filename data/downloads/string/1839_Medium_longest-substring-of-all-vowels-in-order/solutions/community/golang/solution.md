# Golang simple solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1191563/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1191563/)

---

```go
func longestBeautifulSubstring(word string) int {
    lbs := 0
    level := 0
    current := 0
    for _, c := range word {
        switch c {
        case 'a':
            if level == 1 {
                current++
            } else {
                level = 1
                current = 1
            }
        case 'e':
            if level == 2 {
                current++
            } else if level == 1 {
                level = 2
                current++
            } else {
                level = 0
                current = 0
            }
        case 'i':
            if level == 3 {
                current++
            } else if level == 2 {
                level = 3
                current++
            } else {
                level = 0
                current = 0
            }
        case 'o':
            if level == 4 {
                current++
            } else if level == 3 {
                level = 4
                current++
            } else {
                level = 0
                current = 0
            }
        case 'u':
            if level == 5 {
                current++
            } else if level == 4 {
                level = 5
                current++
            } else {
                level = 0
                current = 0
            }
            if current > lbs {
                lbs = current
            }
        }
    }
    return lbs
}
```