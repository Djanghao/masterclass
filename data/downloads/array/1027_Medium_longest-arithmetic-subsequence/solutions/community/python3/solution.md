# ✅Beats 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 273
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3671662/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3671662/)

---

# Intuition
The intuition behind this solution is to use dynamic programming to find the length of the longest arithmetic subsequence in the given array. We iterate through each pair of indices (i, j), where i > j, and check if we can extend the arithmetic subsequence ending at index i by including the element at index j. We update the dynamic programming values based on the common difference between the elements at indices i and j. By keeping track of the maximum length encountered, we can find the length of the longest arithmetic subsequence in the array.

# Approach:
- If `n` is less than or equal to 2, we can immediately return `n` as the answer since any two elements form a valid arithmetic subsequence.
- We initialize the variable `longest` to 2, as explained earlier, the minimum length of an arithmetic subsequence is 2.
- We create a 2D vector `dp` of size `n`, where each element is an unordered map. The purpose of `dp` is to store the dynamic programming values for the lengths of the arithmetic subsequences ending at each index with different common differences.
- We iterate through each index `i` in the range `[0, n-1]`. This represents the current ending index of the arithmetic subsequences we are considering.
- For each `i`, we iterate through all previous indices `j` in the range `[0, i-1]`. This allows us to check all the potential elements that can form an arithmetic subsequence with the element at index `i`.
- We calculate the difference between the elements at indices `i` and `j` and store it in the variable `diff`. This difference represents the common difference of the potential arithmetic subsequence.
- Next, we update `dp[i][diff]` based on whether we have seen a previous arithmetic subsequence ending at index `j` with a common difference of `diff`.
  - If `dp[j].count(diff)` returns true, it means we have encountered an arithmetic subsequence ending at index `j` with the common difference `diff`. In this case, we update `dp[i][diff]` to be `dp[j][diff] + 1`, which extends the subsequence and increments its length by 1.
  - If `dp[j].count(diff)` returns false, it means we haven't seen an arithmetic subsequence ending at index `j` with the common difference `diff`. In this case, we initialize `dp[i][diff]` to 2 because we have found a new arithmetic subsequence of length 2 (nums[j], nums[i]).
- After updating `dp[i][diff]`, we check if the current length `dp[i][diff]` is greater than the current longest arithmetic subsequence length `longest`. If so, we update `longest` to the new maximum length.
- Once we finish iterating through all pairs of indices, we have computed the lengths of all possible arithmetic subsequences ending at each index. The maximum length among these subsequences is stored in `longest`, so we return it as the result.


# Code

```C++ []
class Solution {
public:
    int longestArithSeqLength(vector<int>& nums) {
        int n = nums.size();
        if (n <= 2)
            return n;

        int longest = 2;
        vector<unordered_map<int, int>> dp(n);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                int diff = nums[i] - nums[j];
                dp[i][diff] = dp[j].count(diff) ? dp[j][diff] + 1 : 2;
                longest = max(longest, dp[i][diff]);
            }
        }

        return longest;
    }
};
```
```Java []
class Solution {
    public int longestArithSeqLength(int[] nums) {
        int n = nums.length;
        if (n <= 2)
            return n;

        int longest = 2;
        Map<Integer, Integer>[] dp = new HashMap[n];

        for (int i = 0; i < n; i++) {
            dp[i] = new HashMap<>();
            for (int j = 0; j < i; j++) {
                int diff = nums[i] - nums[j];
                dp[i].put(diff, dp[j].getOrDefault(diff, 1) + 1);
                longest = Math.max(longest, dp[i].get(diff));
            }
        }

        return longest;
    }
}
```
```Python3 []
class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 2:
            return n

        longest = 2
        dp = [{} for _ in range(n)]

        for i in range(n):
            for j in range(i):
                diff = nums[i] - nums[j]
                dp[i][diff] = dp[j].get(diff, 1) + 1
                longest = max(longest, dp[i][diff])

        return longest
```

![CUTE_CAT.png](./images/0.png)


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

