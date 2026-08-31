# Don't cry: use trie

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/4183600/](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/solutions/4183600/)

---

```ruby
def equal_digit_frequency s
    r, t, s = 0, {}, s.bytes.map! { _1 - 48 }
    i, z = -1, s.size
    while (i += 1) < z
        c, n, m, j, u = [0] * 10, t, 0, i, 0
        while j < z
            x = c[sj = s[j]] += 1
            m = x if x > m
            u += 1 if x == 1
            n = n[sj] ||= {}
            next if u * m != (j += 1) - i
            r += n[10] = 1 unless n[10]
        end
    end
    r
end
```