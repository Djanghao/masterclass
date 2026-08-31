# Swift Solution - Hashmap + Set, 90% Faster

**Author:** jcobea_iOSDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/2678458/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/2678458/)

---

```
class Solution {
    func checkAlmostEquivalent(_ word1: String, _ word2: String) -> Bool {
        var hash = [Character: Int]()
        word1.forEach { hash[$0, default: 0] += 1 }
        word2.forEach { hash[$0, default: 0] -= 1 }
        
        var values = Set(hash.values)
        var didPass = true
        
        for value in values {
            if value > 3 || value < -3 {
                didPass = false
                break
            }
        }
        
        return didPass
    }
}
```