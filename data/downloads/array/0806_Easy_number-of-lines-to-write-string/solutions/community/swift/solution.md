# ✅ Easy and understandable solution for beginners

**Author:** Alexandr_Novikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5287632/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5287632/)

---


# Code
```
class Solution {
    func numberOfLines(_ widths: [Int], _ s: String) -> [Int] {
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let dict = Dictionary(uniqueKeysWithValues: zip(alphabet, widths))

        var lines = 0
        var currentWidth = 0

        for char in s{
            currentWidth += dict[String(char)]!
            if currentWidth > 100{
                currentWidth = dict[String(char)]!
                lines += 1
            } else {
                continue
            }
        }
        return ([lines+1, currentWidth])
    }
}
```