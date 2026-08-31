# Swift solution easy to understand ✅

**Author:** aldo_vernando
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/5238629/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/5238629/)

---

# Please help to upvote \uD83D\uDCAF

# Code
```
class Solution {
    func findKOr(_ nums: [Int], _ k: Int) -> Int {
        var result = 0
        
        var bitshift = 0
        while true {
            var countBits = 0
            var isChecking = false

            for (index, num) in nums.enumerated() {
                let shifted = num >> bitshift
                if shifted & 1 == 1 {
                    countBits += 1
                }
                if shifted > 0 {
                    isChecking = true
                } 
                
                if index == nums.count - 1 {
                    if !isChecking { return result }

                    if countBits >= k {
                        print(result | (1 << bitshift))
                        result = result | (1 << bitshift)
                    }
                    bitshift += 1
                }
            }
        }
        return result
    }
}
```