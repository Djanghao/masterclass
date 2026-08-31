# The inclusion–exclusion principle

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/3630940/](https://leetcode.com/problems/ugly-number-iii/solutions/3630940/)

---

148A (RU): https://codeforces.com/blog/entry/3819
```ruby
def nth_ugly_number n, *d0
    a, b, c = *d0.sort!
    d1 = [a.lcm(b), a.lcm(c), b.lcm(c)]
    d2 = d0.reduce(&:lcm)
    (1..a * n).bsearch do | x |
        r = d0.sum { x / _1 } -
            d1.sum { x / _1 } +
            x / d2
        return x if r == n && d0.any? { x % _1 == 0 }
        r >= n
    end
end
```