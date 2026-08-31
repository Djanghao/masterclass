# Elixir Using Orddict & GenServer

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/2672721/](https://leetcode.com/problems/my-calendar-iii/solutions/2672721/)

---

```elixir
defmodule MyCalendarThree do
  use GenServer

  @spec init_() :: any
  def init_() do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
    GenServer.call(__MODULE__, :init)
  end

  @spec book(start :: integer, end_ :: integer) :: integer
  def book(start, end_) do
    GenServer.call(__MODULE__, {:book, start, end_})
  end

  def init(state) do
    {:ok, state}
  end

  def handle_call(:init, _from, _state) do
    {:reply, true, :orddict.new()}
  end

  def handle_call({:book, start, end_}, _from, state) do
    state = :orddict.update(start, &(&1 + 1), 1, state)
    state = :orddict.update(end_, &(&1 - 1), -1, state)

    state
    |> :orddict.to_list()
    |> Enum.reduce({0, 0}, fn {_, v}, {k, sum} ->
      {max(k, sum + v), sum + v}
    end)
    |> then(fn {k, _} ->
      {:reply, k, state}
    end)
  end
end
```