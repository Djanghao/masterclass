# Elixir: Agent & List

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/5029140/](https://leetcode.com/problems/implement-stack-using-queues/solutions/5029140/)

---

# Code
```
defmodule MyStack do
  @spec init_() :: any
  def init_ do
    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> [] end, name: __MODULE__)
      _ -> Agent.cast(__MODULE__, fn _ -> [] end)
    end
  end

  @spec push(x :: integer) :: any
  def push(x) do
    Agent.cast(__MODULE__, List, :insert_at, [0, x])
  end

  @spec pop() :: integer
  def pop do
    Agent.get_and_update(__MODULE__, List, :pop_at, [0])
  end

  @spec top() :: integer
  def top do
    Agent.get(__MODULE__, List, :first, [])
  end

  @spec empty() :: boolean
  def empty do
    Agent.get(__MODULE__, Enum, :empty?, [])
  end
end
```