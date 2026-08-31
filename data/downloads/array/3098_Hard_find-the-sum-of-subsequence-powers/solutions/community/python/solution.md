# Pick-NotPick 🔥 Special DP Key  ✅

**Author:** harsh_reality_
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947947/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4947947/)

---

# Intuition
My first intution was to generate all subsequences, but isn't that just bruteforce.

So, my second approach was to recursively calculate all `minimum absolute difference between any two elements `. But for minimum difference we can't just maintain that without generating all subsequences. So, we sort the array, because only consecutive elements can have minimum difference.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
we implement a knapsack-like pick - not pick approach and calculate the minimum difference while picking a number.

If we picked exactly `k` elements then we return `mini` otherwise we return `0`.
I guess the code is pretty straightforward.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N ^ 4 + N log N)
Because the DP is memoized internally on 4 terms - `i`, `prev`, `k` and `mini`. Also sorting took `N log N` time.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N ^ 4)
For caching the precomputed values
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
    int n, mod = 1e9 + 7;
    unordered_map<long long, int> dp;
private:
    int sim(int i, int prev, int k, int mini, vector<int> &nums) {
        if (!k) return mini;
        if (i == n and k) return 0;
        
        long long key = i + 1e2 * prev + 1e4 * k + 1e6 * mini;
        
        if (dp.find(key) != dp.end()) 
            return dp[key];

        int skip = sim(i+1, prev, k, mini, nums);
        int pick = sim(i+1, i, k-1, min(mini, prev == -1 ? mod : nums[i] - nums[prev]), nums);
        
        return dp[key] = (pick + skip) % mod;
    }
public:
    int sumOfPowers(vector<int>& nums, int k) {
        n = nums.size();
        sort(nums.begin(), nums.end());

        return sim(0, -1, k, 1e9, nums);
    }
};
```
```python []
class Solution:
    def sumOfPowers(self, nums: List[int], k: int) -> int:
        n = len(nums)
        nums.sort()
        
        @cache
        def sim(i, prev, k, mini):
            if k == 0:
                return mini
            
            if i == n and k:
                return 0
            
            skip = sim(i+1, prev, k, mini)
            
            pick = sim(i+1, i, k-1, min(mini, nums[i] - nums[prev] if prev != -1 else 1e9))
            
            return (pick + skip) % int(1e9 + 7)

        return sim(0, -1, k, 1e9)
```