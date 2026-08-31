# Maximum Product Subarray

**Author:** joeyates
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/4771212/](https://leetcode.com/problems/maximum-product-subarray/solutions/4771212/)

---

# Intuition

# Approach

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
defmodule Solution do
  @doc """
  iex> Solution.max_product([2, 3, -1, 4])
  6

  iex> Solution.max_product([2, -5, -2, -4, 3])
  24
  """
  @spec max_product(nums :: [integer]) :: integer
  def max_product(nums) do
    first = hd(nums)
    nums
    |> Enum.reduce({1, 1, first}, fn n, {min, max, result} ->
      n_max = n * max
      n_min = n * min
      max = max3(n_max, n_min, n)
      min = min3(n_max, n_min, n)
      result = max(result, max)
      {min, max, result}
    end)
    |> elem(2)
  end

  defp max3(a, b, c) do
    max(a, max(b, c))
  end

  defp min3(a, b, c) do
    min(a, min(b, c))
  end
end
```