# .gsub

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/3417862/](https://leetcode.com/problems/minimum-suffix-flips/solutions/3417862/)

---

```ruby
def min_flips t
    t.gsub(/0+|1+/).count.pred + t[0].to_i
end
```