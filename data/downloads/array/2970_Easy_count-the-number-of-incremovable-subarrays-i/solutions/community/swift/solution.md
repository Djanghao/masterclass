# Swift | O(n) solution

**Author:** VladimirTheLeet
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4448475/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4448475/)

---

# Approach
When we delete subarrays, the remains should all be in increasing order.
There are 3 possiblities to remove a subarray:
- Remove from the begin of nums
- Remove from the end of nums
- Remove from the middle

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
class Solution {
    func incremovableSubarrayCount(_ nums: [Int]) -> Int
    {
        let n = nums.count
        if n == 1 { return 1 }
        if n == 2 { return 3 }

        var ans = 1 // removing all nums is 1 solution

        // left edge increasing, remove the tail
        var left = 0
        while left < n-1 && nums[left] < nums[left+1] { left += 1 }
        ans += left + 1
        
        // right edge increasing, remove the head
        var right = n-1
        while right > 0 && nums[right-1] < nums[right] { right -= 1 }
        ans += n - right
            
        // if all nums are in increasing order, any subarray will do
        if left >= right { return n*(n+1)/2 }

        // subarrays in the middle
        left = 0
        while right < n
        {
            while nums[left] < nums[right]
            {
                ans += n - right
                if nums[left] >= nums[left+1] { return ans }
                left += 1
            }
            right += 1           
        }        
        return ans
    }
}
```