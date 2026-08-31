# Elixir, uses tuple

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/4385033/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/4385033/)

---

# Approach
Converts the list into tuple for index based access. Iterate the elements in the tuple and check the total consecutive counts of occurrences where elem[i] == elem[i + m]. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)
# Code
```
defmodule Solution do
  @spec contains_pattern(arr :: [integer], m :: integer, k :: integer) :: boolean
  def contains_pattern(arr, m, k) do 
    tuple = List.to_tuple(arr)
    do_contains_pattern(tuple, 0, 0, m, k)
  end

  defp do_contains_pattern(tuple, i, count, m, k) when i < tuple_size(tuple) - m do
    count = if elem(tuple, i) == elem(tuple, i + m), do: count + 1, else: 0
    count == m * (k - 1) || do_contains_pattern(tuple, i + 1, count, m, k)
  end
  defp do_contains_pattern(_, _, _, _, _), do: false
end
```