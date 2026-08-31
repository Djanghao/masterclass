# Elixir - Recursive BFS with mainly pattern matching

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/4802157/](https://leetcode.com/problems/even-odd-tree/solutions/4802157/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
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
  @spec is_even_odd_tree(root :: TreeNode.t | nil) :: boolean
  def is_even_odd_tree(root) do
    check(0, [root])
  end
  defp check(_, []), do: true
  defp check(rem, nodes) do
    rem = rem(rem, 2)
    case rem do
      0 -> asc(nodes)
      1 -> desc(nodes)
    end and
    check(rem + 1, get_next(nodes))
  end
    
  defp get_next(nodes) do
    Enum.reduce(nodes, [], fn node, acc ->
      acc = if node.left, do: [node.left | acc], else: acc
      if node.right, do: [node.right | acc], else: acc
    end) |> Enum.reverse()
  end
    
  defp asc([a | _]) when rem(a.val, 2) == 0, do: false
  defp asc([_]), do: true
  defp asc([]), do: true
  defp asc([a, b | _]) when b.val <= a.val, do: false
  defp asc([_ | t]), do: asc(t)
                         
  defp desc([a | _]) when rem(a.val, 2) == 1, do: false
  defp desc([_]), do: true
  defp desc([]), do: true
  defp desc([a, b | _]) when b.val >= a.val, do: false
  defp desc([_ | t]), do: desc(t)
end
```