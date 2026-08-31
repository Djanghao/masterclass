# Elixir Sort Greedy Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2334945/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2334945/)

---

```elixir
defmodule Solution do
  @spec partition_array(nums :: [integer], k :: integer) :: integer
  def partition_array(nums, k) do
    nums
    |> Enum.sort()
    |> then(&aux(&1, hd(&1), k, 1))
  end

  def aux([], _m, _k, ct), do: ct
  def aux([n | ns], m, k, ct) when n <= m + k, do: aux(ns, m, k, ct)
  def aux([n | ns], m, k, ct), do: aux(ns, n, k, ct + 1)
end
```