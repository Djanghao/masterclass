# Swift solution

**Author:** iwalterwhite
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/603357/](https://leetcode.com/problems/reverse-string-ii/solutions/603357/)

---

```
func reverseStr(_ s: String, _ k: Int) -> String {
        var str = Array(s)
        var i = 0
        var skip = false
        while i < str.count {
            guard !skip else {
                skip = false
                i = i + k
                continue
            }
            let end = i + k - 1 < str.count ? i + k - 1 : str.count - 1
            let reversed = str[i...end].reversed()
            for char in reversed {
                str[i] = char
                i += 1
            }
            skip = true
        }
        return String(str)
    }
```