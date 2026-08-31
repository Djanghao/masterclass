# Beats 100.00%of users with TypeScript - kth-ancestor-of-a-tree-node

**Author:** asifpeerzade785
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/4332910/](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/4332910/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class TreeAncestor {
    dp: number[][];
    maxAncestor: number;

    constructor(n: number, parent: number[]) {
        this.maxAncestor = Math.ceil(Math.log2(n));
        this.dp = new Array(n).fill(0).map(() => new Array(this.maxAncestor + 1).fill(-1));

        // Initialize the 1st ancestor
        for (let i = 0; i < n; i++) {
            this.dp[i][0] = parent[i];
        }

        // Precompute ancestors up to the max ancestor
        for (let j = 1; j <= this.maxAncestor; j++) {
            for (let i = 0; i < n; i++) {
                if (this.dp[i][j - 1] !== -1) {
                    this.dp[i][j] = this.dp[this.dp[i][j - 1]][j - 1];
                }
            }
        }
    }

    getKthAncestor(node: number, k: number): number {
        for (let j = 0; j <= this.maxAncestor; j++) {
            if ((k & (1 << j)) !== 0) {
                node = this.dp[node][j];
                if (node === -1) {
                    return -1; // No such ancestor
                }
            }
        }
        return node;
    }
}

// Example usage
const treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
console.log(treeAncestor.getKthAncestor(3, 1)); // Output: 1
console.log(treeAncestor.getKthAncestor(5, 2)); // Output: 0
console.log(treeAncestor.getKthAncestor(6, 3)); // Output: -1

```