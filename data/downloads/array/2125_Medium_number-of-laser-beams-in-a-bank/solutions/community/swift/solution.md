# 🚀 Swift | Time: O(n) | Space: O(1)

**Author:** alekseiwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4499434/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4499434/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func numberOfBeams(_ bank: [String]) -> Int {
        var res = 0
        var prev = 0
        
        for floor in bank {
            var deviceCount = 0
            
            for char in floor {
                if char == "1" {
                    deviceCount += 1
                }
            }
            
            if deviceCount > 0 {
                res += deviceCount * prev
                prev = deviceCount
            }
        }
        
        return res
    }
}
```