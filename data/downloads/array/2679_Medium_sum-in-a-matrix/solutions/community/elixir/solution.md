# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/4593652/](https://leetcode.com/problems/sum-in-a-matrix/solutions/4593652/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 660ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 158.73MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec matrix_sum(nums :: [[integer]]) :: integer
  def matrix_sum(nums) do
    sorted_nums = Enum.reduce(nums, [], fn row, sorted_nums ->
      [Enum.sort(row, :desc)] ++ sorted_nums
    end)

    cols =
      for row <- Enum.zip(sorted_nums) do
        Tuple.to_list(row)
      end

    Enum.reduce(cols, 0, fn col, ans ->
      ans + Enum.max(col)
    end)
  end
end

```