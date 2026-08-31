# [Ruby] O(1)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-square/solutions/932471/](https://leetcode.com/problems/valid-square/solutions/932471/)

---

```
def valid_square(*points)
  points.uniq.size == 4 &&
    points.map do |p_a|
      points.map do |p_b|
        (p_a[0] - p_b[0])**2 + (p_a[1] - p_b[1])**2
      end
    end.flatten.uniq.count == 3
end
```