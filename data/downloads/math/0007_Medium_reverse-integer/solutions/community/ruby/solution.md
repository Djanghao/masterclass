# Small and fast Ruby solution < 97.37% of Memory Usage

**Author:** serjpetrenko
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/530691/](https://leetcode.com/problems/reverse-integer/solutions/530691/)

---

First of all, we check if the passed integer is negative, if it's true we multiply it's to -1 to make it again negative after conversion. If the number positive we make the simple conversion to `String` `to_s` then `reverse` it and again convert it to `Integer` `to_i`. The final step is to make sure that our final result's `bit_length` is less than 32.

```ruby
# @param {Integer} x
# @return {Integer}
def reverse(x)
    if x.negative?
        x = (x.to_s.reverse.to_i * -1)
    else
        x = x.to_s.reverse.to_i
    end

    x.bit_length > 31 ? 0 : x
end
```

```
Runtime: 28 ms, faster than 97.37% of Ruby online submissions for Reverse Integer.
Memory Usage: 9.2 MB, less than 100.00% of Ruby online submissions for Reverse Integer.
```