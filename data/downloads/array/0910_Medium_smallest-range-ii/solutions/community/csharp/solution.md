# DP-esq memoization solution - C#

**Author:** Cocamo1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-ii/solutions/4533088/](https://leetcode.com/problems/smallest-range-ii/solutions/4533088/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I think this is not the optimal way to solve this problem. But I couldn't think up the editorial solution and I felt like it could likely be solved with some form of memoization. I don't know if this solution can really be called dynamic programming because it doesn't really utilize the answers so much as stores them to prevent calculating larger ranges than have already been found.

The algorithm keeps track of the current min, current max, and the current index. It checks to make sure the current max - current min is less than the minimum range found, and if it isn't it returns the minimum range.

This works because unlike with Dynamic Programming, this algorithm doesn't use smaller subproblems. Instead the indexes of the dp/memoization array get assigned to the minimum end-result-range. So bailing and returning the minimum range isn't an issue like it would be if we were building up to the answer.


Now having said that, trying both nums[ind] - k and nums[ind] + k at every single index will result in TLE for this approach. The good news is that a simple optimization can make it pass!

The optimization is to basically have the algorithm definitively take 1 path (the path being nums[ind] - k or nums[ind] + k) if taking that path would not affect the current max/ current min.
This pushes the runtime into a very acceptable range for C# submissions, and the memory seems to only be 1.5 mb higher than other submissions that used the editorial approach.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create 3 global variables - an int[] for memoization, an int K which will just be the global version of k, and an int minRange set initially to int.MaxValue.
2. Set the memoization array to be of size nums.Length, fill it up with -1 to start.
3. Define a function, smallestRange, that will recursively calculate the smallest range. It will do this by checking for the minimum end-result-range between the two options: including nums[ind] - K, or including nums[ind] + K;
4. Return the smallest range found.


# Code
```
public class Solution {
    int[] dp;
    int K;
    int minRange = int.MaxValue;
    public int SmallestRangeII(int[] nums, int k) {
        if (k == 0){
            return nums.Max() - nums.Min();
        }
        K = k;
        dp = new int[nums.Length];
        Array.Fill(dp, -1);
        
       return smallestRange(nums, int.MaxValue, int.MinValue, 0);

    }

    private int smallestRange(int[] nums, int min, int max, int ind){
        if (max - min >= minRange) return minRange;
        else if (ind == nums.Length){
            var range =  max - min;
            minRange = Math.Min(minRange, range);
            return range;
        }
        else if (dp[ind] != -1){
            if (dp[ind] <= max - min) return dp[ind];
        }
        int res = int.MaxValue;
        int newMinSub = Math.Min(min, nums[ind] - K);
        int newMaxSub = Math.Max(max, nums[ind] - K);
        int newMinAdd = Math.Min(min, nums[ind] + K);
        int newMaxAdd = Math.Max(max, nums[ind] + K);
        if (newMinSub == min && newMaxSub == max){
            return smallestRange(nums, newMinSub, newMaxSub, ind + 1);
        }
        else if (newMinAdd == min && newMaxAdd == max){
            return smallestRange(nums, newMinAdd, newMaxAdd, ind + 1);
        }
        else{
            res = Math.Min(smallestRange(nums, newMinSub, newMaxSub, ind + 1), smallestRange(nums, newMinAdd, newMaxAdd, ind + 1));
        }

        if (dp[ind] != -1){
            dp[ind] = Math.Min(dp[ind], res);
        }
        else dp[ind] = res;

        return dp[ind];

    }
}
```