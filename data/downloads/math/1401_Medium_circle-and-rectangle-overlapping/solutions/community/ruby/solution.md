# O(radius)

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/3439433/](https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/3439433/)

---

```ruby
def check_overlap r, x, y, x1, y1, x2, y2
    r2, rw, rh = r * r, x1..x2, y1..y2
    for h in 0..r
        w = Integer.sqrt r2 - h * h
        cw = x - w..x + w
        a, b = *(rw.begin < cw.begin ? [rw, cw] : [cw, rw])
        if b.begin <= a.end && (rh === y + h || rh === y - h)
            return true
        end
    end
    false
end
```