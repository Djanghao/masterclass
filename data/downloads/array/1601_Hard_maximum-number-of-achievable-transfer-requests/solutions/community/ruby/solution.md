# 741 ms

**Author:** 0x81
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3398630/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3398630/)

---

```ruby
def maximum_requests n, r
    b = [nil] * n
    for c in (0..r.size).reverse_each
        r.combination(c).each do | v |
            b.fill 0
            v.each do | i, j |
                b[i] -= 1
                b[j] += 1
            end
            return c if b.all?(&:zero?)
        end
    end
end
```