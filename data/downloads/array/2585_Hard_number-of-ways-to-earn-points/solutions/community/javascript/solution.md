# 2585. Number of Ways to Earn Points : Easy Solution

**Author:** RockstarPabitra
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3486253/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3486253/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem statement is to find the number of ways to reach a given target by choosing from a set of items, where each item has a weight and a count. The goal is to use the items in such a way that the sum of their weights adds up to the target. We are required to find the number of ways we can do so.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach used in the given code is a recursive approach with memoization. The main idea is to try every possible combination of the items to reach the target and count the number of ways to do so. We start with the target value and subtract the weight of each item until we reach zero or a negative value. If we reach zero, we have found a valid combination, and if we reach a negative value, we know that the combination we are trying is not valid.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(target * n)

The code uses memoization to avoid recomputing the same results, so the time complexity is reduced from an exponential time complexity to a polynomial time complexity.

The main function waysToReachTarget creates a memoization array of size (target + 1) * (n + 1) and then calls the backtrack function, which is a recursive function that calculates the number of ways to reach the target using the types array starting from a specific index.

The backtrack function loops through the types array and tries to use each element to reach the target. It has a nested loop that iterates from 1 to the maximum number of times the current type can be used to reach the target. The inner loop has a maximum of target iterations, so the time complexity of the loop is O(target). Inside the loop, it recursively calls itself to compute the number of ways to reach the remaining target using the remaining types, and then it accumulates the results. Since the backtrack function is called recursively for each possible combination of types, its time complexity is O(target * n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(target * n)

The space complexity of the code is O(target * n), due to the memoization array. The backtrack function has a space complexity of O(target), due to the recursive calls on the call stack. Therefore, the total space complexity is dominated by the memoization array.

# JavaScript Code
```
/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
function waysToReachTarget(target, types) {
  const memo = Array.from({ length: target + 1 }, () =>
    Array.from({ length: types.length + 1 }, () => -1),
  );
  return backtrack(target, types, 0, memo);
}

function backtrack(target, types, start, memo) {
  if (target == 0) {
    return 1;
  }
  if (target < 0) {
    return 0;
  }
  if (memo[target][start] != -1) {
    return memo[target][start];
  }
  let res = 0;
  for (let i = start; i < types.length; i++) {
    for (let j = 1; j <= types[i][0]; j++) {
      if (target - j * types[i][1] < 0) {
        break;
      }
      const temp = backtrack(target - j * types[i][1], types, i + 1, memo);
      res = (res + temp) % 1_000_000_007;
    }
  }
  memo[target][start] = res;
  return res;
}
```

`If This Helps You Really , Then Please Give Me An Up-Vote . Thank You.`