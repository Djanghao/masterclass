# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/3393074/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/3393074/)

---

```
class Solution {
    func longestContinuousSubstring(_ s: String) -> Int {
        
        func i(_ c: Character) -> Int {
            Int(c.asciiValue! - Character("a").asciiValue!)
        }

        var cur = 0
        var res = 0
        var prv = Character("z")

        for c in s {
            if i(c) - i(prv) == 1 {
                cur += 1
            }
            else {
                res = max(res, cur)
                cur = 1
            }
            prv = c
        }

        return max(res, cur)
    }
}
```