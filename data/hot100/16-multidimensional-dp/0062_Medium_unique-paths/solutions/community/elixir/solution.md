# Elixir with nCr

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-paths/solutions/3995246/](https://leetcode.com/problems/unique-paths/solutions/3995246/)

---

# Intuition
The path can be represented as a list of moves with length $$(m - 1) + (n - 1)$$, consisting $$m - 1$$ downs and $$n - 1$$ rights.

We can treat the number of unique paths as number of unique ways to select $$m - 1$$ moves in the list to be down moves. Then it becomes an $nCr$ question.
# Complexity
- Time complexity: $$O(min(m, n))$$

- Space complexity: $$O(1)$$
# Code
```
defmodule Solution do
  @spec unique_paths(m :: integer, n :: integer) :: integer
  def unique_paths(m, n) do
    ncr(m + n - 2, min(m, n) - 1)
  end

  defp ncr(n, r) do
    Enum.reduce(1..r//1, 1, fn i, acc ->
      div(acc * (i + n - r), i)
    end)
  end
end
```