# Elixir O(n)

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/3207902/](https://leetcode.com/problems/search-insert-position/solutions/3207902/)

---

How can I solve in O(log(n)) time if a linked list is given?
# Complexity
- Time complexity: O(n)
# 1. Convert to Tuple for binary search
```elixir
defmodule Solution do
  @spec search_insert(nums :: [integer], target :: integer) :: integer
  def search_insert(nums, target) do
    t = List.to_tuple(nums) # <-- O(n) time
    binary_search(t, target, 0, tuple_size(t))
  end

  defp binary_search(_, _, lo, lo), do: lo
  defp binary_search(t, target, lo, hi) do
    mid = div(lo + hi, 2)
    if elem(t, mid) < target do
      binary_search(t, target, mid + 1, hi)
    else
      binary_search(t, target, lo, mid)
    end
  end
end
```
# 2. Linear search
```elixir
defmodule Solution do
  @spec search_insert(nums :: [integer], target :: integer) :: integer
  def search_insert(nums, target) do
    Enum.count(nums, &(&1 < target))
  end
end
```