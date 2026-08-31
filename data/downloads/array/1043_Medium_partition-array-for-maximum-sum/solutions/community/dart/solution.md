# Dart, DP with memoization

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4670911/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4670911/)

---

# Intuition
A problem with overlapping subproblems? That is probably solved by dynamic programming. 

# Approach
I'm relatively new to DP and start to understand the memoization concept which is akin to a cache memory. In a lot of cases, memoization is sufficient to avoid TLE. 
But before using that optimisation technique we need to find the correct recursion. This is like traversing a tree where each vertex has **k** possibilities.

# Code
```
class Solution {
  // cache (memoization in dynamic programming jargon)
  // to avoid recalculation
  Map<int, int> cache = {};

  int maxSumAfterPartitioning(List<int> arr, int k) {
    // start the recursion from index 0
    return recur(arr, k, 0);
  }

  /// explore recursively all the possibilities
  int recur(List<int> arr, int k, int i) {
    // avoid further recursions by returning the already calculated
    // value at that position
    if (cache.containsKey(i)) return cache[i]!;
    var maxVal = 0;
    for (int len = 1; len <= k && (i + len) <= arr.length; len++) {
      int subVal = arr.sublist(i, i + len).reduce(max) * len;
      maxVal = max(maxVal, subVal + recur(arr, k, i + len));
    }
    // store the result in cache
    cache[i] = maxVal;
    return maxVal;
  }
}

```