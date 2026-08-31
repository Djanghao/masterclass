# Swift Simple HashMap

**Author:** sairamkotha
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/746202/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/746202/)

---

```
 final class Solution {
    func minSteps(_ s: String, _ t: String) -> Int {
        var has = [Character: Int]()
        for char in s {
            has[char, default: 0] += 1
        }
        for char in t {
            has[char, default: 0] -= 1
        }
        let val =  has.values.filter { $0 <= 0 }.reduce(0, { (resu, val) in
            return resu + val
        })
        return abs(val)
    }
 }
```