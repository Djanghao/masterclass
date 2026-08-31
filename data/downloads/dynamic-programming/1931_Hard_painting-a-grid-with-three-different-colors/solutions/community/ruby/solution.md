# A elegant ruby solution

**Author:** safiir
**Votes:** 1
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/3492245/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/3492245/)

---

```ruby
require "matrix"

# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def color_the_grid(m, n)
  mod = 10**9 + 7
  dp = m == 1 ? [[3]] : [[6]] * (2**(m - 2))
  (Matrix[*$matrixs[m - 1]]**(n - 1) * Matrix[*dp]).sum % mod
end

$matrixs = [
  [[2]],
  [[3]],
  [[3, 2], [2, 2]],
  [[3, 2, 1, 2], [2, 2, 1, 2], [1, 1, 2, 1], [2, 2, 1, 2]],
  [
    [3, 2, 2, 1, 0, 1, 2, 2],
    [2, 2, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 1, 0, 1, 2, 2],
    [1, 1, 1, 2, 1, 1, 1, 1],
    [0, 1, 0, 1, 2, 1, 0, 1],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [2, 1, 2, 1, 0, 1, 2, 1],
    [2, 1, 2, 1, 1, 1, 1, 2]
  ]
]
```