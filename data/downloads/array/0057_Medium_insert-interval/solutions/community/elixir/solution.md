# Elixir Easy Solution

**Author:** tywhisky
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-interval/solutions/3058732/](https://leetcode.com/problems/insert-interval/solutions/3058732/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec insert(intervals :: [[integer]], new_interval :: [integer]) :: [[integer]]
  def insert(intervals, new_interval) do
    [new_interval | intervals]
    |> Enum.sort()
    |> merge([])
  end

  def merge([], result), do: Enum.reverse(result)
  def merge([[s, e] | tail], []), do: merge(tail, [[s, e]])
  def merge([[s, e] | tail], [[ps, pe] | p_tail] = rest) do
    if s <= pe do
      merge(tail, [[ps, max(pe, e)] | p_tail])
    else
      merge(tail, [[s, e] | rest])
    end
  end
end

```