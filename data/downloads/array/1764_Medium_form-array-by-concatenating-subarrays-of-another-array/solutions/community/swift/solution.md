# Swift easy t understand

**Author:** O4ertO
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/5870812/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/5870812/)

---

# Intuition
For each group subarray in groups:
Initialize found to false.
Loop through the nums array, starting at numsIndex.
If we find an element that matches the first element of group and the length of the remaining part of nums is long enough to contain group:
Check if the nums subarray matches group.
If it does, update numsIndex to the position after the found subarray and set found to true.
If we don't find the subarray, return false.


# Code
```swift []
class Solution {
    func canChoose(_ groups: [[Int]], _ nums: [Int]) -> Bool {
        var numsIndex = 0

        for group in groups {
            var found = false
            for i in numsIndex..<nums.count {
                if nums[i] == group[0] && nums.count - i >= group.count {
                    var j = 0
                    while j < group.count && nums[i + j] == group[j] {
                        j += 1
                    }
                    if j == group.count {
                        numsIndex = i + group.count
                        found = true
                        break
                    }
                }
            }
            if !found {
                return false
            }
        }
        return true
    }
}
```