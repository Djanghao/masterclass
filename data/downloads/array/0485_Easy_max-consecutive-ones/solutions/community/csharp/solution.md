# c# Beats 84.4% easy solution

**Author:** abettertomorrow
**Votes:** 4
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/2856630/](https://leetcode.com/problems/max-consecutive-ones/solutions/2856630/)

---

```
public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int res = 0;
            int temp = 0;

            for(int i =0; i< nums.Length; i++)
            {
                if (nums[i] == 0)
                {
                    res = Math.Max(res, temp);
                    temp = 0;
                }
                else temp++;
            }

            return Math.Max(res, temp);
    }
}
```