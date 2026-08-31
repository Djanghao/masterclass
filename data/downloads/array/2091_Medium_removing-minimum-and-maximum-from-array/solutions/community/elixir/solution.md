# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/4849232/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/4849232/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 637ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 193.17MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec minimum_deletions(nums :: [integer]) :: integer
  def minimum_deletions(nums) do
    num0 = nums |> hd
    {_, {_min_v, min_p}, {_max_v, max_p}} =
      Enum.reduce(nums, {0, {num0, 0}, {num0, 0}}, fn num, {i, {min_v, min_p}, {max_v, max_p}} ->
        cond do
          num < min_v ->
            {i + 1, {num, i}, {max_v, max_p}}
          num > max_v ->
            {i + 1, {min_v, min_p}, {num, i}}
          true ->
            {i + 1, {min_v, min_p}, {max_v, max_p}}
        end
      end)
    {left, right} = {min(min_p, max_p), max(min_p, max_p)}
    n = Enum.count(nums)
    Enum.min([right + 1, n - left, left + 1 + (n - right)])
  end
end

```