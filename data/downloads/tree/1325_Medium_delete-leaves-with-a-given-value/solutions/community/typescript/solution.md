# typescript, elegant recursive solution w/ comments

**Author:** carti
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/844110/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/844110/)

---

```
function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    // base case (null root)
    if (!root) return null;

    // set left and right subtrees (before bottom case)
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    // check if node is LEAF and TARGET
    if (!root.left && !root.right && root.val === target) {
        // delete this node (just by setting it null)
        return null;
    }

    // result is stored back in root, after recursion bubbles thru tree
    return root;
}
```
