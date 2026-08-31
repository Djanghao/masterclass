# 312 ms

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/3351531/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/3351531/)

---

```ruby
def number_of_ways s
    ro = s.size - (rz = s.count(?0))
    return 0 if ro.zero? || rz.zero?
    lo, lz, c = 0, 0, 0
    s.each_byte do
        c += _1 == 48 ?
            (lz += 1; rz -= 1; lo * ro) :
            (lo += 1; ro -= 1; lz * rz)
    end
    c
end
```