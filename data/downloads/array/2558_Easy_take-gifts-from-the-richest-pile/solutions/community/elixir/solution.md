# Elixir Heap (Leftist tree) Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3144378/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3144378/)

---

```
defmodule Solution do
  defmodule Heap do
    @leaf nil
    def new(), do: @leaf

    defp rank(@leaf), do: 0
    defp rank({r, _, _, _}), do: r

    defp merge(@leaf, t), do: t
    defp merge(t, @leaf), do: t

    defp merge({_, lv, ll, lr} = t1, {_, rv, rl, rr} = t2) do
      if lv >= rv do
        swipe(lv, ll, merge(lr, t2))
      else
        swipe(rv, rl, merge(t1, rr))
      end
    end

    defp swipe(v, left, right) do
      if rank(left) >= rank(right) do
        {rank(right) + 1, v, left, right}
      else
        {rank(left) + 1, v, right, left}
      end
    end

    def push(q, v) do
      merge(q, {1, v, @leaf, @leaf})
    end

    def pop(@leaf), do: nil
    def pop({_, v, @leaf, @leaf}), do: {v, @leaf}
    def pop({_, v, l, r}), do: {v, merge(l, r)}

    def reduce(@leaf, acc, _fun), do: acc

    def reduce(hp, acc, fun) do
      case pop(hp) do
        {nil, _} -> acc
        {top, hp} -> reduce(hp, fun.(top, acc), fun)
      end
    end
  end

  @spec pick_gifts(gifts :: [integer], k :: integer) :: integer
  def pick_gifts(gifts, k) do
    gifts
    |> Enum.reduce(Heap.new(), &Heap.push(&2, &1))
    |> aux(k)
  end

  def aux(hp, 0) do
    Heap.reduce(hp, 0, &+/2)
  end

  def aux(hp, k) do
    {n, hp} = Heap.pop(hp)

    hp
    |> Heap.push(n |> :math.sqrt() |> floor())
    |> aux(k - 1)
  end
end

```