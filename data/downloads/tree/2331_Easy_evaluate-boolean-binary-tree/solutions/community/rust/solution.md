# 🔥 BEATS ~100% | ✅ [ C++ / Java / Py / JS / GO / C / C# / Rust ]

**Author:** Neoni_77
**Votes:** 5
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5163998/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5163998/)

---



```java []
class Solution {
    public boolean evaluateTree(TreeNode root) {
        if(root.val == 0) return false;
        if(root.val == 1) return true;

        boolean left = evaluateTree(root.left);
        boolean right = evaluateTree(root.right);

        return root.val == 2 ? left|right : left&right;
    }
}
```
```python []
class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return False
        if root.val == 0:
            return False
        if root.val == 1:
            return True
        left = self.evaluateTree(root.left)
        right = self.evaluateTree(root.right)
        return root.val == 2 and (left or right) or (left and right)

```
```C++ []
class Solution {
public:
    bool evaluateTree(TreeNode* root) {
        if(root->val == 0) return false;
        if(root->val == 1) return true;
        bool left = evaluateTree(root->left);
        bool right = evaluateTree(root->right);
        return root->val == 2 ? left | right : left & right;
    }
};

```
```Javascript []
var evaluateTree = function(root) {
    if (!root) return false;
    if (root.val === 0) return false;
    if (root.val === 1) return true;
    let left = evaluateTree(root.left);
    let right = evaluateTree(root.right);
    return root.val === 2 ? left | right : left & right;
};

```

```C []
bool evaluateTree(struct TreeNode* root) {
    if(root->val == 0) return false;
    if(root->val == 1) return true;
    bool left = evaluateTree(root->left);
    bool right = evaluateTree(root->right);
    return root->val == 2 ? left | right : left & right;
}

```

```C# []
public class Solution {
    public bool EvaluateTree(TreeNode root) {
        if (root == null) {
            return false;
        }
        if (root.val == 0) {
            return false;
        }
        if (root.val == 1) {
            return true;
        }
        bool left = EvaluateTree(root.left);
        bool right = EvaluateTree(root.right);
        return root.val == 2 ? left | right : left & right;
    }
}

```

```Go []
func evaluateTree(root *TreeNode) bool {
    if root == nil {
        return false
    }
    if root.Val == 0 {
        return false
    }
    if root.Val == 1 {
        return true
    }
    left := evaluateTree(root.Left)
    right := evaluateTree(root.Right)
    if root.Val == 2 {
        return left || right
    } else {
        return left && right
    }
}

```
```Rust []
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn evaluate_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        if let Some(node) = root {
            let node = node.borrow();
            if node.val == 0 {
                return false;
            }
            if node.val == 1 {
                return true;
            }
            let left = Solution::evaluate_tree(node.left.clone());
            let right = Solution::evaluate_tree(node.right.clone());
            return node.val == 2 && (left | right) || (left & right);
        }
        false
    }
}

```
NOTE: THE FOLLOWING IMPLEMENTATION BEATS 100% IN JAVA .. DON'T KNOW ABOUT OTHER CODES

UPVOTE IF IT HELPED\u2B06\uFE0F

