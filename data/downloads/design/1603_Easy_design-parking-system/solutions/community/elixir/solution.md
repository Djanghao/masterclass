# Elixir: Agent & Erlang array

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/5038870/](https://leetcode.com/problems/design-parking-system/solutions/5038870/)

---

# Code
```
defmodule ParkingSystem do
  @spec init_(big :: integer, medium :: integer, small :: integer) :: any
  def init_(big, medium, small) do
    init = :array.from_list([big, medium, small])

    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> init end, name: __MODULE__)
      _ -> Agent.cast(__MODULE__, fn _ -> init end)
    end
  end

  @spec add_car(car_type :: integer) :: boolean
  def add_car(car_type) do
    Agent.get_and_update(__MODULE__, fn state ->
      case :array.get(car_type - 1, state) do
        0 -> {false, state}
        n -> {true, :array.set(car_type - 1, n - 1, state)}
      end
    end)
  end
end
```