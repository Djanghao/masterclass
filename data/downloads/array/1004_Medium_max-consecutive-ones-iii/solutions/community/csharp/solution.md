# C#, beats  96.71% runtime and 93.41% memory

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/5669443/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/5669443/)

---

# Intuition
To find the longest segment of 1's with at most k flips, use a sliding window to expand and shrink dynamically. Keep track of the number of 0's in the window and adjust the window size to ensure it contains at most k 0's. This efficiently gives you the longest segment possible.
# Approach
This approach efficiently finds the longest segment of 1's, flipping at most k 0's, with a time complexity of O(n).
# Complexity
- Time complexity:
Time Complexity: O(n) \u2013 The array is traversed once, making it linear time.

- Space complexity:
O(1) \u2013 Only a few integer variables are used, so the space complexity is constant.

# Code
```csharp []
public class Solution {
    public int LongestOnes(int[] nums, int k) {
        int left = 0, right = 0;
        int maxOnes = 0;
        int zeroCount = 0;
        
        while (right < nums.Length) {
            if (nums[right] == 0) {
                zeroCount++;
            }
            
            while (zeroCount > k) {
                if (nums[left] == 0) {
                    zeroCount--;
                }
                left++;
            }
            
            maxOnes = Math.Max(maxOnes, right - left + 1);
            right++;
        }
        
        return maxOnes;
    }
}

```