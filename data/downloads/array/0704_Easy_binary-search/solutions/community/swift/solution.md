# Classic Binary Search on Swift

**Author:** blackbirdNG
**Votes:** 8
**Link:** [https://leetcode.com/problems/binary-search/solutions/3051145/](https://leetcode.com/problems/binary-search/solutions/3051145/)

---

# Code
```
class Solution {
    func search(_ nums: [Int], _ target: Int) -> Int {
        var low = 0
        var high = nums.count - 1
        while low <= high {
            let mid = (high + low) / 2
            if nums[mid] == target {
                return mid
            }
            if nums[mid] < target {
                low = mid + 1
            } else if nums[mid] > target {
                high = mid - 1
            }
        }
        return -1
    }
}
```
### Please upvote if the solution was useful!