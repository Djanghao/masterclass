# [Rust / Elixir] YARS (Yet Another Recursive Solution)

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5174622/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5174622/)

---

# Approach
Use a recursive function which returns 2 variables:
-`ans` which represents how many movements of coins inside the subtree, and also between the subtree root and its parent.
-`coin: i32` where a positive value means how many extra coins are in this subtree. A negative value means how many it is missing.

(Spent lots of time before figuring out this design of return values...)

# Code
```Rust []
use std::rc::Rc;
use std::cell::RefCell;
type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn distribute_coins(root: OptNode) -> i32 {
        Self::dfs(&root).0
    }

    fn dfs(node: &OptNode) -> (i32, i32) {
        match node.as_ref() {
            None => (0, 0),
            Some(n) => {
                let b = n.borrow();
                let (l_ans, l_coin) = Self::dfs(&b.left);
                let (r_ans, r_coin) = Self::dfs(&b.right);
                let coin = l_coin + r_coin + b.val - 1;
                let ans = l_ans + r_ans + coin.abs();
                (ans, coin)
            }
        }
    }
}
```
```Elixir []
defmodule Solution do
  @spec distribute_coins(root :: TreeNode.t | nil) :: integer
  def distribute_coins(root) do
    dfs(root)
    |> elem(0)
  end

  defp dfs(nil), do: {0, 0}
  defp dfs(node) do
    {l_ans, l_coin} = dfs(node.left)
    {r_ans, r_coin} = dfs(node.right)
    coin = l_coin + r_coin + node.val - 1
    ans = l_ans + r_ans + abs(coin)
    {ans, coin}
  end
end
```