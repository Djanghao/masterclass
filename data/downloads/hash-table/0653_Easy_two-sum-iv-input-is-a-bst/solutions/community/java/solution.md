# 6 line Java Solution

**Author:** himanshuramranjan
**Votes:** 34
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1578715/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1578715/)

---

**Upvote if you Like**

class Solution {

    Set<Integer> res = new HashSet<>();
    public boolean findTarget(TreeNode root, int k) {
        if(root==null)
            return false;
        if(res.contains(k-root.val))
            return true;
        res.add(root.val);
        return findTarget(root.left,k) || findTarget(root.right,k);
    }
}