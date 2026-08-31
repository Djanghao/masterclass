# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/5622967/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/5622967/)

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
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def inorder(root):
            if not root: return 
            inorder(root.left)
            res.append(root.val)
            inorder(root.right)
        inorder(root)
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
class Solution {
    private final List<Integer> res = new ArrayList<>();
    public List<Integer> inorderTraversal(TreeNode root) {
        inorder(root);
        return res;
    }

    private void inorder(final TreeNode root){
        if (root == null) return;
        else {
            inorder(root.left);
            res.add(root.val);
            inorder(root.right);
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
    pub fn inorder_traversal(root: T) -> Vec<i32> {
        let mut res = Vec::new();
        fn inorder(root: T, res: &mut Vec<i32>) {
            if let Some(node) = root {
                inorder(node.borrow().left.clone(), res);
                res.push(node.borrow().val);
                inorder(node.borrow().right.clone(), res);
            }
        }
        inorder(root, &mut res);
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

-spec inorder_traversal(Root :: #tree_node{} | null) -> [integer()].
inorder_traversal(Root) -> inorder(Root, []).

-spec inorder(#tree_node{} | null, Acc :: [integer()]) -> [integer()].
inorder(null, Acc) -> Acc;
inorder(#tree_node{val = V, left = L, right = R}, Acc) -> 
    Acc1 = inorder(L, Acc),
    Acc2 = Acc1 ++ [V],
    inorder(R, Acc2).
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
  @spec inorder_traversal(root :: TreeNode.t | nil) :: [integer]
  def inorder_traversal(root), do: inorder(root, [])

  @spec inorder(TreeNode.t() | nil, acc :: [integer()]) :: [integer()]  
  defp inorder(nil, acc), do: acc
  defp inorder(%TreeNode{val: v, left: l, right: r}, acc) do
    acc = inorder(l, acc)
    acc = acc ++ [v]
    inorder(r, acc)
  end  
end
```