# Elixir - Binary Search Tree (gb_sets)

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5976769/](https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5976769/)

---

# Approach
1. Build a binary search tree from the input `nums` (dedupped).
2. Keep tracking the maximum length of the streaks.
3. Take the smallest number `n` from the tree.
4. Remove the streak starts from `n` from the tree, and note how many numbers are removed. If the current streak length is greater than the maximum streak length, update the maximum streak length.
5. Go back to step 3 until the tree is empty.

**Optimization**: If the size of the tree is less than the maximum streak length, we can stop the iteration because there won't be any streaks longer than the current longest streak.

# Complexity
- Time complexity: $$O(n \\log n)$$

- Space complexity: $$O(n)$$

# Code
```elixir []
defmodule Solution do
  @spec longest_square_streak(nums :: [integer]) :: integer
  def longest_square_streak(nums) do
    nums
    |> :gb_sets.from_list()
    |> solve(0)
  end

  defp solve(tree, max_streak_length) do
    if :gb_sets.size(tree) <= max_streak_length do
      max_streak_length == 1 && -1 || max_streak_length
    else
      n = :gb_sets.smallest(tree)
      {tree, streak_length} = delete_streak(tree, n, 0)
      solve(tree, max(max_streak_length, streak_length))
    end
  end

  defp delete_streak(tree, n, streak_length) do
    if :gb_sets.is_element(n, tree) do
      tree = :gb_sets.delete(n, tree)
      delete_streak(tree, n * n, streak_length + 1)
    else
      {tree, streak_length}
    end
  end
end
```