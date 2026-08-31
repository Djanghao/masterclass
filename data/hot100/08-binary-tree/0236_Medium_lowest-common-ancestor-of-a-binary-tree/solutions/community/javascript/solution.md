# JavaScript solution

**Author:** linfongi
**Votes:** 95
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/65372/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/65372/)

---

    function lowestCommonAncestor(root, p, q) {
      if (!root || root === p || root === q) return root;
      var resL = lowestCommonAncestor(root.left, p, q);
      var resR = lowestCommonAncestor(root.right, p, q);
      return (resL && resR) ? root : (resL || resR);
    }