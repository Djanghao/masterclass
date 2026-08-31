# Elixir Solution

**Author:** dadinho
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/3358753/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/3358753/)

---

# Code
```
defmodule Solution do
  @spec max_area(h :: integer, w :: integer, horizontal_cuts :: [integer], vertical_cuts :: [integer]) :: integer
  def max_area(h, w, horizontal_cuts, vertical_cuts) do
    horizontal_cuts = Enum.sort(horizontal_cuts)
    vertical_cuts = Enum.sort(vertical_cuts)
    biggest_space_for(vertical_cuts, w) * biggest_space_for(horizontal_cuts, h)
    |> rem(1_000_000_007)
  end

  defp biggest_space_for(cuts_array, boundary) do
    Enum.reduce(cuts_array, %{biggest_space: 0, last_test: 0, boundary: boundary}, fn cut, acc ->
      biggest_space = if cut - acc.last_test > acc.biggest_space, do: cut - acc.last_test, else: acc.biggest_space
      %{acc | biggest_space: biggest_space, last_test: cut}
    end)
    |> case do
      %{biggest_space: bs_v, last_test: last_test_v} = _output when last_test_v < boundary ->
        if boundary - last_test_v > bs_v, do: boundary - last_test_v, else: bs_v

      output ->
        output.biggest_space
    end
  end
end
```