# Dynamic Programming (beats 100%)

**Author:** jbernier
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/4986788/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/4986788/)

---

# Intuition

This is equivalent to the [Target Sum problem](https://leetcode.com/problems/target-sum/description/). My solution is the same as Approach 4: 1D Dynamic Programming

The idea is to represent all possible positions as an array (`dp`), and then iterate through step by step (`1...k`), calculating the total number of ways one can reach each position at each step.

# Approach

First create an array `dp` representing each possible position. The length of this array is `2 * k + 1` because the range of possible positions at step `k` is `[-k, k]`.

Now we iterate step by step (`1...k`), calculating the number of ways each position can be reached at each step.

The base case is step 0 (`k = 0`) where only the start position is set to `1` (`dp[k] = 1`)

For each step `k > 1`, we loop through each position (in `dp` array), and calculate the number of ways each position can be reached based on the previous step's position values.

If at step `k-1` position `i` could be reached 3 times, then at step `k` position `i+1` can be reached an additional 3 times (stepping forward from position `i`), or `i-1` can be reached an additional 3 times (stepping backwards). 

The mod trick (modding with a large prime number) was required to prevent number overflow on some of the test cases.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(k^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numberOfWays(startPos: number, endPos: number, k: number): number {
  const MOD = 1e9 + 7;
  if (Math.abs(endPos-startPos) > k) return 0;
  let dp : number[] = new Array(2 * k + 1).fill(0);
  dp[k] = 1;
  for (let step = 1; step <= k; step++) {
      const next : number[] = new Array(dp.length).fill(0);
      for (let i = 0; i < dp.length; i++) {
          if (dp[i] > 0) {
              if (i - 1 >= 0) next[i-1] = (next[i-1] + dp[i]) % MOD;
              if (i + 1 < next.length) next[i+1] = (next[i+1] + dp[i]) % MOD;
          }
      }
      dp = next;
  }
  return dp[k + endPos - startPos];
};
```

If you found this useful, please upvote and consider giving me a follow! https://twitter.com/jeremybernier