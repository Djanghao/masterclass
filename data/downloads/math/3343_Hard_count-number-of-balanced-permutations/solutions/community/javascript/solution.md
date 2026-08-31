# Dynamic Programming and Combinatorics

**Author:** Skynord
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-balanced-permutations/solutions/6004010/](https://leetcode.com/problems/count-number-of-balanced-permutations/solutions/6004010/)

---

# Intuition
The problem requires finding balanced permutations where the sum of digits at even indices equals the sum at odd indices. We can solve this using dynamic programming by distributing digits between odd and even positions while maintaining the balance requirement.

# Approach
1. First, count the frequency of each digit and calculate total sum
2. If total sum is odd, return 0 as no balanced permutation is possible
3. Use dynamic programming with memoization where state consists of:
   - Current digit (i)
   - Remaining odd positions
   - Remaining even positions
   - Remaining balance needed
4. For each digit, try all possible distributions between odd and even positions
5. Use combination calculations to determine number of ways to distribute digits
6. Handle large numbers using BigInt to prevent overflow

# Complexity
- Time complexity: $$O(n^3)$$
  - Where n is the length of the input string
  - We have n positions and for each digit we try up to n distributions
  - Memoization helps avoid recalculating states

- Space complexity: $$O(n^2)$$
  - Memoization cache stores states based on remaining positions and balance
  - Combination calculations are constant space

# Code
```javascript []
/**
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function (num) {
  const MOD = 1000000007;
  const n = num.length;

  // Count frequency of each digit
  const cnt = new Array(10).fill(0);
  let total = 0;
  for (let ch of num) {
    cnt[parseInt(ch)]++;
    total += parseInt(ch);
  }

  // If total sum is odd, no balanced permutation is possible
  if (total % 2) return 0;

  // Memoization cache
  const memo = new Map();

  // Updated combination calculation with modulo
  const comb = (n, r) => {
    if (r > n) return 0;
    if (r === 0 || r === n) return 1;
    if (r > n - r) r = n - r;

    let ans = 1n; // Using BigInt for intermediate calculations
    for (let i = 0; i < r; i++) {
      ans = ans * BigInt(n - i);
      ans = ans / BigInt(i + 1);
    }
    return Number(ans % BigInt(MOD));
  };

  // DFS function
  const dfs = (i, odd, even, balance) => {
    if (odd === 0 && even === 0 && balance === 0) return 1;
    if (i < 0 || odd < 0 || even < 0 || balance < 0) return 0;

    const key = `${i},${odd},${even},${balance}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    for (let j = 0; j <= cnt[i]; j++) {
      // Handle multiplication with modulo to prevent overflow
      const ways =
        (BigInt(comb(odd, j)) * BigInt(comb(even, cnt[i] - j))) % BigInt(MOD);
      const next = BigInt(
        dfs(i - 1, odd - j, even - (cnt[i] - j), balance - i * j)
      );
      res = (res + Number((ways * next) % BigInt(MOD))) % MOD;
    }

    memo.set(key, res);
    return res;
  };

  return dfs(9, n - Math.floor(n / 2), Math.floor(n / 2), total / 2);
};
```