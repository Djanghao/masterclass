# Elixir with MapSet

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5498627/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5498627/)

---

# Code
```
defmodule Solution do
  @spec lucky_numbers(matrix :: [[integer]]) :: [integer]
  def lucky_numbers(matrix) do
    Enum.zip_with(matrix, &(&1))
    |> MapSet.new(&Enum.max/1)
    |> MapSet.intersection(MapSet.new(matrix, &Enum.min/1))
    |> MapSet.to_list()
  end
end
```