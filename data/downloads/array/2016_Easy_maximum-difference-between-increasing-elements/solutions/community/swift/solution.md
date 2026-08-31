# Easy solution without syntax sugar [Swift]

**Author:** ArtyZenk
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/3889270/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/3889270/)

---


# Code
```
class Solution {
    func maximumDifference(_ nums: [Int]) -> Int {
        var result = [Int]()
    
        for i in 0..<nums.count {
            for j in (i + 1)..<nums.count {
                let diff = nums[j] - nums[i]
                if diff > 0 { result.append(diff) }
            }
        }
    
        return result.max() ?? -1
    }
}
```