# Elixir - Sliding Window

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/4930555/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/4930555/)

---

# Approach
1. Find all maximum windows that the products are less than `k` (or `cap` in the code, I find I always forget what `k` means when coding, so I renamed it).
2. Calculate how many sub-windows each maximum window has (pay attention to overlaps)
3. Adds the number of sub-windows together.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```elixir
defmodule Solution do
  @spec num_subarray_product_less_than_k(nums :: [integer], cap :: integer) :: integer
  def num_subarray_product_less_than_k(nums, cap) do
    nums
    |> List.to_tuple()
    |> windows(0, 0, 1, cap, [])
    |> Stream.chunk_every(2, 1, [{-1, -1}])
    |> Stream.map(fn [{i1, j1}, {_i2, j2}] ->
      sub_windows(i1, j1) - sub_windows(i1, j2)
    end)
    |> Enum.sum()
  end

  defp windows(nums, i, j, prod, cap, acc) when i > j do
    windows(nums, i, i, prod, cap, acc)
  end

  defp windows(nums, i, j, _prod, _cap, acc) when j >= tuple_size(nums) do
    [{i, j - 1} | acc]
  end

  defp windows(nums, i, j, prod, cap, acc) when prod * elem(nums, j) >= cap do
    windows(nums, i + 1, j, max(1, div(prod, elem(nums, i))), cap, [{i, j - 1} | acc])
  end

  defp windows(nums, i, j, prod, cap, acc) do
    windows(nums, i, j + 1, prod * elem(nums, j), cap, acc)
  end

  defp sub_windows(i, j) when i > j, do: 0

  defp sub_windows(i, j) do
    len = j - i + 1
    div(len * len + len, 2)
  end
end
```