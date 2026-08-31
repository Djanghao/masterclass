# Store common items's id and pre calculate.

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/5904961/](https://leetcode.com/problems/get-the-maximum-score/solutions/5904961/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```csharp []
public class Solution {
    public int MaxSum(int[] nums1, int[] nums2) {
        int len1 = nums1.Length, len2 = nums2.Length;
        Dictionary<int, int> dict = new Dictionary<int, int>();
        int mod = (int)Math.Pow(10, 9) + 7;

        long[] sum1 = new long[len1], sum2 = new long[len2];
        if (len1 == 0 && len2 == 0)
            return 0;

        for (int i = 0; i < len1; i++)
        {
            sum1[i] = (i == 0 ? 0 : sum1[i - 1]) + nums1[i];
            dict.Add(nums1[i], i);
        }

        List<(int, int)> commList = new();

        for (int i = 0; i < len2; i++)
        {
            sum2[i] = nums2[i] + (i == 0 ? 0 : sum2[i - 1]);
            if (dict.ContainsKey(nums2[i]))
                commList.Add((dict[nums2[i]], i));
        }

        if (len1 == 0 || len2 == 0)
            return len1 == 0 ? (int)(sum2[len2 - 1] % mod) : (int)(sum1[len1 - 1] % mod);

        if (commList.Count == 0)
            return Math.Max((int)(sum1[len1 - 1] % mod), (int)(sum2[len2 - 1] % mod));

        long res = 0, pre1 = 0, pre2 = 0;
        for (int i = 0; i < commList.Count; i++)
        {
            int idx1 = commList[i].Item1, idx2 = commList[i].Item2;
            long diff1 = sum1[idx1] - pre1, diff2 = sum2[idx2] - pre2;
            res += Math.Max(diff1, diff2);
            pre1 = sum1[idx1];
            pre2 = sum2[idx2];
            if (i == commList.Count - 1)
            {
                diff1 = sum1[len1 - 1] - pre1;
                diff2 = sum2[len2 - 1] - pre2;

                res += (Math.Max(diff1, diff2) );
            }

        }

        return (int)(res%mod);
    }
}
```