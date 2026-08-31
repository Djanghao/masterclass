# O(n) Functional Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/5623814/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/5623814/)

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
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def postOrder(root):
            if not root: return 
            postOrder(root.left)
            postOrder(root.right)
            res.append(root.val)
        postOrder(root)
        return res
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
    private final List<Integer> res = new ArrayList<>();
    public List<Integer> postorderTraversal(final TreeNode root) {
        postOrder(root);
        return res;
    }
    private void postOrder(final TreeNode root){
        if (root == null) return;
        postOrder(root.left);
        postOrder(root.right);
        res.add(root.val);
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
    pub fn postorder_traversal(root: T) -> Vec<i32> {
        let mut res = Vec::new();
        fn postorder(root: T, res: &mut Vec<i32>){
            if let Some(node) = root {
                postorder(node.borrow().left.clone(), res);
                postorder(node.borrow().right.clone(), res);
                res.push(node.borrow().val);
            }
        }
        postorder(root, &mut res);
        res
    }
}
```
``` Erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec postorder_traversal(Root :: #tree_node{} | null) -> [integer()].
postorder_traversal(Root) -> postorder(Root, []).

-spec postorder(Node :: #tree_node{} | null, Acc :: [integer()]) -> [integer()].
postorder(null, Acc) -> Acc;
postorder(#tree_node{val = V, left = L, right = R}, Acc) ->
    Acc1 = postorder(L, Acc),
    Acc2 = postorder(R, Acc1),
    Acc2 ++ [V].
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
  @spec postorder_traversal(root :: TreeNode.t | nil) :: [integer]
  def postorder_traversal(root), do: postorder(root, [])
    
  @spec postorder(TreeNode.t | nil, acc :: [integer]) :: [integer]
  defp postorder(nil, acc), do: acc
  defp postorder(%TreeNode{val: v, left: l, right: r}, acc) do
    acc = postorder(l, acc)
    acc = postorder(r, acc)
    acc ++ [v]
  end
end
```