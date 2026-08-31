# MapSet approach

**Author:** dmitry58185
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-ii/solutions/6084756/](https://leetcode.com/problems/find-champion-ii/solutions/6084756/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using the set of all teams, we remove all the losing teams from it. Then we check that only one team remains undefeated - this will be the champion.

# Approach
<!-- Describe your approach to solving the problem. -->
Elixir has a MapSet data structure that we will use. We then recursively traverse the DAG list, removing all defeated teams from the MapSet. In the final function clause, we check that our MapSet contains only one champion and return it, otherwise we return -1.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec find_champion(n :: integer, edges :: [[integer]]) :: integer
  # Using MapSet accumulator, assume all teams are not defeated yet
  def find_champion(n, edges), do: do_find_champion(edges, MapSet.new(0..(n - 1)))

  @spec do_find_champion(edges :: [[integer]], undefeated :: MapSet.t()) :: integer
  # Filtering all the defeated teams
  defp do_find_champion([[_, loser] | tail], undefeated),
    do: do_find_champion(tail, MapSet.delete(undefeated, loser))

  # Check that there is only one champion left.
  defp do_find_champion([], undefeated) do
    if MapSet.size(undefeated) == 1 do
      hd(MapSet.to_list(undefeated))
    else
      -1
    end
  end
end

```