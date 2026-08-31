# Integer#popcount

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/3391024/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/3391024/)

---

```ruby
class Integer
    def popcount
        r, x = 0, self
        while x > 0
            r += x & 1
            x >>= 1
        end
        r
    end
end

def min_operations a
    (m = a.max) < 1 ? 0 : m.bit_length.pred + a.sum(&:popcount)
end
```