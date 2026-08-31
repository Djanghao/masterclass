# ✅ [Solution][Swift] Hash Map

**Author:** adanilyak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/4566110/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/4566110/)

---

**TC:** $$O(n)$$
**SC:** $$O(n)$$
```
class Solution {
    func minNumberOfFrogs(_ croakOfFrogs: String) -> Int {
        let croaks = Array(croakOfFrogs)
        let croak: [Character: Int] = ["c": 0, "r": 1, "o": 2, "a": 3, "k": 4]
        var frogs = [0: 0, 1: 0, 2: 0, 3: 0, 4: 0]
        
        for char in croaks {
            let i = croak[char]!
            if frogs[i]! > 0 {
                frogs[i]! -= 1
                frogs[(i + 1) % 5]! += 1
            } else if i == 0 {
                frogs[1]! += 1
            } else {
                return -1
            }
        }

        for i in 1...4 {
            if frogs[i] != 0 {
                return -1
            }
        }

        return frogs[0]!
    }
}
```