# 🚀 Swift | Time: O(n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4505835/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4505835/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minOperations(_ nums: [Int]) -> Int {
        var res = 0
        if nums.count < 2 { return -1 }
        var numsAndFrequency: [Int: Int] = [:]
        
        for i in 0 ..< nums.count {
            let num = nums[i]
            if let frequency = numsAndFrequency[num] {
                numsAndFrequency[num] = frequency + 1
            } else {
                numsAndFrequency[num] = 1
            }
        }
        
        for key in numsAndFrequency.keys {
            guard let frequency = numsAndFrequency[key] else { continue }
            if frequency == 1 {
                return -1
            } else if frequency == 2 {
                res += 1
            } else if frequency == 3 {
                res += 1
            } else if frequency == 4 {
                res += 2
            } else if frequency % 3 == 0 {
                res += frequency / 3
            } else {
                res += (frequency / 3 + 1)
            }
        }
        
        return res
    }
}
```