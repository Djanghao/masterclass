# Swift 5 - Prefix Sum

**Author:** keshurai1024
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/3569828/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/3569828/)

---

Please upvote if it helped. 

```
class Solution {
    func minStartValue(_ nums: [Int]) -> Int {
        
        var initial = 0
        var total  = 0
        
        for i in 0...nums.count-1 {
            total = total + nums[i]
            initial = min(total, initial)
        }
        
        return abs(initial) + 1
    }
}
```