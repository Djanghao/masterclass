# [Ruby] One line

**Author:** mistersky
**Votes:** 5
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/995284/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/995284/)

---

```
def k_closest(points, k)
  points.sort_by{|x, y| x*x + y*y}[0...k]
end
```