# Elixir Solution

**Author:** lreid295
**Votes:** 0
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5153779/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5153779/)

---

# Approach
Flip rows if first bit is a 0.
Flip columns if majority are 0's.

# Code
```
defmodule Solution do
  @spec matrix_score(grid :: [[integer]]) :: integer
  def matrix_score(grid) do
    first_flip_grid = 
      grid |> Enum.map(fn 
        r = [1 | _] -> r
        r = [0 | _] -> Enum.map(r, &(if &1 == 0, do: 1, else: 0))
      end)

    second_flip_grid = 
      first_flip_grid |> Enum.map(fn row ->
        row |> Enum.with_index() |> Enum.map(fn {y, index} ->
          count = 
            first_flip_grid
            |> Enum.zip()
            |> Enum.map(&Tuple.to_list/1)
            |> Enum.at(index) 
            |> Enum.count(& &1 == 0)
          if count > length(first_flip_grid)/2, do: 1 - y, else: y
        end)
      end)

    second_flip_grid |> Enum.map(fn row ->
      Enum.join(row) |> Integer.parse(2) |> elem(0)
    end)
    |> Enum.sum()
  end
end
```