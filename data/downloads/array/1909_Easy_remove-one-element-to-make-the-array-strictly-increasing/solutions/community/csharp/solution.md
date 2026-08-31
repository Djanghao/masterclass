# simple c# solution

**Author:** arianrahman431
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/3926057/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/3926057/)

---


```
public class Solution {
    public bool CanBeIncreasing(int[] nums) {
        int count = 0;

        for (int i = 1; i < nums.Length; i++) {
            if (nums[i - 1] >= nums[i]) {
                count++;
                if (count > 1) {
                    return false;
                }

                if (i > 1 && nums[i - 2] >= nums[i]) {
                    nums[i] = nums[i - 1];
                }
            }
        }

        return true;
    }
}

```