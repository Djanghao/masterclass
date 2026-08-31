# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 125
**Link:** [https://leetcode.com/problems/same-tree/solutions/4782659/](https://leetcode.com/problems/same-tree/solutions/4782659/)

---

# DO GIVE IT A LIKE IF THAT WAS HELPFUL\uD83E\uDEE1\uD83D\uDC47



---
![Screenshot 2024-02-26 063421.png](./images/0.png)


---


# Approaches
(Also explained in the code)

1. **Base Case Handling:** Checks if both trees are empty. If so, returns true.
1. **Null Check:** If one tree is empty while the other is not, returns false.
1. **Value Comparison:** Compares the values of the current nodes in both trees.
1. **Recursive Calls:** Recursively calls the function for left subtrees and right subtrees.
1. **Return:** Returns true if all conditions hold true, indicating identical trees; otherwise, returns false.



# Complexity
- Time complexity:
   $$O(n)$$
*(n is the number of nodes in the tree)*
    

- Space complexity:
   $$O(h)$$
*(h is the height of the tree)*   


# Code
```C++ []
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if(!p && !q)    return true;
        if(!p || !q)    return false;
        return p->val==q->val && isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};



```
```Java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}


```
```python3 []
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if not p and not q:
            return True
        if not p or not q:
            return False
        return p.val == q.val and self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)


```
```javascript []
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};



```
---





# DO GIVE IT A LIKE IF THAT WAS HELPFUL\uD83E\uDEE1\uD83D\uDC47

---
---


---