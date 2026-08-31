# ✅ One-liner, 0 ms Beats 100%

**Author:** swifterswifty
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/4156540/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/4156540/)

---

# Code
```
func areNumbersAscending(_ s: String) -> Bool {
    s.split(separator: " ")
        .compactMap { Int($0) }
        .reduce((true, Int.min)) { ($0.0 && $0.1 < $1, $1) }.0
}
```