# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3306159/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3306159/)

---



# Code
```
class Solution {
    func maxScore(_ nums: [Int]) -> Int {
        let sorted = nums.sorted(by: >)
        var ans = 0
        var sum = 0
        
        for i in 0..<sorted.count{
            sum += sorted[i]
            if sum > 0{
                ans += 1
            }
        }
        
        return ans
    }
}

```