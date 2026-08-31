# 0 ms java || python

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/same-tree/solutions/4785658/](https://leetcode.com/problems/same-tree/solutions/4785658/)

---

![Screenshot 2024-02-26 at 18.08.12.png](./images/0.png)

# Code
``` java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        } else if (p != null && q != null) {
            if (p.val != q.val) {
                return false;
            }

            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        } else {
            return false;
        }
    }
}
```
``` python []
class Solution(object):
    def isSameTree(self, p, q):
        if p == None and q == None:
            return True
        elif p != None and q != None:
            if p.val != q.val:
                return False
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
        else:
            return False
        
```