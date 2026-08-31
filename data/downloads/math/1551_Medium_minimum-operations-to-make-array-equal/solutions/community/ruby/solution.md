# [Ruby] One-liner

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/1146419/](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/1146419/)

---

```
def min_operations(n)
  n.odd? ? (1 + n/2)*(n/2) : n*n/4
end
```