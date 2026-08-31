# 274 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5054598/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5054598/)

---

```ruby
def number_of_special_chars w
    l, u = 2.times.map { [false] * 26 }
    for c in w.each_byte
        c > 96 ?
            (l[c - 97] = !u[c - 97]) :
            (u[c - 65] = true)
    end
    26.times.count { l[_1] && u[_1] }
end
```