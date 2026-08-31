# ✅ [Swift Solution] Convert an Array Into a 2D Array With Conditions

**Author:** ziterz
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4493153/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4493153/)

---

# Code
```swift
class Solution {
    func findMatrix(_ nums: [Int]) -> [[Int]] {
        var dict = [Int: Int]()
        var result = [[Int]]()
        
        for num in nums {
            let current = dict[num, default: .zero]
            if result.count == current {
                result.append([])
            }
            result[current].append(num)
            dict[num] = current + 1
        }
        return result
    }
}
```