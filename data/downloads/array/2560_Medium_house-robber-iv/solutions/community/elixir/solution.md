# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/3917225/](https://leetcode.com/problems/house-robber-iv/solutions/3917225/)

---

# Complexity
- Time complexity: $$O(n*log(d))$$, where `d = max(nums) - min(nums)`

- Space complexity: $$O(1)$$

# Code
```
defmodule Solution do
  @spec min_capability(nums :: [integer], k :: integer) :: integer
  def min_capability(nums, k) do
    Enum.min_max(nums)
    |> binary_search(nums, k)
  end

  defp binary_search({lo, lo}, _, _), do: lo
  defp binary_search({lo, hi}, nums, k) do
    mid = div(lo + hi, 2)
    if rob_k?(mid, nums, k) do
      binary_search({lo, mid}, nums, k)
    else
      binary_search({mid + 1, hi}, nums, k)
    end
  end

  defp rob_k?(_, _, 0), do: true
  defp rob_k?(_, [], _), do: false
  defp rob_k?(mid, nums = [x | _], k) when x <= mid do
    rob_k?(mid, Enum.drop(nums, 2), k - 1)
  end
  defp rob_k?(mid, [_ | tail], k) do
    rob_k?(mid, tail, k)
  end
end
```