# Super simple recursion

**Author:** pastypique
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/6084079/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/6084079/)

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
```typescript []
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function maxDepth(root: _Node | null): number {
    if (!root) return 0;
    let maxChildDepth = 0;

    for(let i = 0; i < root.children.length; i++) {
        const childDepth = maxDepth(root.children[i]);
        maxChildDepth = Math.max(childDepth, maxChildDepth);
    }

    return maxChildDepth + 1;
};
```