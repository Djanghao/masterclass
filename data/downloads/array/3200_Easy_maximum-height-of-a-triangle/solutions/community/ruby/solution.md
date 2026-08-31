# Ruby "one-liner", beats 100%/100%

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5393346/](https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5393346/)

---

# Code
```
# @param {Integer} red
# @param {Integer} blue
# @return {Integer}
def max_height_of_triangle(red, blue, lev = nil)
  lev ? red < lev ? 0 : max_height_of_triangle(blue, red - lev, lev + 1) + 1 : [max_height_of_triangle(red, blue, 1), max_height_of_triangle(blue, red, 1)].max
end
```