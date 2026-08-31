# [Iterative and Recursive] - JavaScript/TypeScript

**Author:** dustinkiselbach
**Votes:** 6
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/958482/](https://leetcode.com/problems/increasing-order-search-tree/solutions/958482/)

---

Iterative Solution: 
```
function increasingBST(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null
    }

    let stack: TreeNode[] = []
    let curr: TreeNode | null = root

    const dummyHead = new TreeNode()
    let holdingPointer = dummyHead
    

    while (stack.length || curr) {
        if (curr) {
            stack.push(curr)
            curr = curr.left
        } else {
            let temp = stack.pop()
            if (temp) {
                holdingPointer.right = new TreeNode(temp.val)
                holdingPointer = holdingPointer.right
                curr = temp.right
            }
            
        }
    }
    return dummyHead.right
};
```
Recursive Solution: 
```
function increasingBST(root: TreeNode | null): TreeNode | null {
    const dummyHead = new TreeNode()
    let temp = dummyHead
    function inOrder(root:TreeNode | null) {
        if (!root) return

        if (root.left) {
            inOrder(root.left)
        }

        temp.right = new TreeNode(root.val)
        temp = temp.right

        if (root.right) {
            inOrder(root.right)
        }
    }

    inOrder(root)

    return dummyHead.right
};
```