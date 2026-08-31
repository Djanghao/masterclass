# Elixir: no map but very slow

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5758694/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5758694/)

---

Because it keeps clockwisely rotating the intermediate matrix.
# Code
```elixir
defmodule Solution do
  @spec spiral_matrix(m :: integer, n :: integer, head :: ListNode.t | nil) :: [[integer]]
  def spiral_matrix(m, n, head) do
    Stream.unfold(head, fn
      nil -> {-1, nil}
      node -> {node.val, node.next}
    end)
    |> Enum.take(m * n)
    |> build_matrix(m, n)
  end

  defp build_matrix(list, 1, _), do: [list]
  defp build_matrix(list, m, n) do
    {left, right} = Enum.split(list, n)
    build_matrix(right, n, m - 1)
    |> Enum.reverse()
    |> Enum.zip_with(&(&1))
    |> then(&[left | &1])
  end
end
```