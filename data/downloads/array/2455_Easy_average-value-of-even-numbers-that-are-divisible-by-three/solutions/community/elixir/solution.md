# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/4695668/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/4695668/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec average_value(nums :: [integer]) :: integer
  def average_value(nums) do
    for x <- nums, rem(x, 6) == 0, reduce: {0, 0} do
      {sum, count} -> {sum + x, count + 1}
    end |> 
    then(fn {s, c} -> if s == 0, do: 0, else: (s/c |> floor) end)
  end
end
```