# 1-liner

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/3264252/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/3264252/)

---

```ruby
def interchangeable_rectangles a
    a.map! { Rational *_1 } .tally
     .sum { (_2 * ((_2 - 1) / 2r)).to_i }
end
```