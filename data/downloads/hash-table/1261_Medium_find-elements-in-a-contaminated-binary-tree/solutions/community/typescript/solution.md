# ✔ Beats 100%, [JS/TS] simple solution with HashSet

**Author:** elyorsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/4451366/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/4451366/)

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
class FindElements {
    
    hash: Set<number>
    constructor(root: TreeNode | null) {
        this.hash = new Set()
        this.fromTreeToHash(root, 0)
    }

    find(target: number): boolean {
        return this.hash.has(target)
    }

    private fromTreeToHash (root: TreeNode | null, val: number) {
        if(!root){
            return
        }

        this.hash.add(val)

        this.fromTreeToHash(root.left, 2 * val + 1)
        this.fromTreeToHash(root.right, 2 * val + 2)
    }
}
```
```javascript []
class FindElements {
    
    hash
    constructor(root) {
        this.hash = new Set()
        this.fromTreeToHash(root, 0)
    }

    find(target) {
        return this.hash.has(target)
    }

    fromTreeToHash (root, val) {
        if(!root){
            return
        }

        this.hash.add(val)

        this.fromTreeToHash(root.left, 2 * val + 1)
        this.fromTreeToHash(root.right, 2 * val + 2)
    }
}
```

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
```