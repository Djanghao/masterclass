# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/4356106/](https://leetcode.com/problems/count-largest-group/solutions/4356106/)

---

# Approach
Iterate all numbers between 1 and n, calculate the sum of the digits of each number, and update a map with the digit sum as key and the count as total numbers in the digit sum group. Keep track of the maximum digit sum and the number of groups with the maximum digit sum. Return the number of groups with the maximum digits sum at the end of the iteration. 

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec count_largest_group(n :: integer) :: integer
  def count_largest_group(n), do: do_count_largest_group(n, %{}, 0, 0)

  defp do_count_largest_group(n, count_map, max_count, max_count_length) when n > 0 do
    d_sum = digits_sum(n, 0)
    case Map.get(count_map, d_sum, 0) + 1 do
      x when x < max_count -> do_count_largest_group(n - 1, Map.put(count_map, d_sum, x), max_count, max_count_length)
      x when x > max_count -> do_count_largest_group(n - 1, Map.put(count_map, d_sum, x), x, 1)
      _ -> do_count_largest_group(n - 1, Map.put(count_map, d_sum, max_count), max_count, max_count_length + 1)
    end
  end
  defp do_count_largest_group(_, _, _, max_count_length), do: max_count_length

  defp digits_sum(n, sum) when n > 0, do: digits_sum(div(n, 10), sum + rem(n, 10))
  defp digits_sum(_, sum), do: sum 
end
```