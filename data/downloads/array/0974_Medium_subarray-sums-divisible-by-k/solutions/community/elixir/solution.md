# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/4916603/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/4916603/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 376ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 108.41MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec subarrays_div_by_k(nums :: [integer], k :: integer) :: integer
  def subarrays_div_by_k(nums, k) do
    {_, mod} =
      Enum.reduce(nums, {0, %{0 => 1}}, fn num, {running_mod, mod} ->
        running_mod = get_mod(rem(num + running_mod, k), k)
        {running_mod, Map.put(mod, running_mod, Map.get(mod, running_mod, 0) + 1)}
      end)
    Enum.reduce(Map.values(mod), 0, fn m, ans ->
      ans + div(m*(m - 1),2)
    end)
  end

  @spec get_mod(running_mod :: integer, k :: integer) :: integer
  def get_mod(running_mod, k) when running_mod < 0 do
    running_mod + k
  end

  def get_mod(running_mod, _k) do
    running_mod
  end
end

```