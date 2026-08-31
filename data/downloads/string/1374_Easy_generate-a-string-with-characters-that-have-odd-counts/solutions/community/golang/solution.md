# Go | Time: O(n) / 0 ms / 100% | Space: O(1) / 2.2 MB / 100%

**Author:** aristorinjuang
**Votes:** 2
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1548114/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1548114/)

---

```
func generateTheString(n int) string {
    return "b" + strings.Repeat(string('a' + n % 2), n - 1)
}
```