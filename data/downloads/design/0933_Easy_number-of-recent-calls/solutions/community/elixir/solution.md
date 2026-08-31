# Elixir, GenServer, list

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/4292807/](https://leetcode.com/problems/number-of-recent-calls/solutions/4292807/)

---

# Approach
Uses GenServer to hold the state between calls. Uses a lists and prepends new requests to the list. Walks through the list to determine the recent request count.

# Complexity
- Time complexity:
O(n) where n is the number of requests in the last 3000 milliseconds

- Space complexity:
O(n)

# Code
```
defmodule RecentCounter do
  use GenServer
  @spec init_() :: any
  def init_() do
    GenServer.start(__MODULE__, nil, name: __MODULE__)
    GenServer.call(__MODULE__, :init)
  end

  @spec ping(t :: integer) :: integer
  def ping(t), do: GenServer.call(__MODULE__, {:ping, t})

  def handle_call(:init, _, _), do: {:reply, :ok, []}
  def handle_call({:ping, t}, _, state), do: {:reply, get_recent_count(state, t - 3000, 1), [t | state]}

  defp get_recent_count([hd | tl], start, count) when hd >= start, do: get_recent_count(tl, start, count + 1)
  defp get_recent_count(_requests, _start, count), do: count
end

```