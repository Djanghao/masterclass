# Ruby: simple two cursors

**Author:** andrjuha01
**Votes:** 7
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/2327604/](https://leetcode.com/problems/is-subsequence/solutions/2327604/)

---

```
# @param {String} s
# @param {String} t
# @return {Boolean}
def is_subsequence(s, t)
    i = 0
    n = 0
    
    while i < s.length && n < t.length
        if s[i] == t[n]
            i += 1
        end
        n += 1
    end
    i == s.length
end
```