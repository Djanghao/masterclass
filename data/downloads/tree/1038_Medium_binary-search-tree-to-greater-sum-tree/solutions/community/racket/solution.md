# ✅ the best recursive solution | easy to understand

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5367417/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5367417/)

---

# Code
``` java []
class Solution {
    public int updateNode(TreeNode root, int sum) {
        if (root == null) return sum;
        root.val += updateNode(root.right, sum);
        return updateNode(root.left, root.val);
    }

    public TreeNode bstToGst(TreeNode root) {
        updateNode(root, 0);
        return root;
    }
}
```
``` c []
int updateNode(struct TreeNode* root, int sum) {
    if (root == NULL) return sum;
    root->val += updateNode(root->right, sum);
    return updateNode(root->left, root->val);
}

struct TreeNode* bstToGst(struct TreeNode* root) {
    updateNode(root, 0);
    return root;
}
```
``` python []
class Solution(object):
    def bstToGst(self, root):
        def updateNode(root, sum):
            if not root:
                return sum
            root.val += updateNode(root.right, sum)
            return updateNode(root.left, root.val)
        updateNode(root, 0)
        return root
```
``` javascript []
var bstToGst = function(root) {
    (function updateNode(root, sum) {
        if (root == null) return sum;
        root.val += updateNode(root.right, sum);
        return updateNode(root.left, root.val);
    })(root, 0);

    return root;
};
```
``` php []
function updateNode($root, $sum) {
    if ($root == null) return $sum;
    $root->val += updateNode($root->right, $sum);
    return updateNode($root->left, $root->val);
};

class Solution {
    function bstToGst($root) {
        updateNode($root, 0);
        return $root;
    }
}
```
``` golang []
func updateNode(root *TreeNode, sum int) int {
    if root == nil {
        return sum
    }

    root.Val += updateNode(root.Right, sum)
    return updateNode(root.Left, root.Val)
}

func bstToGst(root *TreeNode) *TreeNode {
    updateNode(root, 0)

    return root
}
```
``` racket []
(define (bst-to-gst root)
  (begin
    (let updateNode ([root root]
                     [sum 0])
      (cond [(eq? root #f) sum]
            [else (begin
                    (set-tree-node-val! root (+ (tree-node-val root) (updateNode (tree-node-right root) sum)))
                    (updateNode (tree-node-left root) (tree-node-val root)))]))
    root))
```

Have a nice day \uD83D\uDC4D