# Go 0ms O(1) solution

**Author:** tjucoder
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/499955/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/499955/)

---

```go
func findLUSlength(a string, b string) int {
    if a == b {
        return -1
    }
    if len(a) > len(b) {
        return len(a)
    }
    return len(b)
}
```