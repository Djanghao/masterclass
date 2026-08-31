# Dart | JavaScript Easy Simple Code

**Author:** Isko21
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3494363/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3494363/)

---


# Code
```
class Solution {
    int numSubseq(List<int> nums, int target) {
        nums.sort();
        int n = nums.length;
        int l = 0, r = n - 1;
        int res = 0;
        int mod = 1000000007;

        List<int> pows = new List.filled(n, 0);
        for (int i = 0 ; i < n ; i++)
            pows[i] = i == 0 ? 1 : pows[i - 1] * 2 % mod;

        while (l <= r) 
            if (nums[l] + nums[r] > target) 
                r--;
            else 
                res = (res + pows[r - l++]) % mod;
        return res;

    }
}
```