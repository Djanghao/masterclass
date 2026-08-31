# Math / Non-Math

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/3279551/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/3279551/)

---

```ruby
def maximum_score a, b, c
    a, b, c = *[a, b, c].sort!
    a + b < c ? a + b : (a + b + c) / 2
end
```
```ruby
def maximum_score a, b, c
    r, a = 0, [a, b, c].sort!
    until a.first.zero?
        a[1] -= 1
        a[2] -= 1
        r += 1
        a.sort!
    end
    r + a[1]
end
```