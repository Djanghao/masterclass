# Elixir - Sliding Window

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134392/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134392/)

---

# Complexity
- Time complexity: $$O(n \\log n)$$
- Space compexity: $$O(n)$$

# Code
```elixir []
defmodule Solution do
  @spec maximum_beauty(nums :: [integer], k :: integer) :: integer
  def maximum_beauty(nums, k) do
    nums
    |> Enum.sort()
    |> List.to_tuple()
    |> max_beauty(k * 2, 0, 0, 0)
  end

  defp max_beauty(nums, _d, _i, j, acc)
       when j == tuple_size(nums) do
    acc
  end

  defp max_beauty(nums, d, i, j, acc)
       when elem(nums, j) - elem(nums, i) <= d do
    max_beauty(nums, d, i, j + 1, max(acc, j - i + 1))
  end

  defp max_beauty(nums, d, i, j, acc) do
    max_beauty(nums, d, i + 1, j, acc)
  end
end
```