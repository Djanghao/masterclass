# [Swift] O(n) Solution

**Author:** NicolasCombe5555
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/1954944/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/1954944/)

---

```
final class Solution {
    // O(n) time | O(1) space
    func findClosestNumber(_ nums: [Int]) -> Int {
        var closest = (0, Int.max) // (actualNumber, difference)
        
        for num in nums {
            let abs = abs(num)
        
            if abs < closest.1 {
                closest = (num, abs)
            } else if abs == closest.1 {
                closest = (max(num, closest.0), abs)
            }
        }
        
        return closest.0
    }
}
```