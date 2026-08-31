# Java Solution

**Author:** solved
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6175736/](https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6175736/)

---

```
class Solution {
    public int countSubarrays(int[] nums) {
        int count = 0;
        for (int i = 0; i < nums.length - 2; i++) {
            int num1 = nums[i];
            int num2 = nums[i + 1];
            int num3 = nums[i + 2];
            
            if ((double) (num1 + num3) == (double) num2 / 2) {
                count++;
            }
        }
        return count;
    }
}
```