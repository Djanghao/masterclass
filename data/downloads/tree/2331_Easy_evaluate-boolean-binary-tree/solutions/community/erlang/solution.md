# O(n) Functional Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5619258/](https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/5619258/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def evaluateTree(self, root: Optional[TreeNode]) -> bool:
        match root.val: 
            case 0: return False
            case 1: return True 
            case 2: return self.evaluateTree(root.left) or self.evaluateTree(root.right)
            case _: return self.evaluateTree(root.left) and self.evaluateTree(root.right)
```
``` java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
final class Solution {
    public boolean evaluateTree(final TreeNode root) {
        return switch(root.val){
            case 0 -> false;
            case 1 ->  true;
            case 2  -> evaluateTree(root.left) || evaluateTree(root.right);
            default -> evaluateTree(root.left) && evaluateTree(root.right); 
        };
    }
}
```
``` rust []
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::{rc::Rc, cell::RefCell};
impl Solution {
    pub fn evaluate_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        let node = root.as_ref().unwrap().borrow();
        match node.val {
            0 => false,
            1 => true,
            2 => Self::evaluate_tree(node.left.clone()) || Self::evaluate_tree(node.right.clone()),
            _ => Self::evaluate_tree(node.left.clone()) && Self::evaluate_tree(node.right.clone()),
        }
    }
}
```
``` Erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec evaluate_tree(Root :: #tree_node{} | null) -> boolean().
evaluate_tree(#tree_node{val = 0, left = null, right = null}) -> false;
evaluate_tree(#tree_node{val = 1, left = null, right = null}) -> true;
evaluate_tree(#tree_node{val = 2, left = L, right = R}) -> evaluate_tree(L) orelse evaluate_tree(R);
evaluate_tree(#tree_node{val = 3, left = L, right = R}) -> evaluate_tree(L) andalso evaluate_tree(R).
```
``` Elixir []
# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end

defmodule Solution do
  @spec evaluate_tree(root :: TreeNode.t | nil) :: boolean
  def evaluate_tree(%TreeNode{val: 0, left: nil, right: nil}), do: false
  def evaluate_tree(%TreeNode{val: 1, left: nil, right: nil}), do: true
  def evaluate_tree(%TreeNode{val: 2, left: l, right: r}), do: evaluate_tree(l) or evaluate_tree(r)
  def evaluate_tree(%TreeNode{val: 3, left: l, right: r}), do: evaluate_tree(l) and evaluate_tree(r) 
end
```