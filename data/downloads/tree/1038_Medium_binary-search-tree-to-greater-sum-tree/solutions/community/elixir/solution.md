# [Rust / Elixir] YARS (Yet Another Recursive Solution)

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364943/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5364943/)

---

# Code
```Rust []
use std::rc::Rc;
use std::cell::RefCell;
type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn bst_to_gst(root: OptNode) -> OptNode {
        Self::rev_sum(&root, &mut 0);
        root
    }

    fn rev_sum(node: &OptNode, sum: &mut i32) {
        if let Some(n) = node.as_ref() {
            let mut b = n.borrow_mut();
            Self::rev_sum(&b.right, sum);
            *sum += b.val;
            b.val = *sum;
            Self::rev_sum(&b.left, sum);
        }
    }
}
```
```Elixir []
defmodule Solution do
  @spec bst_to_gst(root :: TreeNode.t | nil) :: TreeNode.t | nil
  def bst_to_gst(root) do
    rev_sum(root, 0)
    |> elem(0)
  end

  defp rev_sum(nil, sum), do: {nil, sum}
  defp rev_sum(node, sum) do
    {right, r_sum} = rev_sum(node.right, sum)
    {left, l_sum} = rev_sum(node.left, node.val + r_sum)
    {%TreeNode{val: node.val + r_sum, left: left, right: right}, l_sum}
  end
end
```