# Elixir solution use Map.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/4405772/](https://leetcode.com/problems/jump-game-iii/solutions/4405772/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 377ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 87.70MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec can_reach(arr :: [integer], start :: integer) :: boolean
  def can_reach(arr, start) do
    m_arr = Enum.reduce(arr, {0, %{}}, fn cur, {i, res} ->
      {i + 1, Map.put(res, i, cur)}
    end) |> elem(1)
    map_can_reach(m_arr, start)
  end

  @spec map_can_reach(m_arr :: %{}, start :: integer) :: boolean
  def map_can_reach(m_arr, start) do
    if start < 0 or start >= map_size(m_arr) || m_arr[start] < 0 do
      false
    else
      m_arr = Map.put(m_arr, start, m_arr[start]*-1)
      m_arr[start] == 0 or map_can_reach(m_arr, start + m_arr[start]) or map_can_reach(m_arr, start - m_arr[start])
    end
  end
end

```