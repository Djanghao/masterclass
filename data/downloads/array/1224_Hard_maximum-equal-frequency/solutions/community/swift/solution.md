# Swift | 2 hash tables 100% Performance

**Author:** danilaferents
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/3494301/](https://leetcode.com/problems/maximum-equal-frequency/solutions/3494301/)

---



# Code
```
class Solution {
    func maxEqualFreq(_ nums: [Int]) -> Int {
        
        var counts = [Int: Int]()
        var frequencies = [Int: Int]()
        var res = 0
        
        for i in 0 ..< nums.count {
            
            counts[nums[i], default: 0] += 1
            let currentFreq = counts[nums[i]]!
            
            frequencies[currentFreq, default: 0] += 1
            
            let result = frequencies[currentFreq]! * currentFreq
            
            if result == i + 1 && i != nums.count - 1 {
                res = max(res, i + 2)
            } else if result == i {
                res = max(res, i + 1)
            }
        }
        
        return res
    }
}
```