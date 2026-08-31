# Elixir uses GenServer and :gb_sets

**Author:** Lykos_unleashed
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/4248286/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/4248286/)

---

# Approach
Uses GenServer to hold state between calls. Uses :gb_sets data structure which is an ordered set built on top of general balanced trees. A tie-breaker fraction value or a small increment is used to make elements unique within the gb_set since they don't allow duplicates. 

# Complexity
- Time complexity:
init - O(n * log(n))
add - O(log(n))

- Space complexity:
O(k)

# Code
```
defmodule KthLargest do
  use GenServer

  @tie_incr 0.00001

  @spec init_(k :: integer, nums :: [integer]) :: any
  def init_(k, nums) do
    sorted_k_nums = Enum.sort(nums, :desc) |> Enum.take(k)
    {set, tie} = for x <- sorted_k_nums, reduce: {:gb_sets.new, 0} do
      {set, tie} -> {:gb_sets.add(x + tie, set), tie + @tie_incr}
    end
    if Process.whereis(__MODULE__), do: GenServer.call(__MODULE__, {:reset, {set, tie, k}}),
    else: GenServer.start(__MODULE__, {set, tie, k}, name: __MODULE__)
  end

  @spec add(val :: integer) :: integer
  def add(val), do: GenServer.call(__MODULE__, {:add, val})

  @impl true
  def handle_call({:add, val}, _, {set, tie, k}) do
    {set, tie} = cond do
      :gb_sets.size(set) < k -> {:gb_sets.add(val + tie, set), tie + @tie_incr}
      val < :gb_sets.smallest(set) -> {set, tie}
      true -> {_, set} = :gb_sets.take_smallest(set)
              {:gb_sets.add(val + tie, set), tie + @tie_incr}
    end
    {:reply, floor(:gb_sets.smallest(set)), {set, tie, k}}
  end

  @impl true
  def handle_call({:reset, state}, _, _), do: {:reply, :ok, state}
end
```