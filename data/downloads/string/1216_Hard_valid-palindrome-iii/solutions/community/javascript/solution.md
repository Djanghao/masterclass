# JavaScript N^2 Find Longest Palindromic Subsequence

**Author:** control_the_narrative
**Votes:** 7
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/1127670/](https://leetcode.com/problems/valid-palindrome-iii/solutions/1127670/)

---

Time: `O(N^2)`
Space: `O(N^2)`
```javascript
var isValidPalindrome = function(s, k) {
    const len = s.length;
    const memo = [...Array(len)].map(() => Array(len).fill(0));
    
    function run(l, r) {
        if(l > r) return 0;
        if(l === r) return 1;
        if(memo[l][r]) return memo[l][r];
        
        let res;
        
        if(s[l] === s[r]) res = run(l+1, r-1) + 2;
        else res = Math.max(run(l+1, r), run(l, r-1));
        
        memo[l][r] = res;
        return res;
    }
    return len - run(0, len-1) <= k;
};
```