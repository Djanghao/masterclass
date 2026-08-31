# Easy Solution.

**Author:** neotsu
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/3973443/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/3973443/)

---

# Intuition
related to max sum subarry. need to build an array saving "till current index, what's the max sum of subarray, basically judging by including past is bigger than not? and including this or not?

high[i] = Math.Max(0, high[i-1]+arr[i]);

# Approach
<!-- Describe your approach to solving the problem. -->
if K = 1, then same as sum of max sum subarray. not going to discuss this..

since this is a repeating pattern. this could be different, coz when k >=2, this could be a cyclic, then a thought is to duplicate it to 2 repeats, then we know the cyclic peak.

then it's easy. peak2 + (k-2)*sum is the answer, if sum>=0
if sum < 0; just peak2


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int KConcatenationMaxSum(int[] arr, int k) {
        int n = arr.Length, factor = 1000000007;
        int[] high = new int[n]; high[0] = arr[0] > 0 ? arr[0] : 0;
        int[] twoarr = new int[2*n]; twoarr[0] = arr[0];
        int[] twohigh = new int[2*n]; twohigh[0] = high[0];

        // peak, peak2 can be 1E10, just over int, but can be hold by long.
        long sum = arr[0], peak = high[0], peak2 = twohigh[0];
        for(int i = 1; i < 2 * n; i++)
        {
            twoarr[i] = arr[i % n];
            if(i < n)
            {
                high[i] = Math.Max(0, high[i-1]+arr[i]);
                sum += arr[i];
                peak = Math.Max((long)high[i], peak);
            }
            twohigh[i] = Math.Max(0, twohigh[i-1] + twoarr[i]);
            peak2 = Math.Max((long)twohigh[i], peak2);
        }
        
        if(k == 1)
            return (int)(peak % factor);
        else if(sum <= 0)
            return (int)(peak2 % factor);
        else
            return (int)((peak2 + (k - 2) * sum) % factor);
    }
}
```