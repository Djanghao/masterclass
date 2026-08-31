# JavaScript Simple Top-Down Recursive DP

**Author:** control_the_narrative
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1076284/](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1076284/)

---

```javascript
var longestPalindrome = function(word1, word2) {
    const s = word1 + word2;
    const n = s.length;
    const memo = [...Array(n)].map(() => Array(n).fill(0))
    const uniqueChars = new Set(word1);
    let ans = 0;
    
    for(let x of uniqueChars) {
        const i = word1.indexOf(x);
        const j = word2.lastIndexOf(x);
        if(j === -1) continue;
        ans = Math.max(ans, run(i, j + word1.length));
    }
    
    function run(l, r) {
        if(l === r) return 1;
        if(l > r) return 0;

        if(memo[l][r]) return memo[l][r];

        if(s[l] === s[r]) {
            const res = run(l+1, r-1) + 2;
            memo[l][r] = res;
            return res;
        }
        const res = Math.max(run(l+1, r), run(l, r-1))
        memo[l][r] = res;
        return res;
    }
    return ans;
};
```