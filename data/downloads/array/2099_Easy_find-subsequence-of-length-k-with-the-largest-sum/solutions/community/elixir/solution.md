# Elixir, uses Enum.sort

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/4601851/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/4601851/)

---

# Approach
Sort the numbers with indexes and return the largest k elements in the original order

# Complexity
- Time complexity:
O(n.log(n))
- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec max_subsequence(nums :: [integer], k :: integer) :: [integer]
  def max_subsequence(nums, k) do
    Enum.with_index(nums) |>
    Enum.sort_by(&(elem(&1, 0)), :desc) |>
    Enum.take(k) |>
    Enum.sort_by(&(elem(&1, 1))) |>
    Enum.map(&(elem(&1, 0)))
  end
end
```