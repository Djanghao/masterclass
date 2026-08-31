# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-ii/solutions/4375275/](https://leetcode.com/problems/smallest-range-ii/solutions/4375275/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 266ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 67.22MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec smallest_range_ii(nums :: [integer], k :: integer) :: integer
  def smallest_range_ii(nums, k) do
    smallest_range_ii(Enum.sort(nums), k, Enum.count(nums))
  end

  @spec smallest_range_ii(nums :: [integer], k :: integer, n :: integer) :: integer
  def smallest_range_ii(_nums, _k, n) when n <= 1 do
    0
  end

  def smallest_range_ii(nums, k, n) do
    nums_head = nums |> hd
    nums_last = List.last(nums)
    score = nums_last - nums_head
    helper(0, nums, k, n, score, nums_head, nums_last)
  end

  @spec helper(i :: integer, nums :: [integer], k :: integer, n :: integer, res :: integer, nums_head :: integer, nums_last :: integer) :: integer
  def helper(i, [_head | _tail], _k, n, res, _nums_head, _nums_last) when i == n - 1 do
    res
  end

  def helper(i, [head | tail], k, n, res, nums_head, nums_last) do
    v_max = max(head + k, nums_last - k)
    v_min = min((tail |> hd) - k, nums_head + k)
    score = v_max - v_min
    helper(i + 1, tail, k, n, min(res, score), nums_head, nums_last)
  end
end

```