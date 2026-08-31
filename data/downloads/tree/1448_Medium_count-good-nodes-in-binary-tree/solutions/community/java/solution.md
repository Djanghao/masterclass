# Java | 100% | Simple & Easy Code Using Pre-Order Tree Traversal

**Author:** onefineday01
**Votes:** 54
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/635555/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/635555/)

---

```
class Solution {
    int good;
    public int goodNodes(TreeNode root) {
        good = 0;
        cal(root, Integer.MIN_VALUE);
        return good;
    }
    void cal(TreeNode root, int max){
        if(root == null) return;
        if(root.val >= max) good++;
        max = Math.max(max, root.val);
        cal(root.left, max);
        cal(root.right, max);
    }
}