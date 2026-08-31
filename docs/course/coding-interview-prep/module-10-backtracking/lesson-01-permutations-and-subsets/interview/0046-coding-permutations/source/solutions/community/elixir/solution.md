# Simple recursive solution with MapSet

**Author:** sQQVEutPou
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations/solutions/6044533/](https://leetcode.com/problems/permutations/solutions/6044533/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec permute(nums :: [integer]) :: [[integer]]
  def permute(nums) do
    do_permute(nums, length(nums), MapSet.new(), [], 0, [])
  end

  def do_permute(_nums, n, _used, current, n, acc) do
    [current | acc]
  end

  def do_permute(nums, n, used, current, current_len, acc) do
    Enum.reduce(nums, acc, fn num, a ->
      if MapSet.member?(used, num) do
        a
      else
        do_permute(nums, n, MapSet.put(used, num), [num | current], current_len + 1, a)
      end
    end)
  end
end
```