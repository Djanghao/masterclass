# Stack - beats 66%

**Author:** gleete
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/5744419/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/5744419/)

---

# Intuition
Monotonic stack

# Code
```swift []
class Solution {
    func validSubarrays(_ nums: [Int]) -> Int {
        var s = [Int]()
        var win = 0


        for i in 0..<nums.count {
            while !s.isEmpty && nums[i] < s.last! {
                s.removeLast()
            }
            s.append(nums[i])
            win += s.count
        }

        
        return win
    }
}
```