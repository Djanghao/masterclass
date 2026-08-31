# [Rust / Elixir] 2 solutions

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/3179443/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/3179443/)

---

# Rust
A stack is used. Each node will be pushed inside and popped out the stack thrice, each time paired with a different enum value.
```rust
use std::rc::Rc;
use std::cell::RefCell;
type OptNode = Option<Rc<RefCell<TreeNode>>>;

enum Order { Left, Right, Own }

impl Solution {
    pub fn postorder_traversal(root: OptNode) -> Vec<i32> {
        let mut stack = vec![(root, Order::Left)];
        let mut ans = Vec::new();
        loop {
            match stack.pop() {
                None => break ans,
                Some((None, _)) => (),
                Some((Some(n), Order::Left)) => {
                    let left = n.borrow().left.clone();
                    stack.push((Some(n), Order::Right));
                    stack.push((left, Order::Left));
                }
                Some((Some(n), Order::Right)) => {
                    let right = n.borrow().right.clone();
                    stack.push((Some(n), Order::Own));
                    stack.push((right, Order::Left));
                }
                Some((Some(n), Order::Own)) => {
                    ans.push(n.borrow().val);
                }
            }
        }
    }
}
```
# Elixir
Trivial recursive solution: self <- right <- left
```elixir
defmodule Solution do
  @spec postorder_traversal(root :: TreeNode.t | nil) :: [integer]
  def postorder_traversal(root) do
    trivial([], root)
  end

  defp trivial(ans, nil), do: ans
  defp trivial(ans, node) do
    [node.val | ans]
    |> trivial(node.right)
    |> trivial(node.left)
  end
end
```