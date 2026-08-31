# Elixir can_jump

**Author:** SqBtbuSzL8
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game/solutions/5810122/](https://leetcode.com/problems/jump-game/solutions/5810122/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Start from the second last element and check if it can reach the destination (distance of 1). If it can, it's effectively the new destination (reset distance needed to 1). If it can't, increment the distance needed.

# Approach
<!-- Describe your approach to solving the problem. -->
Elixir lists are linked lists, so it's more efficient to reverse the list first and pop items off the head of the list.

# Complexity
- Time complexity: O(n)
Inspect each item once


- Space complexity: O(1)*
The recursion is tail-call optimized and we're only keeping track of dist (int) and can (boolean)

[*] Because Elixir's data is immutable, the Enum.reverse will create a new copy of the data, temporarily requiring O(N) space before the garbage collector cleans up the unneeded original nums list.


# Code
```elixir []
defmodule Solution do
  @spec can_jump(nums :: [integer]) :: boolean
  def can_jump([_num]), do: true
  def can_jump(nums) do
    [_last | nums] = Enum.reverse(nums)
    can_jump(nums, 1, true)
  end

  defp can_jump(nums, dist, can) do
    case nums do
      [] -> can
      [val | rest] when val < dist -> can_jump(rest, dist + 1, false)
      [_ | rest] -> can_jump(rest, 1, true)
    end
  end
end
```