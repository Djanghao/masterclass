# One-line solution [Swift]

**Author:** ArtyZenk
**Votes:** 2
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/3779033/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/3779033/)

---


# Code
```
class Solution {
    func percentageLetter(_ s: String, _ letter: Character) -> Int {
        s.filter { $0 == letter }.count * 100 / s.count
    }
}
```