# Elixir: using Agent and Erlang queue

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-queue-using-stacks/solutions/5029159/](https://leetcode.com/problems/implement-queue-using-stacks/solutions/5029159/)

---

# Code
```
defmodule MyQueue do
  @spec init_() :: any
  def init_ do
    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> :queue.new() end, name: __MODULE__)
      _ -> Agent.cast(__MODULE__, fn _ -> :queue.new() end)
    end
  end

  @spec push(x :: integer) :: any
  def push(x) do
    Agent.cast(__MODULE__, fn state -> :queue.in(x, state) end)
  end

  @spec pop() :: integer
  def pop do
    Agent.get_and_update(__MODULE__, fn state ->
      case :queue.out(state) do
        {{:value, val}, state} -> {val, state}
        x -> x
      end
    end)
  end

  @spec peek() :: integer
  def peek do
    Agent.get(__MODULE__, fn state ->
      case :queue.peek(state) do
        {:value, val} -> val
        x -> x
      end
    end)
  end

  @spec empty() :: boolean
  def empty do
    Agent.get(__MODULE__, :queue, :is_empty, [])
  end
end
```