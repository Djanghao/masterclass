# 🚀 Swift | Time: O(n) | Space: O(1)

**Author:** alekseiwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/5399245/](https://leetcode.com/problems/three-consecutive-odds/solutions/5399245/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func threeConsecutiveOdds(_ arr: [Int]) -> Bool {
        var index = 0
        while index < arr.count {
            let num = arr[index]
            
            if num % 2 == 1 {
                let index1 = index + 1
                let index2 = index + 2
                
                if index1 < arr.count,
                    index2 < arr.count,
                    arr[index1] % 2 == 1,
                    arr[index2] % 2 == 1 {
                    return true
                }
            }
            
            index += 1
        }
        
        return false
    }
}
```