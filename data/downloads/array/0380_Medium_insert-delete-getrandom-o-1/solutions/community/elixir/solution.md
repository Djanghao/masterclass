# Elixir : GenServer & 2 Maps

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/2858527/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/2858527/)

---

A 2nd Map is used with index -> value mapping, because Enum.random/1 needs a range to achieve constant executing time.
Insert & remove operations are similar to the HashSet + List approach for other languages.
GenServer for storing the object state.
# Code
```elixir
defmodule RandomizedSet do
  use GenServer

  @spec init_() :: any
  def init_() do
    GenServer.start_link(__MODULE__, nil, [name: __MODULE__])
    GenServer.call(__MODULE__, :reset)
  end

  @spec insert(val :: integer) :: boolean
  def insert(val) do
    GenServer.call(__MODULE__, {:insert, val})
  end

  @spec remove(val :: integer) :: boolean
  def remove(val) do
    GenServer.call(__MODULE__, {:remove, val})
  end

  @spec get_random() :: integer
  def get_random() do
    GenServer.call(__MODULE__, :random)
  end

  @impl true
  def init(_) do
    {:ok, nil}
  end

  @impl true
  def handle_call(:reset, _from, _) do
    {:reply, true, {%{}, %{}}}
  end

  def handle_call({:insert, val}, _from, {indices, values}) do
    if Map.has_key?(values, val) do
      {:reply, false, {indices, values}}
    else
      values = Map.put(values, val, map_size(indices))
      indices = Map.put(indices, map_size(indices), val)
      {:reply, true, {indices, values}}
    end
  end

  def handle_call({:remove, val}, _from, {indices, values}) do
    case Map.fetch(values, val) do
      {:ok, i} ->
        last = Map.get(indices, map_size(indices) - 1)
        indices =
          Map.put(indices, i, last)
          |> Map.delete(map_size(indices) - 1)
        values =
          Map.put(values, last, i)
          |> Map.delete(val)
        {:reply, true, {indices, values}}
      :error ->
        {:reply, false, {indices, values}}
    end
  end

  def handle_call(:random, _from, {indices, values}) do
    i = Enum.random(0..map_size(indices) - 1)
    rand = Map.get(indices, i)
    {:reply, rand, {indices, values}}
  end
end

# Your functions will be called as such:
# RandomizedSet.init_()
# param_1 = RandomizedSet.insert(val)
# param_2 = RandomizedSet.remove(val)
# param_3 = RandomizedSet.get_random()

# RandomizedSet.init_ will be called before every test case, in which you can do some necessary initializations.
```