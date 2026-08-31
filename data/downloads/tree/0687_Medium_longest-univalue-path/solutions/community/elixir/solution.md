# Elixir - DFS

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/2517922/](https://leetcode.com/problems/longest-univalue-path/solutions/2517922/)

---

```elixir
defmodule Solution do
  @spec longest_univalue_path(root :: TreeNode.t | nil) :: integer
  def longest_univalue_path(root) do
    root |> solve(0) |> elem(0) |> Kernel.-(1) |> max(0)
  end
  
  
  # This function returns {max_length, value, left_length, right_length}.
  # The meaning of each element in the returned value:
  #
  #   - max_length: length (number of nodes) of the longest univalue paths among all univalue paths in the tree.
  #   - value: `val` of the root node, or nil if the root node is nil.
  #   - left_length: length of the univalue path in the root's left subtree whose nodes share the same value of the root.
  #   - right_length: length of the univalue path in the root's right subtree whose nodes share the same value of the root.
  @spec solve(nil | TreeNode.t, non_neg_integer()) ::
        {non_neg_integer(), nil | integer(), non_neg_integer(), non_neg_integer()}
  defp solve(nil, max_len), do: {max_len, nil, 0, 0}
                            
  defp solve(node, max_len) do
    {ml, vl, ll, lr} = solve(node.left, max_len)
    {mr, vr, rl, rr} = solve(node.right, max_len)
    
    pl = if node.val == vl, do: max(ll, lr), else: 0
    pr = if node.val == vr, do: max(rl, rr), else: 0
    
    l = pl + pr + 1
    
    max_len =
      max_len
      |> max(ml)
      |> max(mr)
      |> max(l)
                                                  
    {max_len, node.val, pl + 1, pr + 1}
  end
end
```