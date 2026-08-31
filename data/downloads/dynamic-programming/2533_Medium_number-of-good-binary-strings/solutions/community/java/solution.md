# Java + DP:  A goodBS can be built by adding oneGroup of 1's or a zeroGroup of 0's every time

**Author:** hardcracker
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3083324/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3083324/)

---

# Intuition
A goodBS can be built by adding a oneGroup of 1's or a zeroGroup of 0's to a previous goodBS. Thus, this can be solved with DP, where dp[i] represents the number of goodBS of length i. We need to add up the number of goodBS from the minLen to maxLen. This question description is not strightforward. If the question says you can add a oneGroup of 1's or a zeroGroup of 0's every time to extend the goodBS, it is more clear.

Time: O(n)

# Code
```
class Solution {
    public int goodBinaryStrings(int minLength, int maxLength, int oneGroup, int zeroGroup) {
        int mod = 1000000007;
        int[] dp = new int[maxLength + 1]; 
        // dp[i] represents number of goodBS of length i

        dp[0] = 1;
        // there is one empty goodBS since 0 is a multiple of all numbers

        int result = 0;

        for(int i = 1; i <= maxLength; i++) {
            if(i >= oneGroup) dp[i] = (dp[i] + dp[i - oneGroup]) % mod; // add oneGroup to previous goodBS
            if(i >= zeroGroup) dp[i] = (dp[i] + dp[i - zeroGroup]) % mod; // add zeroGroup to previous goodBS
            if(i >= minLength) result = (result + dp[i]) % mod;
        }

        return result % mod;
    }
}
```