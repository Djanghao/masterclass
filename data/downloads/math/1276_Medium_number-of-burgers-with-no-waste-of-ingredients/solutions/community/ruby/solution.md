# 1-liner

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/3930851/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/3930851/)

---

```ruby
def num_of_burgers t, c
    t.even? && (c..c * 2) === (t /= 2) ? [j = t - c, c - j] : []
end
```