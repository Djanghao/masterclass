# Elixir recursion approach

**Author:** NerevarSoul
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/3788821/](https://leetcode.com/problems/non-overlapping-intervals/solutions/3788821/)

---

# Intuition
Need sort first and than compare elements

# Approach
1. sort intervals by first element
2. Compare two intervals
3. if there is overlap, choose element with less second element

# Code
```
defmodule Solution do
  @spec erase_overlap_intervals(intervals :: [[integer]]) :: integer
  def erase_overlap_intervals(intervals) do
    overlap(Enum.sort(intervals))
  end

  defp overlap([head | intervals]) do
    overlap(head, intervals, 0)
  end

  defp overlap(_interval, [], acc) do
    acc
  end

  defp overlap([_x1, y1], [[x2, y2] | intervals], acc) when y1 <= x2 do
    overlap([x2, y2], intervals, acc)
  end

  defp overlap([x1, y1], [[x2, y2] | intervals], acc) do
    if y1 > y2 do
      overlap([x2, y2], intervals, acc+1)
    else
      overlap([x1, y1], intervals, acc+1)
    end
  end

end
```