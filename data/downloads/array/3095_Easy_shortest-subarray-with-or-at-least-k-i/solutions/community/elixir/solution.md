# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4949290/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4949290/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 428ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.53MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec minimum_subarray_length(nums :: [integer], k :: integer) :: integer
  def minimum_subarray_length(nums, k) do
    m_nums =
      Enum.reduce(nums, {0, %{}}, fn num, {i, m_nums} ->
        {i + 1, Map.put(m_nums, i, num)}
      end)
      |> elem(1)
    n = Enum.count(nums)
    res =
      Enum.reduce(0..n-1, 51, fn i, res ->
        Enum.reduce(i..n-1, res, fn j, res ->
          bitwise =
            Enum.reduce(i..j, 0, fn p, bitwise ->
              Bitwise.bor(bitwise, m_nums[p])
            end)
          if bitwise >= k do
            min(res, j - i + 1)
          else
            res
          end
        end)
      end)
    if res == 51 do
      -1
    else
      res
    end
  end
end

```