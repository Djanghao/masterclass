# ✅ C# | easy and readable solution

**Author:** Thanat05
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4915464/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4915464/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```
public class Solution {
    public int IncremovableSubarrayCount(int[] nums) {
        int ans = 0;
        for (int i = 0; i < nums.Length; i++)
            for (int j = i; j < nums.Length; j++)
                if (Helper(nums, i, j))
                    ans++;
        return ans;
    }

    bool Helper (int[] nums, int i, int j)
    {
        for (int k = 0; k < i - 1; k++)
            if (nums[k] >= nums[k + 1])
                return false;
        if (i > 0 && j < nums.Length - 1 && nums[i - 1] >= nums[j + 1])
            return false;
        for (int k = j + 1; k < nums.Length - 1; k++)
            if (nums[k] >= nums[k + 1])
                return false;
        return true;
    }
}
```

If you like it don't forget to **upvote!**