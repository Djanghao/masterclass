# ✅🚀 TS Easy Solution || Recursive

**Author:** viniciusteixeiradias
**Votes:** 24
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/2771896/](https://leetcode.com/problems/symmetric-tree/solutions/2771896/)

---

Let me know in comments if you have any doubts. I will be happy to answer.
Please upvote if you found the solution useful.

```
const isSymmetric = (root: TreeNode | null): boolean => {
  return isMirror(root, root);
};
  
const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  
  return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}
```