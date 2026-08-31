# 🚀️🔥️ Elixir simplest recursive solution - beats 100%

**Author:** Klemo1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/3296603/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/3296603/)

---

# Approach
We can't do this bottom up, because we'd lose the information about count of distinct paths. Instead the top-down approach is the way to go.
Collect the state from root to leafs and sum them on the way up.

# Complexity
- Time complexity:
$$O(n)$$ - we have to visit all nodes

- Space complexity:
$$O(n)$$ - allocated in call stack in worst case

# Code
```
defmodule Solution do
  @spec sum_numbers(root :: TreeNode.t | nil) :: integer
  def sum_numbers(root), do: rec_sum(root, 0)

  @spec rec_sum(node :: TreeNode.t | nil, current :: integer) :: integer
  def rec_sum(nil, _), do: 0
  def rec_sum(node, current) do
    next = node.val + (current * 10)
    is_leaf? = node.left == nil and node.right == nil
    if is_leaf?, do: next, else: rec_sum(node.left, next) + rec_sum(node.right, next)
  end
end
```