# Kadane's algorithm

**Author:** phumney89
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/4210597/](https://leetcode.com/problems/maximum-alternating-subarray-sum/solutions/4210597/)

---


# Code
```
public class Solution {
    public long MaximumAlternatingSubarraySum(int[] nums) {
        long lastMinus = Int32.MinValue;
        long lastPlus = Int32.MinValue;
        long ans = Int32.MinValue;

        foreach(int num in nums){
            long currPlus = Math.Max(lastMinus+num, num);
            lastMinus = lastPlus-num;
            lastPlus = currPlus;
            ans = Math.Max(ans, Math.Max(lastMinus, lastPlus));
        }

        return ans;
    }
}
```