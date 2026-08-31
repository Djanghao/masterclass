# BFS

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/3295763/](https://leetcode.com/problems/water-and-jug-problem/solutions/3295763/)

---

```ruby
def can_measure_water a, b, t
    return false if a + b < t
    x, y, v = nil, nil, (q = [0]).to_set
    c = Proc.new do
        unless v === (xy = (x << 20) | y)
            x == t || y == t || x + y == t ?
                (return true) :
                (v << xy; q << xy)
        end
    end
    q.each do
        l, r = _1 >> 20, _1 & (1 << 20) - 1
        x, y = 0, r; c.call
        x, y = l, 0; c.call
        x, y = a, r; c.call
        x, y = l, b; c.call
        x, y = l, r
        x <= (dy = b - y) ?
            (x, y = 0, y + x) :
            (x, y = x - dy, b); c.call
        x, y = l, r
        (dx = a - x) >= y ?
            (x, y = x + y, 0) :
            (x, y = a, y - dx); c.call
    end
    false
end
```