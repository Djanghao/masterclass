# Newbies come here -> C#

**Author:** midhun_das
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/4928752/](https://leetcode.com/problems/delete-and-earn/solutions/4928752/)

---

# Intuition
I hope you will gain intuition by examining this code yourself.

# Approach
Dynamic programming

# Complexity
- Time complexity: O(n log n)

- Space complexity:  O(n)

# Code
```
public class Solution {
    public int DeleteAndEarn(int[] nums) {
        Dictionary<int, int> count = new Dictionary<int, int>();
        Array.Sort(nums);

        foreach (int num in nums)
        {
            count[num]  = 1 + (count.ContainsKey(num) ? count[num] : 0);
        }

        int[] numsArr = count.Keys.ToArray();
        int[] dp = new int[numsArr.Length];

        for (int i = 0; i < numsArr.Length; i++)
        {
            if (i != 0 && numsArr[i] != numsArr[i - 1] + 1)
            {
                dp[i] = dp[i - 1] + numsArr[i] * count[numsArr[i]];
            }
            else if (i != 0)
            {
                if (i - 1 > 0)
                {
                    dp[i] = Math.Max(dp[i - 1], dp[i - 2] + numsArr[i] * count[numsArr[i]]);
                }
                else
                {
                    dp[i] = Math.Max(dp[i - 1], numsArr[i] * count[numsArr[i]]);
                }
            }
            else
            {
                dp[i] = numsArr[i] * count[numsArr[i]];
            }
        }

        return dp[numsArr.Length - 1];
    }
}
```