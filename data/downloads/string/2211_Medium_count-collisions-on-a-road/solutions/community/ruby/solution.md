# 127 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/3276136/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/3276136/)

---

```ruby
def count_collisions s
    s = s.bytes
    s.shift while s.first == 76
    s.pop while s.last == 82
    s.size - s.count(83)
end
```