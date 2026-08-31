# O(n) Functional Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/5623794/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/5623794/)

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
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def preorder(root):
            if not root: return 
            res.append(root.val)
            preorder(root.left)
            preorder(root.right)
        preorder(root)
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
    public List<Integer> preorderTraversal(final TreeNode root) {
        preorder(root);
        return res;
    }
    private void preorder(final TreeNode root){
        if (root == null)return;
        res.add(root.val);
        preorder(root.left);
        preorder(root.right);
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
    pub fn preorder_traversal(root: T) -> Vec<i32> {
        let mut res = Vec::new();
        fn preorder(root: T, res: &mut Vec<i32>){
            if let Some(node) = root {
                res.push(node.borrow().val);
                preorder(node.borrow().left.clone(), res);
                preorder(node.borrow().right.clone(), res);
            }
        }
        preorder(root, &mut res);
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

-spec preorder_traversal(Root :: #tree_node{} | null) -> [integer()].
preorder_traversal(Root) -> preorder(Root, []).

-spec preorder(Node :: #tree_node{} | null, Acc :: [integer()]) -> [integer()].
preorder(null, Acc) -> Acc;
preorder(#tree_node{val = V, left = L, right = R}, Acc) ->
    Acc1 = Acc ++ [V],
    Acc2 = preorder(L, Acc1),
    preorder(R, Acc2).
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
  @spec preorder_traversal(root :: TreeNode.t | nil) :: [integer]
  def preorder_traversal(root), do: preorder(root, [])

  @spec preorder(TreeNode.t | nil, acc :: [integer]) :: [integer]
  defp preorder(nil, acc), do: acc
  defp preorder(%TreeNode{val: v, left: l, right: r}, acc) do 
    acc = acc ++ [v]
    acc = preorder(l, acc)
    preorder(r, acc)
  end
end
```