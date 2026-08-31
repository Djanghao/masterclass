# 207 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/3247353/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/3247353/)

---

```ruby
def circular_permutation n, s
    r = (0...2 ** n).map { _1 ^ (_1 >> 1) }
    r[(i = r.index s)..] + r[...i]
end
```