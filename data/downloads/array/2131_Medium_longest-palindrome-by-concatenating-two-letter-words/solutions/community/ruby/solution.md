# 238 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/3165972/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/3165972/)

---

```ruby
def longest_palindrome a
    r, m, h = 0, 0, a.tally
    h.each do
        if _1 == (k = _1.reverse)
            r += 4 * (_2 / 2)
            m |= _2 & 1
        else
            next unless (v = h[k])&.> 0
            r += 4 * [_2, v].min
            h[_1] = h[k] = 0
        end
    end
    r + m * 2
end
```