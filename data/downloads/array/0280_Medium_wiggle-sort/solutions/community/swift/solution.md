# Swift | Sort + Swap

**Author:** june82629
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/5852696/](https://leetcode.com/problems/wiggle-sort/solutions/5852696/)

---

# Approach
* Sort & swap
# Complexity
- Time complexity: O(n)


# Code
```swift []
class Solution {
    func wiggleSort(_ nums: inout [Int]) {
        nums = nums.sorted()
        let length = nums.count
        for i in 0..<length {
            if i % 2 != 0 && i < length-1 {
                if nums[i] < nums[i+1] {
                    var temp = nums[i+1]
                    nums[i+1] = nums[i]
                    nums[i] = temp
                }
            }
        }
    }
}
```