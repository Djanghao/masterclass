# C# Solution

**Author:** panaeimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/3729300/](https://leetcode.com/problems/largest-subarray-length-k/solutions/3729300/)

---

# Code
```
public class Solution {
    public int[] LargestSubarray(int[] nums, int k) {
        int[] ans = new int[k];
        int maxIndex = 0;
        for(int i = 0; i < nums.Length - k + 1; i++) {
             if(i == 0 || nums[i] > nums[maxIndex]) maxIndex = i;
        }

        Array.Copy(nums, maxIndex, ans, 0, k);

        return ans;
    }

    public int[] LargestSubarray0(int[] nums, int k) {
        int[] ans = new int[k];
        for(int i = 0; i < nums.Length - k + 1; i++) {
            if(i == 0 || nums[i] > ans[0]) Array.Copy(nums, i, ans, 0, k); 
        }

        return ans;
    }
}
```