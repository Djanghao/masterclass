# 🚀 Swift | Hash Table | Time: O(n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/4608292/](https://leetcode.com/problems/set-mismatch/solutions/4608292/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findErrorNums(_ nums: [Int]) -> [Int] {
        var numAndFrequency: [Int: Int] = [:]
        for i in 0 ..< nums.count {
            let num = nums[i]
            if let frequency = numAndFrequency[num] {
                numAndFrequency[num] = frequency + 1
            } else {
                numAndFrequency[num] = 1
            }
        }
        
        var duplicatedNum = 0
        var missedNum = 0

        for i in 0 ..< nums.count {
            let num = i + 1
            if let frequency = numAndFrequency[num] {
                if frequency > 1 {
                    duplicatedNum = num
                }
            } else {
                missedNum = num
            }
            
            if duplicatedNum > 0, missedNum > 0 {
                break
            }
        }
        
        return [duplicatedNum, missedNum]
    }
}
```