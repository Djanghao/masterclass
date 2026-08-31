# Elixir Solution Using Heap

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189899/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189899/)

---

```elixir
defmodule Solution do
  defmodule Queue do
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

    def pop({_, v, l, r}) do
      {v, merge(l, r)}
    end
  end

  @spec is_possible(target :: [integer]) :: boolean
  def is_possible([1]), do: true
  def is_possible([_]), do: false

  def is_possible(target) do
    target
    |> Enum.reduce({0, Queue.new()}, fn t, {sum, pq} ->
      {sum + t, Queue.push(pq, t)}
    end)
    |> then(fn {sum, pq} -> aux(sum, pq) end)
  end

  def aux(_sum, nil), do: true

  def aux(sum, pq) do
    {top, pq} = Queue.pop(pq)

    if top == 1 || sum - top == 1 do
      true
    else
      tmp = rem(top, sum - top)
      sum = sum + tmp - top

      if tmp == top || tmp == 0 do
        false
      else
        aux(sum, Queue.push(pq, tmp))
      end
    end
  end
end
```