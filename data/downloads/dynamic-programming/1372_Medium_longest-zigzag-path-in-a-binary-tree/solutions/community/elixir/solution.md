# [Rust / Elixir] YARS (Yet Another Recursive Solution)

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3433112/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3433112/)

---

# Code
```Rust []
use std::rc::Rc;
use std::cell::RefCell;
type OptNode = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn longest_zig_zag(root: OptNode) -> i32 {
        fn dfs(node: &OptNode, l_count: i32, r_count: i32) -> i32 {
            match node.as_ref() {
                None => l_count.max(r_count) - 1,
                Some(n) => {
                    let b = n.borrow();
                    dfs(&b.left, r_count + 1, 0)
                    .max(dfs(&b.right, 0, l_count + 1))
                }
            }
        }
        dfs(&root, 0, 0)
    }
}
```
```Elixir []
defmodule Solution do
  @spec longest_zig_zag(root :: TreeNode.t | nil) :: integer
  def longest_zig_zag(root) do
    dfs(root, 0, 0)
  end

  defp dfs(nil, l_count, r_count) do
    max(l_count, r_count) - 1
  end
  defp dfs(node, l_count, r_count) do
    dfs(node.left, r_count + 1, 0)
    |> max(dfs(node.right, 0, l_count + 1))
  end
end
```