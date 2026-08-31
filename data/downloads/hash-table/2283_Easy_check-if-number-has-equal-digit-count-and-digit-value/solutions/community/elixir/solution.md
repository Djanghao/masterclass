# Elixir, uses map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/4646893/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/4646893/)

---

# Approach
Iterate the characters and create a char count map. Iterate the indexes and check if map[ind] == charAt[ind] 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec digit_count(num :: String.t) :: boolean
  def digit_count(num) do
    ch_count = for <<x <- num>>, reduce: %{} do
      acc -> Map.update(acc, x - ?0, 1, &(&1 + 1))
    end
    do_digit_count(num, byte_size(num) - 1, ch_count)
  end

  defp do_digit_count(num, i, ch_count) when i >= 0 do
    (Map.get(ch_count, i, 0) == (:binary.at(num, i) - ?0)) &&
    do_digit_count(num, i - 1, ch_count) 
  end
  defp do_digit_count(_, _, _), do: true
end
```