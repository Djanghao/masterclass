# Javascript , JS easy Solution

**Author:** abhishekchauhan9036
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/3348070/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/3348070/)

---


# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**

 * @param {string} s
 * @param {number} k
 * @param {character} letter
 * @param {number} repetition
 * @return {string}
 */
var smallestSubsequence=function(s, k, letter, rep) {
    let extra = s.split('').filter(ch => ch == letter).length - rep;
    let remove = s.length - k,mono = "",ans = "";
    for (let ch of s) {
        while (mono.length > 0 && mono.slice(-1) > ch && remove) {
            if (mono.slice(-1) == letter && extra == 0) break;
            extra -= mono.slice(-1) == letter;
            remove--;
            mono = mono.substring(0, mono.length - 1);
        }
        mono+=ch;
    }
    for (var i = 0; ans.length < k; i++) {
        if (mono[i] != letter && ans.length + Math.max(0, rep) >= k) continue;
        ans += mono[i];
        rep -= (mono[i] == letter ? 1 : 0);
    }
    return ans;
}
```