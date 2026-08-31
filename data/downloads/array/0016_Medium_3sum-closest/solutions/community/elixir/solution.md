# O(n^2) solution

**Author:** harfangk
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/3672794/](https://leetcode.com/problems/3sum-closest/solutions/3672794/)

---

# Intuition
Like 3Sum problem, this can be broken down into outer loop over `nums` and inner loop over `rest` where `nums = [n | rest]`, giving $$O(n^2)$$ time complexity.

# Approach
Sorting initial `nums` enables inner loop using two pointers. But access by index for Elixir list is too slow at $$O(n)$$, so we also convert the list to a `Map` for $$O(1)$$ access.

For inner loop over `rest`, `i` starts at `0` and `j` starts at `Enum.count(rest) - 1`. If `nums[i] + nums[j] + n` is smaller than target, increase `i`, else decrease `j`. The loop terminates when `i == j`. Return the sum that's the closest to `target`. 


# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
defmodule Solution do
  @spec three_sum_closest(nums :: [integer], target :: integer) :: integer
  def three_sum_closest(nums, target) do
    nums
    |> Enum.sort()
    |> do_three_sum_closest(target, Enum.take(nums, 3) |> Enum.sum())
  end

  defp do_three_sum_closest(nums, target, ans) when length(nums) < 3, do: ans
  defp do_three_sum_closest([n | nums], target, ans) do
    nums_map = 
      nums 
      |> Enum.with_index()
      |> Enum.into(%{}, fn {x, i} -> {i, x} end)
    candidate_ans = two_sum_closest(nums_map, target - n, 0, Enum.count(nums) - 1, Enum.take(nums, 2) |> Enum.sum()) + n
    new_ans = if (abs(target - ans) <= abs(target - candidate_ans)), do: ans, else: candidate_ans
    do_three_sum_closest(nums, target, new_ans)
  end

  defp two_sum_closest(nums_map, target, i, i, ans), do: ans
  defp two_sum_closest(nums_map, target, i, j, ans) do
    i_num = Map.get(nums_map, i)
    j_num = Map.get(nums_map, j)
    current_sum = i_num + j_num
    new_ans = 
      if (abs(ans - target) < abs(current_sum - target)) do
        ans
      else
        current_sum
      end
    {new_i, new_j} =
      if (current_sum < target) do
        {i + 1, j}
      else
        {i, j - 1}
      end
    two_sum_closest(nums_map, target, new_i, new_j, new_ans)
  end
end
```