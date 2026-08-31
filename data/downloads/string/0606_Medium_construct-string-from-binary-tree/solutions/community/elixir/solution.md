# Simple Elixir solution with recursion

**Author:** stephcrown
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4377936/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/4377936/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
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
  @spec tree2str(root :: TreeNode.t | nil) :: String.t
  def tree2str(root), do: "#{root.val}#{get_left(root)}#{get_right(root)}"

  def get_left(%{left: nil, right: nil}), do: ""
  def get_left(%{left: nil, right: _right}), do: "()"
  def get_left(%{left: left}), do: "(#{tree2str(left)})"

  def get_right(%{right: nil}), do: ""
  def get_right(%{right: right}), do: "(#{tree2str(right)})"
end
```