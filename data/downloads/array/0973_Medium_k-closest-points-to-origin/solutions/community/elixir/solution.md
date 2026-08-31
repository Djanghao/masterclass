# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/4407625/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/4407625/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 305ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 76.6MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec k_closest(points :: [[integer]], k :: integer) :: [[integer]]
  def k_closest(points, k) do
    points
      |> Enum.reduce([], fn p, res ->
        [x | tail] = p
        y = tail |> hd
        [[x*x + y*y, x, y]] ++ res
      end)
      |> Enum.reverse()
      |> Enum.sort()
      |> Enum.reduce_while({0, []}, fn res, {i, ans} ->
        if i == k do
          {:halt, {i + 1, ans}}
        else
          {:cont, {i + 1, [res |> tl] ++ ans}}
        end
      end)
      |> elem(1)
      |> Enum.reverse()
  end
end

```