# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/4897716/](https://leetcode.com/problems/largest-values-from-labels/solutions/4897716/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 336ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 96.59MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec largest_vals_from_labels(values :: [integer], labels :: [integer], num_wanted :: integer, use_limit :: integer) :: integer
  def largest_vals_from_labels(values, labels, num_wanted, use_limit) do
    [values, labels]
    |> Enum.zip()
    |> Enum.sort()
    |> Enum.reverse()
    |> Enum.reduce_while({0, num_wanted, %{}}, fn {value, label}, {ans, num_wanted, used_count} ->
      cond do
        num_wanted == 0 ->
          {:halt, {ans, num_wanted, used_count}}
        Map.get(used_count, label, 0) >= use_limit ->
          {:cont, {ans, num_wanted, used_count}}
        true ->
          {:cont, {ans + value, num_wanted - 1, Map.put(used_count, label, Map.get(used_count, label, 0) + 1)}}
      end
    end)
    |> elem(0)
  end
end

```