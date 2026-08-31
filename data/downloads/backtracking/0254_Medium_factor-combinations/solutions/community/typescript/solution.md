# ✅ TypeScript: Simple Solution (Backtrack)

**Author:** mlajkim
**Votes:** 0
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/4484801/](https://leetcode.com/problems/factor-combinations/solutions/4484801/)

---

# Happy New Year! \uD83E\uDD73
This post was created on Jan 1, 2024!

# Code (Backtrack)
```ts
// Jan 1, 2024 06:35~06:52
function getFactors(n: number): number[][] {
    const answer: number[][] = []
    const stack: number[] = []

    // Takes the min, to make sure that each comb is unique
    const backtrack = (n: number, min = 2) => {
        // Note that the "1 < factors"
        if (n < 2) {
            // Note that the "factors < n"
            if (1 < stack.length) answer.push([...stack])
            return
        }

        for (let i = min; i <= n; i++) {
            if (n % i !== 0) continue
            stack.push(i)
            backtrack(n / i, i)
            stack.pop()
        }
    }

    backtrack(n)
    return answer
};
```

# Thank you for reading my post
\uD83D\uDC4D Upvote if you like
\uD83D\uDE4F If you have any questions, please let me know in the comment section.