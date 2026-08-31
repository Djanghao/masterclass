# ✅ Recursion in java / javascript / c / python / c / php / go / rust / racket

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5169595/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5169595/)

---



# Code
``` java []
class Solution {
    public TreeNode removeLeafNodes(TreeNode root, int target) {
        if (root == null) return null;
        
        root.left = removeLeafNodes(root.left, target);
        root.right = removeLeafNodes(root.right, target);

        if (root.left == null && root.right == null && root.val == target) {
            return null;
        }

        return root;
    }
}
```
``` python []
class Solution(object):
    def removeLeafNodes(self, root, target):
        if not root:
            return None
        
        root.left = self.removeLeafNodes(root.left, target)
        root.right = self.removeLeafNodes(root.right, target)

        if root.left == None and root.right == None and target == root.val:
            return None

        return root     
```
``` c []
struct TreeNode* removeLeafNodes(struct TreeNode* root, int target) {
    if (root != NULL) {

        root->left = removeLeafNodes(root->left, target);
        root->right = removeLeafNodes(root->right, target);

        if (root->left == NULL && root->right == NULL && root->val == target) {
            free(root);
            return NULL;
        }
    }

    return root;
}
```
``` javascript []
var removeLeafNodes = function (root, target) {
    if (root == null) return null;
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    if (root.left == null && root.right == null && root.val == target) {
        return null;
    }

    return root;
};
```
``` php []
class Solution {
    function removeLeafNodes($root, $target) {
        if ($root == null) return null;

        $root->left = $this->removeLeafNodes($root->left, $target);
        $root->right = $this->removeLeafNodes($root->right, $target);

        if ($root->left == null && $root->right == null && $root->val == $target) {
            return null;
        }

        return $root;
    }
}
```
``` golang []
func removeLeafNodes(root *TreeNode, target int) *TreeNode {
    if root != nil {
        root.Left = removeLeafNodes(root.Left, target)
        root.Right = removeLeafNodes(root.Right, target)

        if (root.Left == nil && root.Right == nil && root.Val == target) {
            return nil
        }
    }

    return root
}
```
``` ruby []
def remove_leaf_nodes(root, target)
    return nil if root.nil?

    root.left = remove_leaf_nodes(root.left, target)
    root.right = remove_leaf_nodes(root.right, target)

    return nil if root.left.nil? && root.right.nil? && root.val == target

    return root
end
```
``` rust []
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn remove_leaf_nodes(root: Option<Rc<RefCell<TreeNode>>>, target: i32) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(node) = root {
            let mut node_borrow = node.borrow_mut();
            node_borrow.left = Solution::remove_leaf_nodes(node_borrow.left.clone(), target);
            node_borrow.right = Solution::remove_leaf_nodes(node_borrow.right.clone(), target);

            if node_borrow.left.is_none() && node_borrow.right.is_none() && node_borrow.val == target {
                return None;
            }

            Some(node.clone())
        } else {
            None
        }
    }
}
```
``` racket []
(define (remove-leaf-nodes root target)
    (if (not root) #f
        (let* ([left (remove-leaf-nodes (tree-node-left root) target)]
               [right (remove-leaf-nodes (tree-node-right root) target)]
               [val (tree-node-val root)]
               [newRoot (tree-node val left right)])
            (if (and (not left) (not right) (eq? target val))
                #f
                newRoot))))
```