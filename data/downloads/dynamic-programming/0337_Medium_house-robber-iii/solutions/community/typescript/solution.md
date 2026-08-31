# easy peasy 100% beats, 0ms runtime

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/5964260/](https://leetcode.com/problems/house-robber-iii/solutions/5964260/)

---

![ts.png](./images/0.png)

# Code
```typescript []
type ResultOfRob = {
    't': number,
    'f': number
};
function rob(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null): ResultOfRob => {
        if (node == null) return { 't': 0, 'f': 0 };
        const left  = dfs(node.left);
        const right = dfs(node.right);
        return {
            't': node.val + left.f + right.f,
            'f': Math.max(
                    left.t + right.t, 
                    left.f + right.t,
                    left.t + right.f,
                    left.f + right.f,
                )
        }
    }
    let result = dfs(root);
    return Math.max(result.f, result.t);
};
```