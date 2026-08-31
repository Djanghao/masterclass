# ✅ Easiest TypeScript Solution (DFS)

**Author:** mlajkim
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/3266364/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/3266364/)

---


# Tips
- When you solve a problem like this, always try to take an advantage of given funciton, instead of declaring a new one.

# Code (DFS)
- if `root` is null, it has 0 level, so return 0
- Get the lowest depth from the `left`/`right` side
- if `left` side was null, return only `right` and like wise for opposite side
- return the minimum level from `left` or `right`
```

function minDepth(root: TreeNode | null): number {
    if (root === null) return 0

    const left = minDepth(root.left) + 1
    const right = minDepth(root.right) + 1

    if (!root.left) return right
    if (!root.right) return left

    return Math.min(left, right)
};
```

# Thank you

Upvote if you like \u2B06\uFE0F
If you have any questions, please let me know in the comment section.