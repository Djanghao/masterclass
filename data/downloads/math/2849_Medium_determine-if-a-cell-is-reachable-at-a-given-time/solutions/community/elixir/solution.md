# 347ms(50.00%) 63.77MB(50.00%) | Elixir solution

**Author:** kitanoyoru_
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4265858/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4265858/)

---

```
defmodule Solution do
  @spec is_reachable_at_time(sx :: integer, sy :: integer, fx :: integer, fy :: integer, t :: integer) :: boolean
  def is_reachable_at_time(sx, sy, fx, fy, t) do
    d = find_chebyshev_dist(sx, sy, fx, fy)
    if d > 0, do: t >= d, else: t != 1
  end

  @spec find_chebyshev_dist(sx :: integer, sy :: integer, fx :: integer, fy :: integer) :: integer 
  def find_chebyshev_dist(sx, sy, fx, fy) do
    abs(sx-fx) |> max(abs(sy-fy))
  end
end

```