# Elixir, uses set

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/4766327/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/4766327/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec maximum_number_of_string_pairs(words :: [String.t]) :: integer
  def maximum_number_of_string_pairs(words) do
    for x <- words, reduce: {MapSet.new, 0} do
      {acc, res} -> if MapSet.member?(acc, x), do: {acc, res + 1},
                    else: {MapSet.put(acc, String.reverse(x)), res}
    end |> elem(1)
  end
end
```