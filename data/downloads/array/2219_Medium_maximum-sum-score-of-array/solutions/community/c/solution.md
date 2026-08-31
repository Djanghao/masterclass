# C++ time O(n) and space O(1)

**Author:** BrightFuture
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/1945373/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/1945373/)

---

Some solutions have space complexity O(n) to store prefix sums. It's not necessary since we can calculate right side score with sum-prefixSum+num.
```
    long long maximumSumScore(vector<int>& nums) {
        long long sum = accumulate(nums.begin(), nums.end(), (long long)0);
        long long pref = 0, res = INT_MIN;
        for (auto n : nums)
        {
            pref += n;
            res = max(res, max(pref, sum-pref+n));
        }
        return res;
    }
```
Another solution: to get max sum score, max(max(left sum, right sum) at index i) for all indexes. It's actually to get max(max(prefix), max(suffix)) = max(all prefix, all suffix). So we can use two pointers.