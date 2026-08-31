# 99 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/elimination-game/solutions/3236878/](https://leetcode.com/problems/elimination-game/solutions/3236878/)

---

```ruby
def last_remaining n
    t, l, r, d = :l, 1, n, 1
    while n > 1
        if t == :l
            t = :r
            l += d
            r -= d if n.odd?
        else
            t = :l
            r -= d
            l += d if n.odd?
        end
        d *= 2
        n /= 2
    end
    l
end
```