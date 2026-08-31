# ruby regex oneliner

**Author:** chassot
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/4559219/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/4559219/)

---

# Code
```
def max_value(n, x)
  n.sub /^-?#{n[0] == ?- ? "[1-#{x}]" : "[#{x}-9]"}*/, "\\\\0#{x}"
end
```