# Elixir DFS

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/2107959/](https://leetcode.com/problems/throne-inheritance/solutions/2107959/)

---

```elixir
defmodule ThroneInheritance do
  use GenServer

  @spec init_(king_name :: String.t()) :: any
  def init_(king_name) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
    GenServer.call(__MODULE__, {:init, king_name})
  end

  @spec birth(parent_name :: String.t(), child_name :: String.t()) :: any
  def birth(parent_name, child_name) do
    GenServer.call(__MODULE__, {:birth, parent_name, child_name})
  end

  @spec death(name :: String.t()) :: any
  def death(name) do
    GenServer.call(__MODULE__, {:death, name})
  end

  @spec get_inheritance_order() :: [String.t()]
  def get_inheritance_order() do
    GenServer.call(__MODULE__, :order)
  end

  def init(state) do
    {:ok, state}
  end

  def handle_call({:init, king_name}, _from, _state) do
    {:reply, true, {king_name, %{}, MapSet.new()}}
  end

  def handle_call({:birth, parent_name, child_name}, _from, {king_name, children, death_note}) do
    children = Map.update(children, parent_name, [child_name], fn l -> [child_name | l] end)
    {:reply, true, {king_name, children, death_note}}
  end

  def handle_call({:death, name}, _from, {king_name, children, death_note}) do
    {:reply, true, {king_name, children, MapSet.put(death_note, name)}}
  end

  def handle_call(:order, _from, state) do
    {:reply, dfs(state), state}
  end

  def dfs(state) do
    dfs(state, []) |> Enum.reverse()
  end

  def dfs({name, children, death_note}, ans) do
    ans = if MapSet.member?(death_note, name), do: ans, else: [name | ans]

    children
    |> Map.get(name, [])
    |> Enum.reverse()
    |> Enum.reduce(ans, fn child, ans ->
      dfs({child, children, death_note}, ans)
    end)
  end
end

# Your functions will be called as such:
# ThroneInheritance.init_(king_name)
# ThroneInheritance.birth(parent_name, child_name)
# ThroneInheritance.death(name)
# param_3 = ThroneInheritance.get_inheritance_order()

# ThroneInheritance.init_ will be called before every test case, in which you can do some necessary initializations
```