# Elixir with monotonic stack

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/erect-the-fence/solutions/2830372/](https://leetcode.com/problems/erect-the-fence/solutions/2830372/)

---

# Approach
Sort the trees first.
Then maintain 2 monotonic stacks, where the slope of the line from adjacent pair of trees is in decreasing / increasing order.
Finally union the items of the 2 stacks.

# Complexity
Still new to Elixir, so not sure if it executes with the expected time complexity.
- Time complexity: O(n log(n)) due to sorting.
- Space complexity: O(n)

# Code
```
defmodule Solution do
  @spec outer_trees(trees :: [[integer]]) :: [[integer]]
  def outer_trees(trees) do
    sorted = Enum.sort(trees)

    set = Enum.reduce(sorted, {[], &>=/2}, &check/2)
    |> elem(0)
    |> MapSet.new()

    Enum.reduce(sorted, {[], &<=/2}, &check/2)
    |> elem(0)
    |> MapSet.new()
    |> MapSet.union(set)
    |> MapSet.to_list()
  end

  defp check([x0, y0], {[[x1, y1], [x2, y2] | tail], func}) do
    curr = (y0 - y1) * (x1 - x2)
    prev = (y1 - y2) * (x0 - x1)
    if func.(curr, prev) do
      {[[x0, y0], [x1, y1], [x2, y2] | tail], func}
    else
      check([x0, y0], {[[x2, y2] | tail], func})
    end
  end
  defp check(x, {list, func}), do: {[x | list], func}
end
```