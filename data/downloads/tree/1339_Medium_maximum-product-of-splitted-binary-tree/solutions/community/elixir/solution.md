# [Rust / Elixir] Storing all subtree sums

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2895990/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2895990/)

---

One pass but uses memory to store all the subtree sums.
# Rust
```rust
use std::rc::Rc;
use std::cell::RefCell;

type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn max_product(root: OptNode) -> i32 {
        let mut v = Vec::new();
        let total = Self::tree_sum(&root, &mut v);
        (v.into_iter()
            .map(|x| x * (total - x))
            .max()
            .unwrap() % 1_000_000_007) as i32
    }

    fn tree_sum(node: &OptNode, v: &mut Vec<i64>) -> i64 {
        match node.as_ref() {
            None => 0,
            Some(n) => {
                let b = n.borrow();
                let mut ans = b.val as i64;
                ans += Self::tree_sum(&b.left, v);
                ans += Self::tree_sum(&b.right, v);
                v.push(ans);
                ans
            }
        }
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec max_product(root :: TreeNode.t | nil) :: integer
  def max_product(root) do
    {total, [_ | list]} = tree_sum(root, [])
    Enum.map(list, &(&1 * (total - &1)))
    |> Enum.max()
    |> rem(1_000_000_007)
  end

  defp tree_sum(nil, list), do: {0, list}
  defp tree_sum(node, list) do
    {l_sum, list} = tree_sum(node.left, list)
    {r_sum, list} = tree_sum(node.right, list)
    sum = l_sum + r_sum + node.val
    {sum, [sum | list]}
  end
end
```