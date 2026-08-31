# Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3308845/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3308845/)

---

```
# @param {Integer} n
# @return {Integer}
def min_operations(n)
  n < 2 ? n : n[0] + min_operations((n + n[1])[1..])
end
```

Could have made it faster with memoization, but who cares - it passes the tests.