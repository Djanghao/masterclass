# Simple recursive solution

**Author:** sQQVEutPou
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsets/solutions/6044561/](https://leetcode.com/problems/subsets/solutions/6044561/)

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
  @spec subsets(nums :: [integer]) :: [[integer]]
  def subsets(nums) do
    [[] | subsets(nums, [], [])]
  end

  defp subsets([], _subset, acc) do
    acc
  end

  defp subsets([n | nums], subset, acc) do
    new_subset = [n | subset]
    acc = [new_subset | acc]
    acc = subsets(nums, new_subset, acc)
    subsets(nums, subset, acc)
  end
end
```