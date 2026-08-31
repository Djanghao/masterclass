# Swift 1pass

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/5073674/](https://leetcode.com/problems/longest-alternating-subarray/solutions/5073674/)

---

**One Pass (accepted answer)**
```
class Solution {
    func alternatingSubarray(_ nums: [Int]) -> Int {
        var i = 0, result = -1

        while i < nums.count-1 {
            var j = i
            while j < nums.count-2, 
                  nums[j+1]-nums[j] == 1, 
                  nums[j+2]-nums[j+1] == -1 {
                j += 2
            }
            j += (j<nums.count-1 && nums[j+1]-nums[j]==1) ? 1:0
            result = max(result, j-i+1)
            i = max(i+1, j)
        }
        
        return result > 1 ? result : -1
    }
}
```