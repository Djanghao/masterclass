# ✅ [TS] 64ms 100% Faster and Memory less | Easy Solution

**Author:** viniciusteixeiradias
**Votes:** 6
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/2864650/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/2864650/)

---

```
// Runtime: 64 ms, faster than 100.00% of TypeScript online submissions for Determine if String Halves Are Alike.
// Memory Usage: 43.6 MB, less than 100.00% of TypeScript online submissions for Determine if String Halves Are Alike.
const halvesAreAlike = (s: string): boolean => {
    const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const middle = Math.trunc(s.length / 2);
    
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const has = vowels.has(s[i]);
        if (i < middle && has) {
            count++;
        } else if (i >= middle && has) {
            count--;
        }
    }
    
    return count === 0
};
```
Let me know in comments if you have any doubts. I will be happy to answer.
Please upvote if you found the solution useful.