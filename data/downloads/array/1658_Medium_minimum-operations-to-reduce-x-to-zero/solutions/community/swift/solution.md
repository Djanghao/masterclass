# Using a maximum window approach to find max window with total - x sum

**Author:** parthv21
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/4285782/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/4285782/)

---

# Code
```
class Solution {
    func minOperations(_ nums: [Int], _ x: Int) -> Int {
       

        let total = nums.reduce(0, +)

        if total < x { return -1 }
        if total == x { return nums.count }

        let target = total - x
        var left = 0, right = 0

        var windowSum = 0
        var ans = -1

        // We try to find the maximum window with sum target
        // as the other numbers will then add to x. 
        // We grow window till invalid (sum > target), then shrink it 
        // this is valid as no other left and right after current right 
        // can have sum 
        while right < nums.count {
            windowSum += nums[right]
            right += 1
            while windowSum > target {
                windowSum -= nums[left]   
                left += 1
            }

            if windowSum == target {
                let nOut = nums.count - (right - left)
                if ans == -1 { ans = nOut }  // at -1 no ans set so just set it 
                else { ans = min(nOut, ans) } // we want minimum nums left out of window
            }
        }

        return ans
    }
}
```