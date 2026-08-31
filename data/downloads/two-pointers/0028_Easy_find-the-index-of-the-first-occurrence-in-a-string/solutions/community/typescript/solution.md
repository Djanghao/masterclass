# ✅ [TypeScript] 1 Simple Solution (3 Liners, 90%)

**Author:** mlajkim
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3021950/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3021950/)

---

\uD83D\uDC40 About the rules of this post [here](https://leetcode.com/problems/single-number/solutions/2973298/rules-v1-221231/).

# Code (3 Liners, 90%)
- Here N is the length of `haystack` and M the length of `needle`
    - \u2605 Time Complexity O(N - M + 1)
    - \u2606 Space Complexity O(1)
    - Explanation
        - Loop through each strings built with the needle length
        - If it is the same as the needle, return the index
        - If nothing returned during the loop, return -1
```
// \u2705 1 <= haystack.length, needle.length <= 104
// \u2705 haystack and needle consist of only lowercase English characters.

function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.slice(i, i + needle.length) === needle) return i
    }

    return -1
};
```

# Thank you

Upvote if you like \u2B06\uFE0F
Let me know if you have any questions on the comment section.
