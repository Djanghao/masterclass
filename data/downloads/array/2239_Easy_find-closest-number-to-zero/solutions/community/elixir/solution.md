# Elixir, for comprehension

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/4637567/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/4637567/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_closest_number(nums :: [integer]) :: integer
  def find_closest_number(nums) do
    for x <- nums, dist = abs(x), reduce: {nil, nil} do
      {min_dist, res} -> cond do
        dist < min_dist -> {dist, x}
        dist == min_dist -> {dist, max(x, res)}
        true -> {min_dist, res} 
      end
    end |> elem(1)
  end
end
```