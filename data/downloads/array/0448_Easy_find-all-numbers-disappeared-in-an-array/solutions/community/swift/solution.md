# Elegant swift solution

**Author:** ValeriiVasin
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/482313/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/482313/)

---

It is not optimal and using extra memory, but fun :)

```swift
class Solution {
    func findDisappearedNumbers(_ nums: [Int]) -> [Int] {
        if nums.isEmpty {
            return nums
        }
        
        return Array(
            Set(1...nums.count).subtracting(nums)
        )
    }
}
```