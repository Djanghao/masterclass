# 100% 1ms Java Solution

**Author:** rentx
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/1232997/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/1232997/)

---

Using num as the latest value to compare with next nums[i], instead of increasing nums[i] and using it to compare with nums[i+1]. Changing the value of nums[i] costs more time than changing the value of the variable num. 

```
class Solution {
    public int minOperations(int[] nums) {
        if (nums.length <= 1) {
            return 0;
        }

        int count = 0;
        int num = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (num == nums[i]) {
                count++;
                num++;
            } else if (num > nums[i]) {
                num++;
                count += num - nums[i];
            } else {
                num = nums[i];
            }
        }
        
        return count;
    }
}
```