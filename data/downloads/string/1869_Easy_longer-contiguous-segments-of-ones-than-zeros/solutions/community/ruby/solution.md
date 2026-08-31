# Oneline solution (100%, 100% beats)

**Author:** ahrechushkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/2938163/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/2938163/)

---

```
# @param {String} s
# @return {Boolean}
def check_zero_ones(s)
  s.split("0").max&.length.to_i > s.split("1").max&.length.to_i
end
```