# Elixir solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013567/](https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013567/)

---

# Code
```Elixir []
defmodule Solution do
  @spec can_sort_array(nums :: [integer]) :: boolean
  def can_sort_array(nums) do
    Enum.chunk_by(nums, fn x ->
      Integer.digits(x, 2)
      |> Enum.count(fn b -> b == 1 end)
    end)
    |> Enum.map(&Enum.min_max/1)
    |> Enum.chunk_every(2, 1, :discard)
    |> Enum.all?(fn [{_, x}, {y, _}] -> x < y end)
  end
end
```