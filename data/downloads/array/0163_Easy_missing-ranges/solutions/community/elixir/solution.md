# O(n) Elixir Solution

**Author:** thredden
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/2674316/](https://leetcode.com/problems/missing-ranges/solutions/2674316/)

---

# Intuition
The lower and upper bounds are kind of like the beginning and end of the nums, so we should only need to loop through nums to get this answer.

# Approach
Recursively call removing items from the nums list, and keep track of the "new lower" bound as we move up to the upper bound.

First there are a couple of edge cases to consider. First, where there is no items in nums list to begin with, everything is missing. Second, when the lower and upper are the same number, nothing is missing.

We will start our recursion with pulling the head from the list, and using a guard to check and see if the current low number is equal to it, or less than it. If its equal, then we don't need to add a range. If low is less than that num, we have a range to add.

Then we need to pattern match on empty nums list, to end the recursion. In some cases, we have one last range to the upper bound. Other cases, we won't.

Finally, we need to reverse the list that we have been accumulating, because we have been using the cons operator to build that list up.

# Complexity
- Time complexity:
O(n)

# Code
```
defmodule Solution do
  def find_missing_ranges([],   low, up),                do: [out(low, up)]
  def find_missing_ranges(nums, low, up) when low == up, do: []
  def find_missing_ranges(nums, low, up) do
    find(nums, low, up, []) |> Enum.reverse
  end

  def find([], low, up, acc) when low <= up, do: [out(low, up) | acc]
  def find([], low, up, acc),                do: acc

  def find([num | nums], low, up, acc) when low < num,
    do: find(nums, num+1, up, [out(low, num - 1) | acc])

  def find([num | nums], low, up, acc) when low == num,
    do: find(nums, num+1, up, acc)

  def out(low, high) when low == high, do: to_string(low)
  def out(low, high)                 , do: "#{low}->#{high}"
end
```