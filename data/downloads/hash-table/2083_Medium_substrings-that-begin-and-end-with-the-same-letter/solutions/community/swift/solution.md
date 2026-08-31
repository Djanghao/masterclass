# Using Binomial Coefficient formula

**Author:** amt93
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5308323/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5308323/)

---


# Code
```
class Solution {
    func numberOfSubstrings(_ s: String) -> Int {
        var counts = [Character: Int]()
        for char in s {
            counts[char, default: 0] += 1
        }

        return counts.values.reduce(0) { $0 + (($1 * ($1 + 1 ) / 2))}
    }
}
```