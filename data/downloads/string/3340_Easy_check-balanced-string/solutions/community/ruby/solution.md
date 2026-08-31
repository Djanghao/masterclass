# Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6092790/](https://leetcode.com/problems/check-balanced-string/solutions/6092790/)

---

```ruby []
# @param {String} num
# @return {Boolean}
def is_balanced(num)
  num.chars.zip([-1, 1].cycle).sum { _1.to_i * _2 }.zero?  
end
```