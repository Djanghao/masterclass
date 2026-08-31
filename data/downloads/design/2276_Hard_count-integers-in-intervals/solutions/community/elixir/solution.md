# Elixir with GenServer & gb_trees

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/3126541/](https://leetcode.com/problems/count-integers-in-intervals/solutions/3126541/)

---

# Complexity
- add(): Amortized O(log(n)). Multiple existing key-value pairs may be deleted in an add() operation, but the number of deleted keys is never more than the number of previous add() calls.
- count(): O(1).
- Space complexity: O(n).

Where n is number of calls of add() and count().
# Code
```elixir
defmodule CountIntervals do
  use GenServer

  @spec init_() :: any
  def init_() do
    GenServer.start_link(__MODULE__, nil, [name: __MODULE__])
    GenServer.call(__MODULE__, :reset)
  end

  @spec add(left :: integer, right :: integer) :: any
  def add(left, right) do
    GenServer.call(__MODULE__, {:add, left, right})
  end

  @spec count() :: integer
  def count() do
    GenServer.call(__MODULE__, :count)
  end

  @impl true
  def init(_) do
    {:ok, nil}
  end

  @impl true
  def handle_call(:reset, _, _) do
    {:reply, true, {:gb_trees.empty, 0}}
  end

  def handle_call({:add, left, right}, _, {tree, count}) do
    iter = :gb_trees.iterator_from(left - 1, tree)
    {tree, count} = update_tree({tree, count}, left, right, iter)
    {:reply, true, {tree, count}}
  end

  def handle_call(:count, _, {tree, count}) do
    {:reply, count, {tree, count}}
  end

  defp update_tree({tree, count}, left, right, iter) do
    case :gb_trees.next(iter) do
      {hi, lo, iter} when lo <= right + 1 ->
        tree = :gb_trees.delete(hi, tree)
        count = count - hi + lo - 1
        left = min(left, lo)
        right = max(right, hi)
        update_tree({tree, count}, left, right, iter)
      _ ->
        tree = :gb_trees.insert(right, left, tree)
        count = count + right - left + 1
        {tree, count}
    end
  end
end

# Your functions will be called as such:
# CountIntervals.init_()
# CountIntervals.add(left, right)
# param_2 = CountIntervals.count()

# CountIntervals.init_ will be called before every test case, in which you can do some necessary initializations.
```