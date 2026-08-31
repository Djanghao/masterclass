# Single binary search

**Author:** harfangk
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3739937/](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3739937/)

---

# Intuition
Run a binary search, but with more complex logic for finding out the correct half

# Complexity
- Time complexity: $$O(n)$$
  Binary search is $$O(log(n))$$, but turning `List` into `Tuple` is $$O(n)$$. $$O(n)$$ is unavoidable as long as the initial data is of `List` type.   
- Space complexity: $$O(n)$$
  Tuple is of length `n`.
# Code
```
defmodule Solution do
  @spec search(nums :: [integer], target :: integer) :: integer
  def search(nums, target) do
    tuple = list_to_tuple(nums)
    binary_search(tuple, 0, tuple_size(tuple) - 1, target)
  end

  defp binary_search({}, _, _, _), do: -1
  defp binary_search(nums, left, left, target), do: if (elem(nums, left) == target), do: left, else: -1
  defp binary_search(nums, left, right, target) do
    mid = left + div(right - left, 2)
    if (elem(nums, mid) == target) do
      mid
    else
      {new_left, new_right} = find_correct_half(nums, left, mid, right, target)
      binary_search(nums, new_left, new_right, target)
    end
  end

  defp find_correct_half(nums, left, mid, right, target) do
    # left half is sorted
    if (elem(nums, left) <= elem(nums,mid)) do
      # target is in left half
      if (elem(nums, left) <= target and target < elem(nums, mid)) do
        {left, mid - 1}
      # target is in right half
      else
        {mid + 1, right}
      end
    # right half is sorted
    else
      # target is in right half
      if (target <= elem(nums, right) and target > elem(nums, mid)) do
        {mid + 1, right}
      # target is in left half
      else
        {left, mid - 1}
      end
    end
  end

  defp list_to_tuple(list), do: list_to_tuple(list, {})
  defp list_to_tuple([], tuple), do: tuple
  defp list_to_tuple([x|xs], tuple), do: list_to_tuple(xs, Tuple.append(tuple, x))
end
```