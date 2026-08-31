# Sliding window, c#

**Author:** shnitsel666
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/3672009/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/3672009/)

---

# Approach
Sliding window, c#

# Code
```
public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int result = 0;
        int zero = 0;
        int left = 0;
        int k = 1;
        for (int right = 0; right < nums.Length; right++) 
        {
            if (nums[right] == 0)
            {
                zero++; 
            }
            if (zero > k && nums[left++] == 0) 
            {
                zero--;
            }
            result = Math.Max(result, right - left + 1);
        }
        return result;
    }
}
```