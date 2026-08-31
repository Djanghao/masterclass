# 207 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/3246535/](https://leetcode.com/problems/corporate-flight-bookings/solutions/3246535/)

---

```ruby
def corp_flight_bookings b, n
    r, s = [0] * n, 0
    b.each do | (f, t, x) |
       r[f - 1] += x
       r[t] -= x if t < n
    end
    r.map! { s += _1 }
end
```