# Ruby || O(1)/O(1)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4263269/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4263269/)

---


# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```ruby
class Numeric
    def max(v) = (self < v ? v : self)
end

def is_reachable_at_time(sx, sy, fx, fy, t)
    d = (sy - fy).abs.max((sx - fx).abs)
    d <= t && !(t == 1 && d.zero?)
end
```