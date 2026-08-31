# Detailed Explanation - Beats 96% Runtime, 85% Space

**Author:** mckamike
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/4703641/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/4703641/)

---

# Intuition
My first thought was that we'd need to track which zero we "dropped" within the sliding window. Then of course we'd need the starting and end pointers of the window.

# Approach
Its fairly simple. 
1. We expand the window rightward (so, increment the `end` pointer)
2. When `end` runs into the first zero, we track that in `indexOfDroppedZero`. We will refer to this later
3. Keep incrementing `end` until you reach the second zero. We can only afford to drop one zero, so lets record the size of the window
4. **Important!** We move the start index to be one index past the zero that's inside the window. We can only have one zero in our window, and we just ran into another zero, so we don't care about the one inside our window anymore! So move the start to be one index past it.

# Complexity
- Time complexity:
O(n), we are looping through the nums array once.

- Space complexity:
O(1) We are only using additional constant time helper variables.

# Code
```
class Solution {
    func longestSubarray(_ nums: [Int]) -> Int {
        var start = 0
        var end = 0
        var maxSize = 0
        
        // if an index has a zero, we need to move nums[start] to the spot after the zero to slide the window.
        var indexOfDroppedZero = -1

        while end < nums.count {
            if nums[end] == 0 {
                if indexOfDroppedZero != -1 {
                    maxSize = max(maxSize, end - start - 1)
                    start = indexOfDroppedZero + 1
                    indexOfDroppedZero = -1
                } else {
                    // record the location of the zero in our window
                    indexOfDroppedZero = end
                    end += 1
                }
            } else {
                end += 1
            }
        }

        return max(maxSize, end - start - 1)
    }
}
```