# Elixir, O(n)

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/4770928/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/4770928/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec sum_of_squares(nums :: [integer]) :: integer
  def sum_of_squares(nums) do
    n = length(nums)
    for x <- nums, reduce: {1, 0} do
      {i, acc} -> if rem(n, i) == 0, do: {i + 1, acc + (x * x)},
                  else: {i + 1, acc} 
    end |> elem(1)
  end
end
```