# Solved using level of nodes (easy solution)

**Author:** akibur227
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/3127466/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/3127466/)

---

# Code
```
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    const getZigZagValues = (nodes: TreeNode[], position: number): number[] => {
        const values = nodes.map(node => node.val)

        if (position % 2 === 1) {
            values.reverse()
        }

        return values
    }

    const result = []
    let level = [root]
    let count = 0

    while (level.length) {
        let queue = []

        result.push(getZigZagValues(level, count))

        level.map(node => {
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        })

        level = queue
        count += 1
    }

    return result
};
```