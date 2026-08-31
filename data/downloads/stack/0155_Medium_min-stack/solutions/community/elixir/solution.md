# Elixir: Agent & two lists

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-stack/solutions/5045124/](https://leetcode.com/problems/min-stack/solutions/5045124/)

---

# Code
```
defmodule MinStack do
  @spec init_() :: any
  def init_ do
    init = {[], []}

    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> init end, name: __MODULE__)
      _ -> Agent.cast(__MODULE__, fn _ -> init end)
    end
  end

  @spec push(val :: integer) :: any
  def push(val) do
    Agent.cast(__MODULE__, fn
      {stack, [min_h | _] = min} when val <= min_h -> {[val | stack], [val | min]}
      {stack, []} -> {[val | stack], [val]}
      {stack, min} -> {[val | stack], min}
    end)
  end

  @spec pop() :: any
  def pop do
    Agent.cast(__MODULE__, fn
      {[h | stack], [h | min]} -> {stack, min}
      {[h | stack], min} -> {stack, min}
    end)
  end

  @spec top() :: integer
  def top do
    Agent.get(__MODULE__, fn {[h | _], _} -> h end)
  end

  @spec get_min() :: integer
  def get_min do
    Agent.get(__MODULE__, fn {_, [m | _]} -> m end)
  end
end
```