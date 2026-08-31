# ✅ Aesthetic TypeScript

**Author:** mlajkim
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/3742587/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/3742587/)

---

# Code
```ts
function removeOuterParentheses(s: string): string {
    let level = 0
    let built: string = ""
    for (const c of s) {
        if (c === "(" && level++ === 0) continue
        if (c === ")" && level-- === 1) continue
        built += c
    }
    return built
};
```

# Thank you
Upvote if you like \u2B06\uFE0F
If you have any questions, please let me know in the comment section.