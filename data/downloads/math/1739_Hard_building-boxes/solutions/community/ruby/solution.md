# O(n ** (1r / 3))

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/building-boxes/solutions/3191494/](https://leetcode.com/problems/building-boxes/solutions/3191494/)

---

```ruby
def minimum_boxes n
    r, s = 0, 1
    n -= r += (s += 1) - 1 while n >= r + s
    s = 1
    (r += 1; s += 1) while (n -= s) >= 0
    r + [n + s, 1].min
end
```