# ✅ TypeScript: Simple Solution (Simple loop O(n))

**Author:** mlajkim
**Votes:** 3
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/4509106/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/4509106/)

---



# Code Simple loop O(n)
```ts
function leftRightDifference(nums: number[]): number[] {
    const stack: number[] = []
    let left = 0, right = nums.reduce((p, c) => p + c, 0)

    for (const num of nums) {
        right -= num
        stack.push(Math.abs(right - left))
        left += num
    }

    return stack
};
```

# Thank you for reading my post
\uD83D\uDC4D Upvote if you like
\uD83D\uDE4F If you have any questions, please let me know in the comment section.