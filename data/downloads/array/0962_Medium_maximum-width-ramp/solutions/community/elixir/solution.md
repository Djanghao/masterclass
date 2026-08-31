# Elixir - Monotonic Stack

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-width-ramp/solutions/5895033/](https://leetcode.com/problems/maximum-width-ramp/solutions/5895033/)

---

# Approach
1. Create a strictly descending monotonic stack from nums (with index)
2. Backward traverse the nums (with index), for each `{num, idx}` pair, pop the stack until the top is greater than `num`, calculate the difference between `idx` and the index of the last popped element.
3. Find the maximum diff among the differences in step 2.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```elixir []
defmodule Solution do
  @spec max_width_ramp(nums :: [integer]) :: integer
  def max_width_ramp(nums) do
    [h | t] = nums_with_index = Enum.with_index(nums)
    stack = push_desc(t, [h])
    
    nums_with_index
    |> Enum.reverse()
    |> solve(stack, 0)
  end

  defp solve(_, [], acc), do: acc

  defp solve([{b, j} | t], stack, acc) do
    {i, stack} = pop_lte(stack, b, j)
    solve(t, stack, max(acc, j - i))
  end

  defp pop_lte([{a, i} | t], b, _) when a <= b do
    pop_lte(t, b, i)
  end

  defp pop_lte(stack, _, i) do
    {i, stack}
  end

  defp push_desc([], stack), do: stack

  defp push_desc([{b, _} = h | t], [{a, _} | _] = stack) when b < a do
    push_desc(t, [h | stack])
  end

  defp push_desc([_ | t], stack) do
    push_desc(t, stack)
  end
end
```