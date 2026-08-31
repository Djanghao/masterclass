# Concise O(N) C# solution with min array and comments.

**Author:** Rashair
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4981106/](https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4981106/)

---

# Code
```
public class Solution {
  public int MaxSubarrayLength(int[] nums) {
    int n = nums.Length;

    var rightMin = new int[n];
    rightMin[n - 1] = nums[n - 1];
    for (int i = n - 2; i >= 0; --i) {
      rightMin[i] = Math.Min(nums[i], rightMin[i + 1]);
    }  
    
    var maxLength = 0;
    var right = 0;
    for (int left = 0; left < n && right < n; ++left) {
      // Skip while we get to a point where nums[left] <= nums[right],
      //  so it's not a semi-decreasing sub-array.
      // rightMin is in increasing order and each min ends at it's actual index, 
      //  so we'll always find the farthest index satysfying the requirements. 
      while (right < n && nums[left] > rightMin[right]) {
        ++right;
      }

      // Can't do better than that in next loop, because left increases.
      // We'll either increase right or this is the best result.
      // We don't have to care about right being < left,
      //  because it won't count towards valid result (negative length)
      maxLength = Math.Max(maxLength, right - left);
    }
    
    return maxLength;
  }
}

```