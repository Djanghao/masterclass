# [Elixir] Recursive solution O(N)

**Author:** juumixx
**Votes:** 1
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/2729776/](https://leetcode.com/problems/contains-duplicate-ii/solutions/2729776/)

---

The `MapSet` operations have constant runtime, and we only traverse the list once, so total runtime is O(N)

Runtime: 622 ms, faster than 100.00% of Elixir online submissions for Contains Duplicate II.
Memory Usage: 71.2 MB, less than 100.00% of Elixir online submissions for Contains Duplicate II.

```
defmodule Solution do
  @spec contains_nearby_duplicate(nums :: [integer], k :: integer) :: boolean
  def contains_nearby_duplicate(nums, k) do
    check(nums, nums, k, MapSet.new())
  end

  defp check(_, [], _, _), do: false

  defp check([h | t], [head | tail], 0, set) do
    dupe = set |> MapSet.member?(head)
    set = set |> MapSet.put(head) |> MapSet.delete(h)
    dupe || check(t, tail, 0, set)
  end

  defp check(orig, [head | tail], k, set) do
    dupe = set |> MapSet.member?(head)
    set = MapSet.put(set, head)
    dupe || check(orig, tail, k - 1, set)
  end
end
```