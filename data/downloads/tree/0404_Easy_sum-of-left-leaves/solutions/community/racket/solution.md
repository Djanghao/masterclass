# 🔃 recursion in java | python | c | javascript | php | go | ruby | racket

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/5021662/](https://leetcode.com/problems/sum-of-left-leaves/solutions/5021662/)

---

# Code
``` java []
class Solution {
    public int sumOfLeftLeaves(TreeNode root) {       
        if (root == null) {
            return 0;
        }

        int sum = 0;
        if (root.left != null && root.left.left == null && root.left.right == null) {
            sum += root.left.val ;
        }
        
        return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);       
    }
}
```
``` python []
class Solution(object):
    def sumOfLeftLeaves(self, root):
        if not root:
            return 0
        sum = 0
        if root.left and not root.left.left and not root.left.right:
            sum += root.left.val
        
        return sum + self.sumOfLeftLeaves(root.left) + self.sumOfLeftLeaves(root.right)
```
``` c []
int sumOfLeftLeaves(struct TreeNode* root) {
    if (root == NULL) return 0;

    int sum = 0;
    if (root->left != NULL 
            && root->left->left == NULL 
            && root->left->right == NULL) {
        sum = root->left->val;
    }

    sum += sumOfLeftLeaves(root->left);
    sum += sumOfLeftLeaves(root->right);
    return sum;
}
```
``` javascript []
var sumOfLeftLeaves = function(root) {
    if (root == null) {
        return 0;
    }

    var sum = 0;
    if (root.left != null 
            && root.left.left == null
            && root.left.right == null) {
                sum = root.left.val;
    }

    return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
```
``` php []
class Solution {
    function sumOfLeftLeaves($root) {
        if ($root == null) return 0;

        $sum = 0;
        if ($root->left != null 
                && $root->left->left == null
                && $root->left->right == null) {
            $sum = $root->left->val;
        }

        return $sum + $this->sumOfLeftLeaves($root->left) + $this->sumOfLeftLeaves($root->right);
    }
}
```
``` golang []
func sumOfLeftLeaves(root *TreeNode) int {
    if root == nil {
        return 0
    }

    sum := 0
    if root.Left != nil && root.Left.Left == nil && root.Left.Right == nil {
        sum = root.Left.Val
    }

    return sum + sumOfLeftLeaves(root.Left) + sumOfLeftLeaves(root.Right);
}
```
``` ruby []
def sum_of_left_leaves(root)
    return 0 if root == nil

    sum = 0
    sum = root.left.val if root.left != nil && root.left.left == nil && root.left.right == nil

    return sum + sum_of_left_leaves(root.left) + sum_of_left_leaves(root.right)

end
```
``` racket []
(define (sum-of-left-leaves root)
  (cond [(eq? root #f) 0]
        [(and (not (eq? (tree-node-left root) #f)) (eq? (tree-node-left (tree-node-left root)) #f) (eq? (tree-node-right (tree-node-left root)) #f))
         (+ (tree-node-val (tree-node-left root)) (sum-of-left-leaves (tree-node-right root)))]
        [else (+ (sum-of-left-leaves (tree-node-left root)) (sum-of-left-leaves (tree-node-right root)))]))
```