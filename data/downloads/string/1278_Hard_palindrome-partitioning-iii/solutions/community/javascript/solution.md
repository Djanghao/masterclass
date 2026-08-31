# Easy to understand Soln - Memoization

**Author:** trar
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5843341/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5843341/)

---

# Complexity
- Time complexity: $$O(k*n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
  // I need to check whether a given string is palindrome or not
  // If not a palindrome, what will be the number of operations reqd to make it palindromic
  // I can store how many operations are reqd to make a subString palindromic
  // Then I need to recursively look for all combinations and return the min ans
  const n = s.length;
  const pOperations = Array(n).fill(0).map(() => Array(n).fill(Infinity));
  for(let len = 1; len<=n; len++) {
    for(let i=0; i<=n-len; i++) {
      let j = i+len-1;
      let operations = s[i] === s[j] ? 0 : 1;
      if(len > 2) operations += pOperations[i+1][j-1]; 
      pOperations[i][j] = operations;
    }
  }
  const dp = new Map();
  return helper(s, k, dp, pOperations, 0);
};

function helper(str, k, dp, pOperations, start) {
  if(k === 1) return pOperations[start][str.length-1];
  if(dp.has(key(k, start))) return dp.get(key(k, start));
  let minOperations = Number.MAX_VALUE;
  for(let i=start; i<=str.length-k; i++) {
    minOperations = Math.min(pOperations[start][i] + helper(str, k-1, dp, pOperations, i+1), minOperations);
  }
  dp.set(key(k, start), minOperations);
  return minOperations;
}

function key(a, b) {
  return a+"_"+b;
}
```