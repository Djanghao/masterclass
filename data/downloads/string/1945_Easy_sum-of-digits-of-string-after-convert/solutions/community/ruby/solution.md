# Ruby three lines 66ms

**Author:** alanparmenter
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/3954717/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/3954717/)

---

```
def get_lucky(s, k)
  s = s.chars.map{|c| c.ord - 96}.join.to_i
  k.times{s = s.digits.sum}
  s
  end
```