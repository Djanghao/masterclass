# Elixir greedy solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/3373024/](https://leetcode.com/problems/boats-to-save-people/solutions/3373024/)

---

# Code
```
defmodule Solution do
  @spec num_rescue_boats(people :: [integer], limit :: integer) :: integer
  def num_rescue_boats(people, limit) do
    people = Enum.sort(people)
    n = length(people)
    count(people, Enum.reverse(people), n, limit, 0)
  end

  defp count([x | list1], [y | list2], n, limit, ans) when x + y > limit do
    count([x | list1], list2, n - 1, limit, ans + 1)
  end
  defp count([_ | list1], [_ | list2], n, limit, ans) when n >= 2 do
    count(list1, list2, n - 2, limit, ans + 1)
  end
  defp count(_, _, n, _, ans), do: ans + n
end
```