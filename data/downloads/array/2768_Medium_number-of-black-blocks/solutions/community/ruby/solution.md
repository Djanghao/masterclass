# 950 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/3745496/](https://leetcode.com/problems/number-of-black-blocks/solutions/3745496/)

---

```ruby
def count_black_blocks m, n, a
    h, d = Hash.new(0), (d = [-1, 0]).product(d)
    m, n = m.pred, n.pred
    for i, j in a
        for y, x in d
            next if (y += i) < 0 || y == m ||
                    (x += j) < 0 || x == n
            h[(y << 20) | x] += 1
        end
    end
    r = [m * n - h.size] + [0] * 4
    h.each_value.with_object(r) { _2[_1] += 1 }
end
```