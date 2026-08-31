# Elixir Enum.reduce() solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/3646701/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/3646701/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 531ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 91.1MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec count_bad_pairs(nums :: [integer]) :: integer
  def count_bad_pairs(nums) do
    Enum.reduce(nums, {0, 0, %{}}, fn num, {i, ans, cnt_dict} ->
      prev = Map.get(cnt_dict, i - num, 0)
      {i + 1, ans + (i - prev), Map.put(cnt_dict, i - num, prev + 1)}
    end) |> elem(1)
  end
end

```