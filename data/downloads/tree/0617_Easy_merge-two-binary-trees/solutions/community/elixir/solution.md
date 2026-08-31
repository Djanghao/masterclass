# O(n) Functional Soln

**Author:** ozzyozbourne
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/5620306/](https://leetcode.com/problems/merge-two-binary-trees/solutions/5620306/)

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
    def mergeTrees(self, r1: Optional[TreeNode], r2: Optional[TreeNode]) -> Optional[TreeNode]:
        match (r1, r2):
            case (None, None): return None
            case (None, r) | (r, None): return r
            case _: 
                r1.val += r2.val
                r1.left = self.mergeTrees(r1.left, r2.left) 
                r1.right = self.mergeTrees(r1.right, r2.right) 
                return r1 
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
    public TreeNode mergeTrees(TreeNode r1, final TreeNode r2) {
        if (r1 == null && r2 == null) return null;
        else if (r1 == null) return r2;
        else if (r2 == null) return r1;
        else {
            r1.val += r2.val;
            r1.left = mergeTrees(r1.left, r2.left);
            r1.right = mergeTrees(r1.right, r2.right);
            return r1;
        }
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
type T = Option<Rc<RefCell<TreeNode>>>;
impl Solution {
    pub fn merge_trees(r1: T, r2: T) -> T {
        match (r1, r2) {
            (None, None) => None,
            (None, Some(n)) | (Some(n), None) => Some(n),
            (Some(n1), Some(n2)) => {
                {
                    let (mut n1, n2) = (n1.borrow_mut(), n2.borrow());
                    n1.val += n2.val;
                    n1.left =  Solution::merge_trees(n1.left.clone(), n2.left.clone());
                    n1.right = Solution::merge_trees(n1.right.clone(), n2.right.clone());
                }
                Some(n1)
            }
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

-spec merge_trees(R1 :: #tree_node{} | null, R2 :: #tree_node{} | null) -> #tree_node{} | null.
merge_trees(null, null) -> null;
merge_trees(R, null) -> R;
merge_trees(null, R) -> R;
merge_trees(R1, R2) ->
    #tree_node{
        val = R1#tree_node.val + R2#tree_node.val,
        left = merge_trees(R1#tree_node.left, R2#tree_node.left),
        right = merge_trees(R1#tree_node.right, R2#tree_node.right)
    }.
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
  @spec merge_trees(r1 :: TreeNode.t | nil, r2 :: TreeNode.t | nil) :: TreeNode.t | nil
  def merge_trees(nil, nil), do: nil
  def merge_trees(r, nil), do: r
  def merge_trees(nil, r), do: r
  def merge_trees(r1, r2), do: %TreeNode{val: r1.val + r2.val, left: merge_trees(r1.left, r2.left), right: merge_trees(r1.right, r2.right)}  
end
```