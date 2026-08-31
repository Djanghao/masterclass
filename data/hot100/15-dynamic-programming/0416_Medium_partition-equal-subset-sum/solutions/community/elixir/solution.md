# Elixir 0/1 knapsack Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/2307346/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/2307346/)

---

```elixir
defmodule Solution do
  @spec can_partition(nums :: [integer]) :: boolean
  def can_partition(nums) do
    sum = Enum.sum(nums)

    if rem(sum, 2) != 0 do
      false
    else
      target = div(sum, 2)

      for n <- nums, s <- target..n, reduce: %{0 => true} do
        dp -> Map.put(dp, s, Map.get(dp, s, false) || Map.get(dp, s - n, false))
      end
      |> Map.get(target)
    end
  end
end
```