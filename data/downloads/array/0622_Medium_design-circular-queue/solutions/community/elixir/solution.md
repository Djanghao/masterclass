# Elixir - overkill

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-circular-queue/solutions/2367941/](https://leetcode.com/problems/design-circular-queue/solutions/2367941/)

---

This solution is mimicking C solution, and is very much an overkill in Elixir because

1. Since I'm using a map (instead of an fixed-size array) as the container for performance reason, usually we don't care about the capacity because maps have infinite capacity.
2. We don't have to restrict the indices (the keys of the map) within the range `0..capacity` because integers in Elixir can be arbitrarily large.
3. Returning `-1` for failure is very C-ish. We can just return `{:ok, something}` or `{:error, some_reason}`.
4. And, we already have the Erlang module `:queue` that has an amortized O(1) performance in enqueue, dequeue and get value from either end, which should be good enough to build a cheating implementation.

Anyway, this is my approach.

```elixir
defmodule MyCircularQueue do
  defmodule Q do
    defstruct capacity: 0, container: %{}, front: 0, rear: 0

    def new(capacity), do: %__MODULE__{capacity: capacity}

    def size(%__MODULE__{
      front: front,
      rear: rear,
      capacity: capacity
    } = q) do
      cond do
        full?(q) -> capacity
        empty?(q) -> 0
        true -> rem(rear - front + capacity, capacity)
      end
    end

    def empty?(%__MODULE__{
      front: front,
      rear: rear,
      container: container
    }), do: front == rear and not Map.has_key?(container, front)

    def full?(%__MODULE__{
      front: front,
      rear: rear,
      container: container
    }), do: front == rear and Map.has_key?(container, front)

    def enqueue(%__MODULE__{
      rear: rear,
      container: container,
      capacity: capacity
    } = q, value) do
      if full?(q) do
        {:error, :full}
      else
        {:ok, %{q | rear: rem(rear + 1, capacity), container: Map.put(container, rear, value)}}
      end
    end

    def dequeue(%__MODULE__{
      front: front,
      container: container,
      capacity: capacity
    } = q) do
      if empty?(q) do
        {:error, :empty}
      else
        {:ok, %{q | front: rem(front + 1, capacity), container: Map.delete(container, front)}}
      end
    end

    def front(%__MODULE__{
      front: f,
      container: container
    }) do
      with :error <- Map.fetch(container, f) do
        {:error, :empty}
      end
    end

    def rear(%__MODULE__{
      rear: r,
      container: container,
      capacity: capacity
    }) do
      with :error <- Map.fetch(container, rem(r - 1 + capacity, capacity)) do
        {:error, :empty}
      end
    end
  end
  
  use GenServer

  @spec init_(capacity :: integer) :: any
  def init_(capacity) do
    with {:error, {:already_started, pid}} <- GenServer.start_link(__MODULE__, capacity, name: __MODULE__) do
      GenServer.stop(pid)
      init_(capacity)
    end
  end

  @impl GenServer
  def init(capacity) do
    {:ok, Q.new(capacity)}
  end

  @spec en_queue(value :: integer) :: boolean
  def en_queue(value) do
    GenServer.call(__MODULE__, {:enqueue, value})
  end

  @spec de_queue() :: boolean
  def de_queue() do
    GenServer.call(__MODULE__, :dequeue)
  end

  @spec front() :: integer
  def front() do
    GenServer.call(__MODULE__, :front)
  end

  @spec rear() :: integer
  def rear() do
    GenServer.call(__MODULE__, :rear)
  end

  @spec is_empty() :: boolean
  def is_empty() do
    GenServer.call(__MODULE__, :is_empty)
  end

  @spec is_full() :: boolean
  def is_full() do
    GenServer.call(__MODULE__, :is_full)
  end

  @impl GenServer
  def handle_call({:enqueue, value}, _, q) do
    case Q.enqueue(q, value) do
      {:ok, q} -> {:reply, true, q}
      {:error, :full} -> {:reply, false, q}
    end
  end

  def handle_call(:dequeue, _, q) do
    case Q.dequeue(q) do
      {:ok, q} -> {:reply, true, q}
      {:error, :empty} -> {:reply, false, q}
    end
  end

  def handle_call(:front, _, q) do
    case Q.front(q) do
      {:ok, value} -> {:reply, value, q}
      {:error, :empty} -> {:reply, -1, q}
    end
  end

  def handle_call(:rear, _, q) do
    case Q.rear(q) do
      {:ok, value} -> {:reply, value, q}
      {:error, :empty} -> {:reply, -1, q}
    end
  end

  def handle_call(:is_full, _, q) do
    {:reply, Q.full?(q), q}
  end
  
  def handle_call(:is_empty, _, q) do
    {:reply, Q.empty?(q), q}
  end
end
```