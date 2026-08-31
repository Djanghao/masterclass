# Elixir DFS Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075480/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075480/)

---

```
defmodule Solution do
  @spec find_subsequences(nums :: [integer]) :: [[integer]]
  def find_subsequences(nums, stack \\\\ [], ans \\\\ []) do
    ans = if length(stack) > 1, do: [Enum.reverse(stack) | ans], else: ans

    loop(nums, stack, ans, %MapSet{})
  end

  def loop([], _stack, ans, _set), do: ans

  def loop([n | ns], stack, ans, set) do
    cond do
      (stack != [] && n < hd(stack)) || n in set ->
        loop(ns, stack, ans, set)

      true ->
        loop(ns, stack, find_subsequences(ns, [n | stack], ans), MapSet.put(set, n))
    end
  end
end

```