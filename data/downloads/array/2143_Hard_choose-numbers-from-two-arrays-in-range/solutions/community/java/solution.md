# Java simple solution|Beats 100.00%

**Author:** prasantb
**Votes:** 0
**Link:** [https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/4028053/](https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/4028053/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int countSubranges(int[] nums1, int[] nums2) {
         int n = nums1.length, Z = 100*n, ans = 0, M = (int)1e9 + 7;
        int[] dp = new int[2*Z+1];
        for (int j = 0; j < n; j++){
            dp[Z]++; // a new subarray starts now at nums1[i]
            int[] ndp = new int[dp.length];
            for (int k = 0; k < dp.length; k++){
                if (k + nums1[j] < dp.length){
                    ndp[k+nums1[j]]+=dp[k];
                    ndp[k+nums1[j]]%=M;
                }
                if (k - nums2[j] >= 0){
                    ndp[k-nums2[j]]+=dp[k];
                    ndp[k-nums2[j]]%=M;
                }
            }
            ans += ndp[Z];
            ans %= M;
            dp = ndp;
        }
        return ans;
    }
}
```