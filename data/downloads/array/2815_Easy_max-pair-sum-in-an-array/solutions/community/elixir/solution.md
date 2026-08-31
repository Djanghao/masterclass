# Elixir, uses map, O(n.log(m))

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/4779135/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/4779135/)

---

# Complexity
- Time complexity:
O(n.log(m)) where n is the length of nums and m is the average number of digits in nums

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec max_sum(nums :: [integer]) :: integer
  def max_sum(nums) do
    max_dig_map = for n <- nums, reduce: {%{}, -1} do
      {acc, res} -> 
        max_dig = max_digit(n)
        case acc[max_dig] do
          nil -> {Map.put(acc, max_dig, n), res}
          x -> {Map.put(acc, max_dig, max(n, x)), max(res, n + x)}
        end  
    end |> elem(1)
  end

  defp max_digit(n), do: max_digit(n, 0)
  defp max_digit(n, res) when n > 0 do
    digit = rem(n, 10)
    res = if digit > res, do: digit, else: res
    max_digit(div(n, 10), res)
  end
  defp max_digit(_, res), do: res
end
```