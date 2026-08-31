# 462 ms

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/3280325/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/3280325/)

---

```ruby
def min_groups a
    h, s = Hash.new(0), 0
    a.each do
        h[_1.first] += 1; h[_1.last + 1] -= 1
    end
    h.sort_by(&:first).map! { s += _1.last } .max
end
```