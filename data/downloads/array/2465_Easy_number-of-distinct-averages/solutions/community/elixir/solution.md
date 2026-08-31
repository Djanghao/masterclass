# Elixir, Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/4695998/](https://leetcode.com/problems/number-of-distinct-averages/solutions/4695998/)

---

# Complexity
- Time complexity:
O(n.log(n))

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec distinct_averages(nums :: [integer]) :: integer
  def distinct_averages(nums) do
    t = Enum.sort(nums) |> List.to_tuple
    max_i = tuple_size(t) - 1
    for i <- 0..div(max_i, 2), l = elem(t, i), h = elem(t, max_i - i), reduce: MapSet.new do
      acc -> MapSet.put(acc, (l + h)/2)
    end |> MapSet.size
  end
end
```