# 0(1) space

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4379854/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4379854/)

---

```ruby
def find_indices a, id, vd
    min = -(max = -2e9)
    for j in id...a.size
        x = a[i = j - id]
        min, min_i = x, i if x < min
        max, max_i = x, i if x > max
        y = a[j]
        return [min_i, j] if (y - min).abs >= vd
        return [max_i, j] if (y - max).abs >= vd
    end
    [-1, -1]
end
```