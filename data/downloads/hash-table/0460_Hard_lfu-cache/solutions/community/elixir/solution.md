# Elixir Map & gb_sets Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/3112905/](https://leetcode.com/problems/lfu-cache/solutions/3112905/)

---

```
defmodule LFUCache do
  use GenServer
  @spec init_(capacity :: integer) :: any
  def init_(capacity) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
    GenServer.call(__MODULE__, {:init, capacity})
  end

  @spec get(key :: integer) :: integer
  def get(key) do
    GenServer.call(__MODULE__, {:get, key})
  end

  @spec put(key :: integer, value :: integer) :: any
  def put(key, value) do
    GenServer.call(__MODULE__, {:put, key, value})
  end

  def init(state) do
    {:ok, state}
  end

  def handle_call({:init, capacity}, _from, _) do
    {:reply, true, {%{}, :gb_sets.empty(), capacity, 0}}
  end

  def handle_call({:get, key}, _from, {mp, set, capacity, ts} = state) do
    value = mp[key]

    if value == nil do
      {:reply, -1, state}
    else
      {f, _, k, v} = value
      set = :gb_sets.delete(value, set)
      new_value = {f + 1, ts, k, v}
      set = :gb_sets.add(new_value, set)
      mp = Map.put(mp, key, new_value)
      {:reply, v, {mp, set, capacity, ts + 1}}
    end
  end

  def handle_call({:put, key, value}, _from, {mp, set, capacity, ts} = state) do
    old_value = mp[key]

    cond do
      capacity == 0 ->
        {:reply, -1, state}

      old_value == nil ->
        {mp, set} =
          if map_size(mp) == capacity do
            {{_, _, k, _}, set} = :gb_sets.take_smallest(set)
            mp = Map.delete(mp, k)
            {mp, set}
          else
            {mp, set}
          end

        new_value = {1, ts, key, value}
        mp = Map.put(mp, key, new_value)
        set = :gb_sets.add(new_value, set)
        {:reply, true, {mp, set, capacity, ts + 1}}

      true ->
        {f, _, _, _} = old_value
        set = :gb_sets.delete(old_value, set)
        new_value = {f + 1, ts, key, value}
        set = :gb_sets.add(new_value, set)
        mp = Map.put(mp, key, new_value)
        {:reply, true, {mp, set, capacity, ts + 1}}
    end
  end
end
```