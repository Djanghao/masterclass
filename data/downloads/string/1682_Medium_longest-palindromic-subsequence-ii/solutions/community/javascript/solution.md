# Javascript top-down with memoization

**Author:** James_Clark12
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/1694596/](https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/1694596/)

---

```

var longestPalindromeSubseq = function(s) {
    
    const mem = {};
  
    const solve = (left, right, prevMatch) => {
        
        if(left >= right) return 0;

        if (mem[`${left},${right},${prevMatch}`] !== undefined) return mem[`${left},${right},${prevMatch}`];
        
        if (s[left] === s[right] && prevMatch !== s[left]) {
            mem[`${left},${right},${prevMatch}`] = solve(left+1, right-1, s[left]) + 2;
        } else {
            mem[`${left},${right},${prevMatch}`] = Math.max(
                solve(left+1, right, prevMatch),
                solve(left, right-1, prevMatch)
            );
        }
        return mem[`${left},${right},${prevMatch}`];        
    }
    
    return solve(0,s.length-1,null);
};

```