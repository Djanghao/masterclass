# Elixir - Enum.reduce/3

**Author:** lreid295
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/5657033/](https://leetcode.com/problems/ugly-number-ii/solutions/5657033/)

---

# Approach
Build the list of ugly numbers from 2 to n using `Enum.reduce/3`. Get the value from the list.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  def nth_ugly_number(n) do
    {list, _, _, _, _, _, _} =
      Enum.reduce(2..n, {[1], 2, 3, 5, 0, 0, 0}, fn x, acc ->
        {ug_list, next_2, next_3, next_5, i2, i3, i5} = acc

        next_ugly = min(min(next_2, next_3), next_5)
        ugly_numbers = ug_list ++ [next_ugly]

        {i2, next_2} =
          next_ugly_for_factor(next_ugly, ugly_numbers, 2, i2, next_2)

        {i3, next_3} =
          next_ugly_for_factor(next_ugly, ugly_numbers, 3, i3, next_3)

        {i5, next_5} =
          next_ugly_for_factor(next_ugly, ugly_numbers, 5, i5, next_5)

        {ugly_numbers, next_2, next_3, next_5, i2, i3, i5}
      end)

    Enum.at(list, n - 1)
  end

  defp next_ugly_for_factor(next_ugly, ugly_numbers, factor, index, next) when next_ugly == next do
    {index + 1,  Enum.at(ugly_numbers, index + 1) * factor}   
  end
 
  defp next_ugly_for_factor(_, _, _, index, next), do: {index, next}
end
```