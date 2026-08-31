# ✅ Easiest TypeScript Solution

**Author:** mlajkim
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/3406646/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/3406646/)

---

# Code
```

function getLonelyNodes(root: TreeNode | null): number[] {
    if (!root) return []

    const collected = [...getLonelyNodes(root.left), ...getLonelyNodes(root.right)]

    if (root.left && !root.right) collected.push(root.left.val)
    if (root.right && !root.left) collected.push(root.right.val)

    return collected
};
```

# Thank you

Upvote if you like \u2B06\uFE0F
If you have any questions, please let me know in the comment section.