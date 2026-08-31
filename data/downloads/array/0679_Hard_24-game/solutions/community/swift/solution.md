# Swift solution

**Author:** zzhenia
**Votes:** 2
**Link:** [https://leetcode.com/problems/24-game/solutions/519482/](https://leetcode.com/problems/24-game/solutions/519482/)

---

The code below is a simple implementation of the solution provided to the problem with the following stats:

> Runtime: 220 ms, faster than 10.53% of Swift online submissions for 24 Game.
Memory Usage: 21.1 MB, less than 100.00% of Swift online submissions for 24 Game.

I wonder how could I make it faster and what are those 90% of Swift solutions which beat mine.

```
class Solution {
    let precision = 1e-3
    let seeked = 24.0
    
    func judgePoint24(_ nums: [Int]) -> Bool {
        return judgePoint24(nums.map({ Double($0) }))
    }
    
    func judgePoint24(_ nums: [Double]) -> Bool {
        if nums.count == 1 {
            return nums[0] >= seeked - precision && nums[0] <= seeked + precision
        }
        for i in 0..<nums.count {
            for j in 0..<nums.count {
                if i == j {
                    continue
                }
                var nums_ = nums.enumerated().filter({ $0.0 != i && $0.0 != j }).map({ $0.1 })
                let parts = possibleParts(a: nums[i], b: nums[j])
                for p in parts {
                    nums_.append(p)
                    if judgePoint24(nums_) {
                        return true
                    }
                    nums_ = nums_.dropLast()
                }
            }
        }
        return false
    }
    
    private func possibleParts(a: Double, b: Double) -> [Double] {
        var res = [a + b, a - b, a * b]
        if a != 0 {
            res.append(b / a)
        }
        return res
    }
}
```