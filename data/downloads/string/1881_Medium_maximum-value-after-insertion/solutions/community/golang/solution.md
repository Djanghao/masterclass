# Go simple O(n)

**Author:** hotdog132
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/1239924/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/1239924/)

---

```
func maxValue(n string, x int) string {
    if n[0] == '-' {
        for i := 1; i < len(n); i++ {
            iv, _ := strconv.Atoi(string(n[i]))
            if x < iv {
                return "-" + n[1:i] + strconv.Itoa(x) + n[i:]
            }
        }
    } else {
        for i := 0; i < len(n); i++ {
            iv, _ := strconv.Atoi(string(n[i]))
            if x > iv {
                return n[:i] + strconv.Itoa(x) + n[i:]
            }
        }
    }
    
    return n + strconv.Itoa(x)
}
```