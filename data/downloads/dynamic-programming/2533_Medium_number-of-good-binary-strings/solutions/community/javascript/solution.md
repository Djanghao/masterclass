# JavaScript + Dynamic Programming + Memoization

**Author:** CarlosBalladares
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-good-binary-strings/solutions/3052173/](https://leetcode.com/problems/number-of-good-binary-strings/solutions/3052173/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each length of between `minLength` and `maxLength` inclusive, find the number of ways to build the binary string by adding `oneGroup` 1s and `zeroGroup` 0s.

# Approach
<!-- Describe your approach to solving the problem. -->
The number of ways to build a binary string of length `n` is the number of ways you can subtract `oneGroup` and `zeroGroup` from n until you get `0`. Thinking about the problem top down helps us formulate the recurrence relation of this dp problem. 
```
dp(i) = 1 if  i = 0
        0 if  i < 0
        dp(i - oneGroup) + dp(i - zeroGroup) otherwise
```
Memoize the dp function and add `dp(i)` for `minLength <= i <= maxLength` modulo `10^9 + 7` to get the answer. 

# Complexity
- Time complexity: $$O(2*maxLength - minLength)$$
<!-- Add your time complexity here, e.g.  -->
Memoization reduces the time complexity to be linear. 
Because there's at most `maxLength` subproblems in `dp(i)` which will be memoized as `dp(i)` is called over the range `maxLength - minLength`.

- Space complexity: $$O(maxLength)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
From memoizing up to `maxLength` subproblem results.

# Code
Using lodash
```javascript
const mod = 1000000007;
const goodBinaryStrings = (minLength, maxLength, oneGroup, zeroGroup) => {
    const dp = _.memoize((len)=>{
        if(len == 0) return 1;
        let ans = 0;
        if(len >= oneGroup)
            ans = (ans + dp(len - oneGroup)) % mod;
        if(len >= zeroGroup)
            ans = (ans + dp(len - zeroGroup)) % mod;
        return ans;
    });
    return _.sum(_.range(minLength, maxLength+1).map(dp)) % mod;
};
```
Plain JavaScript

```javascript
const mod = 1e9 + 7;
const goodBinaryStrings = (minLength, maxLength, oneGroup, zeroGroup) => {
    const memo = {};
    const dp = (len)=>{
        if(memo[len] != null) return memo[len];
        if(len == 0) return memo[len] = 1;
        let ans = 0;
        if(len >= oneGroup)
            ans = (ans + dp(len - oneGroup)) % mod;
        if(len >= zeroGroup)
            ans = (ans + dp(len - zeroGroup)) % mod;
        return memo[len] = ans;
    };
    let ans = 0;
    for(let i = minLength; i <= maxLength; i++)
        ans+= (dp(i) % mod);
    return ans % mod;
};
```