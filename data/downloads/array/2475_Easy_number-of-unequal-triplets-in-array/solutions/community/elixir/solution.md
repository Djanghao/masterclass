# Elixir, combinations formula

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4701649/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/4701649/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec unequal_triplets(nums :: [integer]) :: integer
  def unequal_triplets(nums) do
    n = length(nums)
    total_triplets = n * (n - 1) * (n - 2) |> div(6)
    for {_, v} <- Enum.frequencies(nums), v > 1, reduce: total_triplets do
      acc -> all_3_duplicate_triplets = v * (v - 1) * (v - 2) |> div(6)
             two_duplicate_triplets = (v * (v - 1) |> div(2)) * (n - v)
             acc - all_3_duplicate_triplets - two_duplicate_triplets
    end
  end
end

```