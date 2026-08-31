# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/2827669/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/2827669/)

---

Learning a new language...
# Code
```
defmodule Solution do
  @spec max_non_overlapping(nums :: [integer], target :: integer) :: integer
  def max_non_overlapping(nums, target) do
    Enum.reduce(nums, {0, 0, 0, 0, %{0 => 0}, target}, &do_find/2)
    |> elem(0)
  end

  defp do_find(x, {ans, start, i, sum, hash, target}) do
    sum2 = sum + x
    hash2 = Map.put(hash, sum2, i + 1)
    if Map.get(hash, sum2 - target, -1) >= start do
      {ans + 1, i + 1, i + 1, sum2, hash2, target}
    else
      {ans, start, i + 1, sum2, hash2, target}
    end
  end
end
```