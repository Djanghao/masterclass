# Optimized Dynamic Programming

**Author:** jeffreyhu8
**Votes:** 37
**Link:** [https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4168064/](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4168064/)

---

# Intuition
This problem is similar to knapsack, so DP seems like a good approach.

# Approach
We can try to approach this like a modified knapsack problem, where we take special care to account for duplicate elements. We can take care of duplicate elements by keeping a map from elements to their frequencies, then accounting for this while updating our cache.

However, this will TLE.

A key observation is to notice how the bounds state that $$\\mathrm{sum(nums)}\\le 2\\cdot 10^4$$. This means the number of distinct elements in $$\\mathrm{nums}$$ is limited. At best, we can have $1+2+\\dots+x\\le \\mathrm{sum(nums)}\\implies x\\le O(\\sqrt{\\mathrm{sum(nums)}})$ distinct elements. We can use this to our advantage.

Consider adding or not adding some element `num`, and let `cache[i]` be the number of ways to obtain a sum of `i`. One downside of our DP is that it is slow to update `cache[i] = cache[i] + cache[i - num] + cache[i - 2 * num] + ... + cache[i - freq * num]`, especially if `freq` is large (i.e. when the number of distinct elements is small).

However, we can speed this up by preprocessing with a prefix sum. This speeds up cases where the number of distinct elements is small, which is precisely what we want.

# Complexity
- Time complexity: $$O(r\\cdot \\min(n, \\sqrt{\\mathrm{sum(nums)}}))$$, where $$n=\\mathrm{len(nums)}$$

- Space complexity: $$O(r + \\min(n, \\sqrt{\\mathrm{sum(nums)}}))$$

# Code
```java
class Solution {
    static final int MOD = 1_000_000_007;

    public int countSubMultisets(List<Integer> nums, int l, int r) {
        TreeMap<Integer, Integer> numsMap = new TreeMap<>();
        for (int num : nums) {
            numsMap.put(num, numsMap.getOrDefault(num, 0) + 1);
        }

        long[] cache = new long[r + 1];
        cache[0] = 1;

        for (Map.Entry<Integer, Integer> entry : numsMap.entrySet()) {
            int num = entry.getKey();
            int freq = entry.getValue();

            // preprocessing
            long[] pSum = Arrays.copyOf(cache, r + 1);
            for (int i = 0; i <= r; ++i) {
                if (i >= num) {
                    pSum[i] += pSum[i - num];
                    pSum[i] %= MOD;
                }
            }

            // update dp cache
            for (int i = r; i >= 0; --i) {
                if (num > 0) {
                    int j = i - (freq + 1) * num;
                    cache[i] = pSum[i] - (j >= 0 ? pSum[j] : 0);
                    cache[i] = Math.floorMod(cache[i], MOD);
                } else {
                    cache[i] *= freq + 1;
                    cache[i] %= MOD;
                }
            }
        }

        long res = 0;
        for (int i = l; i <= r; ++i) {
            res += cache[i];
            res %= MOD;
        }
        return (int) res;
    }
}
```