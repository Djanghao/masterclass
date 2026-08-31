# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/5713810/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/5713810/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 266ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.48MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec sample_stats(count :: [integer]) :: [float]
  def sample_stats(count) do
    {_i, v_min, v_max, n, v_sum, _v_maxcnt, mode} =
      Enum.reduce(count, {0, -1.0, -1.0, 0, 0, 0, 0.0}, fn cur, {i, v_min, v_max, n, v_sum, v_maxcnt, mode} ->
        if cur == 0 do
          {i + 1, v_min, v_max, n, v_sum, v_maxcnt, mode}
        else
          v_min =
            if v_min == -1 do
              i
            else
              v_min
            end
          {v_maxcnt, mode} =
            if cur > v_maxcnt do
              {cur, i}
            else
              {v_maxcnt, mode}
            end
          {i + 1, v_min, max(v_max, i), n + cur, v_sum + i*cur, v_maxcnt, mode}
        end
      end)
    median =
      if rem(n, 2) == 1 do
          kth(count, div(n, 2) + 1)
      else
          (kth(count, div(n, 2)) + kth(count, div(n, 2) + 1))/2
      end
    [v_min, v_max, v_sum/n, median, mode]
  end

  @spec kth(count :: [integer], k :: integer) :: integer
  def kth(count, k) do
    Enum.reduce_while(count, {0, k}, fn cur, {i, k} ->
      k = k - cur
      if k <= 0 do
        {:halt, {i, k}}
      else
        {:cont, {i + 1, k}}
      end
    end) |> elem(0)
  end
end

```