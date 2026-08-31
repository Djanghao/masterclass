# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/4714484/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/4714484/)

---

# Complexity
- Time complexity:
O(n * d) where d is the average number of digits in the numbers

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec difference_of_sum(nums :: [integer]) :: integer
  def difference_of_sum(nums) do
    for x <- nums, reduce: {0, 0} do
      {el_sum, dig_sum} -> {el_sum + x, dig_sum + digit_sum(x, 0)}
    end |> then(fn {el_sum, dig_sum} -> abs(el_sum - dig_sum) end)
  end

  defp digit_sum(n, acc) when n > 0, do: digit_sum(div(n, 10), acc + rem(n, 10))
  defp digit_sum(_, acc), do: acc
end
```