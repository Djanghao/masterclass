# Elixir: Basic MapSet

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-number-iii/solutions/5234694/](https://leetcode.com/problems/single-number-iii/solutions/5234694/)

---

# Code
```
defmodule Solution do
  @spec single_number(nums :: [integer]) :: [integer]
  def single_number(nums) do
    nums
    |> Enum.reduce(MapSet.new(), fn num, acc ->
        if MapSet.member?(acc, num) do
          MapSet.delete(acc, num)
        else
          MapSet.put(acc, num)
        end
    end)
    |> MapSet.to_list()
  end
end
```