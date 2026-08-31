# My solution in javascript

**Author:** WalterInSH
**Votes:** 147
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/34445/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/34445/)

---

    var maxDepth = function(root) {
        if(root === undefined || root===null){
            return 0;
        }
        return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
    };