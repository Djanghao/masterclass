# Elixir MapSet solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3108660/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3108660/)

---

# Complexity
- add_num(): O(1)
- get_intervals(): O(max(value) - min(value))
- Space complexity: O(n)

Where n is number of calls of add_num().

# Code
```elixir
defmodule SummaryRanges do
  use GenServer

  @spec init_() :: any
  def init_() do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
    GenServer.call(__MODULE__, :reset)
  end

  @spec add_num(value :: integer) :: any
  def add_num(value) do
    GenServer.call(__MODULE__, {:add, value})
  end

  @spec get_intervals() :: [[integer]]
  def get_intervals() do
    GenServer.call(__MODULE__, :list)
  end

  # Callbacks

  @impl true
  def handle_call(:reset, _, _) do
    {:reply, true, {MapSet.new(), 10001, -1}}
  end

  @impl true
  def handle_call({:add, value}, _, {set, lo, hi}) do
    {:reply, true, {MapSet.put(set, value), min(lo, value), max(hi, value)}}
  end

  @impl true
  def handle_call(:list, _, {set, lo, hi}) do
    list = output_list([], hi, nil, lo, set)
    {:reply, list, {set, lo, hi}}
  end

  defp output_list(list, curr, nil, lo, _) when curr < lo, do: list
  defp output_list(list, curr, from, lo, set) do
    case {MapSet.member?(set, curr), from} do
      {true, nil} -> output_list(list, curr - 1, curr, lo, set)
      {false, nil} -> output_list(list, curr - 1, nil, lo, set)
      {true, _} -> output_list(list, curr - 1, from, lo, set)
      {false, _} -> output_list([[curr + 1, from] | list], curr - 1, nil, lo, set)
    end
  end
end

# Your functions will be called as such:
# SummaryRanges.init_()
# SummaryRanges.add_num(value)
# param_2 = SummaryRanges.get_intervals()

# SummaryRanges.init_ will be called before every test case, in which you can do some necessary initializations.
```