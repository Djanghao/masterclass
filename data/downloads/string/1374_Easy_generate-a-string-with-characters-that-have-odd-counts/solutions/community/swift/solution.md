# ✅ Oneliner, 8 ms Beats 100%

**Author:** swifterswifty
**Votes:** 1
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/3126476/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/3126476/)

---

# Code
```
func generateTheString(_ n: Int) -> String {
    n % 2 == 1 ? .init(repeating: "a", count: n) : "b" + .init(repeating: "a", count: n-1)
}
```