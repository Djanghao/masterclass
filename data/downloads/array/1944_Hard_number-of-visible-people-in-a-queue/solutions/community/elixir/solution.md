# Elixir Stack Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/1927944/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/1927944/)

---

```elixir
defmodule Solution do
  @spec can_see_persons_count(heights :: [integer]) :: [integer]
  def can_see_persons_count(heights) do
    can_see_persons_count(Enum.reverse(heights), [], [])
  end

  def can_see_persons_count([], _st, ans), do: ans

  def can_see_persons_count([h | hs], [], ans) do
    can_see_persons_count(hs, [h], [0 | ans])
  end

  def can_see_persons_count([h | hs], [s | ss] = st, ans) do
    if h < s do
      can_see_persons_count(hs, [h | st], [1 | ans])
    else
      {popped, remained} = Enum.split_while(st, &(&1 < h))
      n = Enum.count(popped)
      additional = remained == [] && 0 || 1
      can_see_persons_count(hs, [h|remained], [n + additional | ans])
    end
  end
end
```