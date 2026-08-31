# [Time & Memory O(n^2)] Conditioned longest palindromic subsequence

**Author:** jhw123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1742162/](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1742162/)

---

### Idea

This is a conditioned [longest palindromic subsequence problem](https://leetcode.com/problems/longest-palindromic-subsequence). 
The condition is that the start and the end of a concatenated subsequence should be from each word.
This is because the subsequences from each word are **non-empty**.

For optimal search of maximum, we first calculate the longest palindrominc subsequences of all intervals `[l, r]` in `word1 + word2` where `0 <= l <= r <= word1.length + word2.length`. We store the result of this calculation as `dp`, where `dp[l][r]` is the length of the longest palindromic subsequence in `(word1+word2).slice(l, r+1)`.
Then, we use `dp` and iterate through the intervals that have matching start and end from each word.

### Complexity

Time: `O(n^2)`
Space: `O(n^2)`
where `n = word1.length + word2.length`


```typescript
function longestPalindrome(word1: string, word2: string): number {
    const s = word1+word2
    const dp = [...Array(s.length)].map(() => Array(s.length).fill(0))
    
    for (let l=s.length-1; 0<=l; l-=1) {
        dp[l][l] = 1
        for (let r=l+1; r<=s.length-1; r+=1) {
            if (s[l] === s[r]) {
                dp[l][r] = dp[l+1][r-1] + 2
            } else {
                dp[l][r] = Math.max(dp[l+1][r], dp[l][r-1])
            }
        }
    }

    let max = 0
    for (let left=0; left<word1.length; left+=1) {
        const char = word1[left]
        const right = word2.lastIndexOf(char)
        if (0 <= right) {
            max = Math.max(max, dp[left][word1.length+right])
        }
    }
    
    return max
};  
```