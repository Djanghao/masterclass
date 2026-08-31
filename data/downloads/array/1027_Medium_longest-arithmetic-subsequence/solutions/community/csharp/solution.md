# Using possible combination

**Author:** theaion
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/4011234/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/4011234/)

---



# Code
```
public class Solution {
    public int LongestArithSeqLength(int[] nums) {
        
        Dictionary<(int, int), int> d = new Dictionary<(int, int), int>();
        int maxSeqLength = 1;

        for (int i = 0; i<nums.Length; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                int diff = nums[j] - nums[i];
                int previousCount = 1;
                
                if (d.ContainsKey((i, diff)))
                {
                    previousCount = d[(i, diff)];
                }

                d[(j, diff)] = previousCount + 1;
                maxSeqLength = Math.Max(maxSeqLength, d[(j, diff)]);
            }
        }

        return maxSeqLength;
    }
}
```