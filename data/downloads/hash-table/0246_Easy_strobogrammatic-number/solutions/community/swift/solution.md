# Swift 100%

**Author:** aktepe
**Votes:** 3
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/1874842/](https://leetcode.com/problems/strobogrammatic-number/solutions/1874842/)

---

```
class Solution {
    func isStrobogrammatic(_ num: String) -> Bool {
        guard num.count > 1 else {
            return num == "8" || num == "0" || num == "1"
        }
        var map: [Character: Character] = [
            "6": "9",
            "0": "0",
            "1": "1",
            "8": "8",
            "9": "6"
        ]
        
        var left = 0
        var right = num.count-1
        var numArray = Array(num)
        while left <= right {
            if map[numArray[right]] != numArray[left] {
                return false
            } 
            right -= 1
            left += 1
        }
        return true        
    }
}
```