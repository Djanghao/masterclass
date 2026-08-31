# Elixir pattern matching solution

**Author:** Fubuchi
**Votes:** 1
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2574266/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2574266/)

---

```
defmodule Solution do
  def pseudo_palindromic_paths(root) do
    palindrome_check(root, %{})
  end

  defp palindrome_check(%TreeNode{val: v, left: nil, right: nil}, map),
    do: palindrome_check(Map.update(map, v, 1, &(&1 + 1)))

  defp palindrome_check(%TreeNode{val: v, left: l, right: nil}, map),
    do: palindrome_check(l, Map.update(map, v, 1, &(&1 + 1)))

  defp palindrome_check(%TreeNode{val: v, left: nil, right: r}, map),
    do: palindrome_check(r, Map.update(map, v, 1, &(&1 + 1)))

  defp palindrome_check(%TreeNode{val: v, left: l, right: r}, map) do
    palindrome_check(l, Map.update(map, v, 1, &(&1 + 1))) +
      palindrome_check(r, Map.update(map, v, 1, &(&1 + 1)))
  end

  defp palindrome_check(map) do
    map
    |> Enum.reduce_while(_odd_count = 0, fn
      {_, count}, 0 when rem(count, 2) == 1 -> {:cont, 1}
      {_, count}, _ when rem(count, 2) == 1 -> {:halt, false}
      _, odd_count -> {:cont, odd_count}
    end)
    |> (&if(&1 == false, do: 0, else: 1)).()
  end
end
```