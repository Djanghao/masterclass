# TypeScript faster than 100%

**Author:** special-character
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/1126440/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/1126440/)

---

```
const buildTree = (inorder: number[], postorder: number[]): TreeNode | null => {
  if (inorder.length === 1) return new TreeNode(inorder[0])
  // Make a map of indexes for the inorder traversal
  const inorderMap: { [inorderVal: number]: number } = {}
  inorder.forEach((inorderVal, i) => (inorderMap[inorderVal] = i))

  /**
   * At each level, build the tree from this node
   */
  const treeFromHere = (startIdx: number, endIdx: number): TreeNode | null => {
    if (startIdx > endIdx) return null
    const root = new TreeNode(postorder.pop()!) // root comes from the postorder right
    const inorderIndex = inorderMap[root.val]

    /**
     * The right most node is the root for postorder traversals
     * Since we are getting the root at every recursive call (by popping the postorder) we need to do the right first
     * This is basically going in reverse of postorder
     */
    root.right = treeFromHere(inorderIndex + 1, endIdx)
    root.left = treeFromHere(startIdx, inorderIndex - 1)
    return root
  }

  return treeFromHere(0, postorder.length - 1)
}
```