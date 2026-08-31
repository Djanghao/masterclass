# Go O(n) time O(1) memory one-liner | 0ms | 6.6MB

**Author:** vashik
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/1288630/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/1288630/)

---

```
func largestOddNumber(num string) string {
    return strings.TrimRight(num, "02468")
}
```