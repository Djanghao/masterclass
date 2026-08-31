# Elixir DP with Map

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/4020286/](https://leetcode.com/problems/combination-sum-iv/solutions/4020286/)

---

# Code
```
defmodule Solution do
  @spec combination_sum4(nums :: [integer], target :: integer) :: integer
  def combination_sum4(nums, target) do
    solve(target, %{0 => 1}, Enum.sort(nums))
    |> elem(0)
  end
  
  defp solve(target, dp, nums) do
    case Map.get(dp, target) do
      nil ->
        Enum.take_while(nums, &(&1 <= target))
        |> Enum.reduce({0, dp}, fn x, {ans, dp} ->
          {ans2, dp} = solve(target - x, dp, nums)
          {ans + ans2, dp}
        end)
        |> then(fn {ans, dp} ->
          {ans, Map.put(dp, target, ans)}
        end)
      ans -> {ans, dp}
    end
  end
end
```