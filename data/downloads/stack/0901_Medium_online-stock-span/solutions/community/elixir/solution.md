# Elixir: Agent and a list with reduction

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/5103629/](https://leetcode.com/problems/online-stock-span/solutions/5103629/)

---

The "naive" approach with just keeping a list and counting works within the time limit. However, while `next/1` is still $$O(n)$$, this approach helps reduce/shorten the historic length by consolidating entries.

# Code
```
defmodule StockSpanner do
  @spec init_() :: any
  def init_ do
    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> [] end, name: __MODULE__)
      pid -> Agent.cast(pid, fn _ -> [] end)
    end
  end

  @spec next(price :: integer) :: integer
  def next(price) do
    Agent.get_and_update(__MODULE__, &reduce_span(&1, price, 1))
  end

  defp reduce_span([{h, cnt} | t], p, acc) when h <= p,
    do: reduce_span(t, p, acc + cnt)

  defp reduce_span(s, p, acc), do: {acc, [{p, acc} | s]}
end
```