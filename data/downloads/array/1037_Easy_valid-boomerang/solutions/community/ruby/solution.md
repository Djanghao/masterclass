# Ruby - Faster than 100%, pure math

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/2312296/](https://leetcode.com/problems/valid-boomerang/solutions/2312296/)

---

```
# @param {Integer[][]} points
# @return {Boolean}
def is_boomerang(points)
  p1, p2, p3 = points
  (p1[0] - p2[0]) * (p1[1] - p3[1]) != (p1[1] - p2[1]) * (p1[0] - p3[0])
end
