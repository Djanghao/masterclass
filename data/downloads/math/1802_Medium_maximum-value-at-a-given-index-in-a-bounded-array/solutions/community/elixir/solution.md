# Elixir binary search solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620170/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620170/)

---

# Code
```Elixir
defmodule Solution do
  @spec max_value(n :: integer, index :: integer, max_sum :: integer) :: integer
  def max_value(n, index, max_sum) do
    binary_search(1, max_sum, n, index, max_sum)
  end

  defp binary_search(lo, lo, _, _, _), do: lo
  defp binary_search(lo, hi, n, index, max_sum) do
    mid = div(lo + hi + 1, 2)
    sum = area(mid - 1, index) + area(mid, n - index)
    if sum > max_sum do
      binary_search(lo, mid - 1, n, index, max_sum)
    else
      binary_search(mid, hi, n, index, max_sum)
    end
  end

  defp area(h, w) do
    a = min(h, w)
    triangle = div(a * (a + 1), 2)
    cond do
      h < w -> triangle + w - h
      h > w -> triangle + (h - w) * w
      true -> triangle
    end
  end
end
```