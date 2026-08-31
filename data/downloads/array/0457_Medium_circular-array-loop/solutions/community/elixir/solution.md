# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/4320204/](https://leetcode.com/problems/circular-array-loop/solutions/4320204/)

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
  @spec circular_array_loop(nums :: [integer]) :: boolean
  def circular_array_loop(nums) do
    n = Enum.count(nums)
    visited = [for _ <- 0..n-1 do False end]
    Enum.reduce_while(nums, {0, visited, false}, fn num, {i, visited, _} ->
      if Enum.at(visited, i) do
        {:cont, {i + 1, visited, false}}
      else
        {visited, res} = loop_visited(nums, n, visited, Map.new(), i, num, num >= 0)
        if res do
          {:halt, {i + 1, visited, true}}
        else
          {:cont, {i + 1, visited, false}}
        end
      end
    end) |> elem(2)
  end

  @spec loop_visited(nums :: [integer], n :: integer, visited :: [bool], dic :: %{}, index :: integer, num :: integer, forward :: boolean) :: {[bool], boolean}
  def loop_visited(nums, n, visited, dic, index, num, forward) do
    visited = List.replace_at(visited, index, true)
    newIndex = rem(index + num, n)
    newIndex = if newIndex < 0 do; newIndex + n else newIndex end
    newNum = Enum.at(nums, newIndex)
    if index == newIndex or forward != (newNum >= 0) do
      {visited, false}
    else
      if Map.has_key?(dic, index) do
        {visited, true}
      else
        loop_visited(nums, n, visited, Map.put(dic, index, true), newIndex, newNum, forward)
      end
    end
  end
end

```