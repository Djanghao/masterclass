# C# DP iterative space O(n) | 57ms 100%

**Author:** Legon2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/4857665/](https://leetcode.com/problems/largest-sum-of-averages/solutions/4857665/)

---

# Code
```
public class Solution {
    public double LargestSumOfAverages(int[] nums, int k) 
    {
        var n = nums.Length;

        var prefixSum = new double[n];

        prefixSum[0] = nums[0];

        for(var i=1; i < prefixSum.Length; i++)
            prefixSum[i] = nums[i] + prefixSum[i-1];

        var sdp1 = prefixSum.ToArray();

        for(var i=1; i < prefixSum.Length; i++)
            sdp1[i] = sdp1[i]/(i+1);

        var sdp0 = sdp1;

        for(var s=1; s < k; s++)
        {
            (sdp0, sdp1) = (sdp1, prefixSum.ToArray());

            for(var bound = n - k + s; bound >= s; bound--)
            {
                sdp1[bound] = sdp0[bound-1] + nums[bound];

                var sum = nums[bound];

                for(var i = bound-1; i >= s; i--)
                {
                    sum += nums[i];

                    sdp1[bound] = Math.Max(
                        sdp1[bound], 
                        sdp0[i-1] + sum / (bound - i + 1.0));
                }
            }
        }

        return sdp1[^1];
    }
}
```