# Elixir with Stream.unfold

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4202926/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4202926/)

---

# Code
```
defmodule Solution do
  @spec largest_values(root :: TreeNode.t | nil) :: [integer]
  def largest_values(root) do
    Stream.unfold([root], fn list ->
      Enum.filter(list, &(&1 != nil))
      |> then(fn
        [] -> nil
        list ->
          largest = Enum.max_by(list, &(&1.val)).val
          list2 = Enum.flat_map(list, &[&1.left, &1.right])
          {largest, list2}
      end)
    end)
    |> Enum.to_list()
  end
end
```