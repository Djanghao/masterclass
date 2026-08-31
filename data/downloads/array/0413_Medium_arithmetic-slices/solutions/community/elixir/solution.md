# Elixir with chunk_every

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/3917292/](https://leetcode.com/problems/arithmetic-slices/solutions/3917292/)

---

# Code
```
defmodule Solution do
  @spec number_of_arithmetic_slices(nums :: [integer]) :: integer
  def number_of_arithmetic_slices(nums) do
    Enum.chunk_every(nums, 3, 1, :discard)
    |> Enum.reduce({0, 0}, fn [a, b, c], {ans, acc} ->
      if a - b == b - c do
        {ans + acc + 1, acc + 1}
      else
        {ans, 0}
      end
    end)
    |> elem(0)
  end
end
```