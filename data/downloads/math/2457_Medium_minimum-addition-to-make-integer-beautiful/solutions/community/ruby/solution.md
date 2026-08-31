# Ruby solution, faster than 100%

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2765942/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2765942/)

---

```
# @param {Integer} n
# @param {Integer} target
# @return {Integer}
def make_integer_beautiful(n, target)
  return 0 if n.digits.sum <= target

  nn = n
  k = 0
  while (nn + 1).digits.sum > target
    nn /= 10
    k += 1
  end
  (nn + 1) * 10 ** k - n
end
```