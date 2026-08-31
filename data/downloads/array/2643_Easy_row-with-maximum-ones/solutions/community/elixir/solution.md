# Elixir Simple Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/4012313/](https://leetcode.com/problems/row-with-maximum-ones/solutions/4012313/)

---

```
defmodule Solution do
  @spec row_and_maximum_ones(mat :: [[integer]]) :: [integer]
  def row_and_maximum_ones(mat) do
    mat
    |> Enum.with_index()
    |> Enum.reduce([0, 0], fn {row, i}, [r, ct] ->
      ones = Enum.count(row, &(&1 == 1))

      if ones > ct do
        [i, ones]
      else
        [r, ct]
      end
    end)
  end
end

```