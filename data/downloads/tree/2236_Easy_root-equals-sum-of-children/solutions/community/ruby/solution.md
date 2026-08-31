# Every Programming Language! C++, Java, Python, C, C#, JavaScript, Ruby, Swift, Go, Scala, and More!

**Author:** domthedeveloper
**Votes:** 3
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/1947025/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/1947025/)

---

If you think this question is too easy, complete it in every programming language offered by LeetCode.

**C++**:
```
class Solution {
public:
    bool checkTree(TreeNode* root) {
        return root->val == root->left->val + root->right->val;
    }
};
```

**Java**:
```
class Solution {
    public boolean checkTree(TreeNode root) {
        return root.val == root.right.val + root.left.val;
    }
}
```

**Python**:
```
class Solution(object):
    def checkTree(self, root):
        return root.val == root.right.val + root.left.val
```

**Python 3**:
```
class Solution:
    def checkTree(self, root: Optional[TreeNode]) -> bool:
        return root.val == root.right.val + root.left.val
```

**C**:
```
bool checkTree(struct TreeNode* root){
    return root->val == root->left->val + root->right->val;
}
```

**C#**:
```
public class Solution {
    public bool CheckTree(TreeNode root) {
        return root.val == root.left.val + root.right.val;
    }
}
```

**JavaScript**:
```
var checkTree = function(root) {
    return root.val == root.left.val + root.right.val;
};
```

**Ruby**:
```
def check_tree(root)
    return root.val == root.left.val + root.right.val
end
```

**Swift**:
```
class Solution {
    func checkTree(_ root: TreeNode?) -> Bool {
        return root!.val == root!.left!.val + root!.right!.val
    }
}
```

**Go**:
```
func checkTree(root *TreeNode) bool {
    return root.Val == root.Left.Val + root.Right.Val;
}
```

**Scala**:
```
object Solution {
    def checkTree(root: TreeNode): Boolean = {
        return root.value == root.left.value + root.right.value
    }
}
```

**Kotlin**:
```
class Solution {
    fun checkTree(root: TreeNode?): Boolean {
        return root!!.`val` == root!!.left!!.`val` + root!!.right!!.`val`
    }
}
```

**Rust**:
```
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn check_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        let root = root.as_ref().unwrap().borrow();    
        return root.val == root.left.as_ref().unwrap().borrow().val + root.right.as_ref().unwrap().borrow().val;
    }
}
```

**PHP**:
```
class Solution {
    function checkTree($root) {
        return $root->val == $root->left->val + $root->right->val;
    }
}
```

**TypeScript**:
```
function checkTree(root: TreeNode | null): boolean {
    return root.val == root.left.val + root.right.val;
};
```

**Racket**:
```
(define/contract (check-tree root)
  (-> (or/c tree-node? #f) boolean?)
    (eq? (tree-node-val root) (+ (tree-node-val (tree-node-left root)) (tree-node-val (tree-node-right root))))
  )
```

**Erlang**:
```
-spec check_tree(Root :: #tree_node{} | null) -> boolean().
check_tree(Root) ->
  Root#tree_node.val == Root#tree_node.left#tree_node.val + Root#tree_node.right#tree_node.val.
```

**Elixir**:
```
defmodule Solution do
  @spec check_tree(root :: TreeNode.t | nil) :: boolean
  def check_tree(root) do
    root.val == root.left.val + root.right.val
  end
end
```