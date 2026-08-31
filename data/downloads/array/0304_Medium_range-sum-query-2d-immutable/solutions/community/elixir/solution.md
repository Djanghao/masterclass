# Elixir Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2037459/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2037459/)

---

```elixir
defmodule NumMatrix do
  use GenServer

  @spec init_(matrix :: [[integer]]) :: any
  def init_(matrix) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
    matrix = matrix
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {row, i}, acc ->
        row
        |> Enum.with_index()
        |> Enum.reduce(acc, fn {n, j}, acc ->
          Map.put(
            acc,
            {i + 1, j + 1},
            Map.get(acc, {i, j + 1}, 0) + Map.get(acc, {i + 1, j}, 0) -
              Map.get(acc, {i, j}, 0) + n
          )
        end)
      end)
    GenServer.call(__MODULE__, {:init, matrix})
  end

  @spec sum_region(row1 :: integer, col1 :: integer, row2 :: integer, col2 :: integer) :: integer
  def sum_region(row1, col1, row2, col2) do
    GenServer.call(__MODULE__, {:sum_region, row1, col1, row2, col2})
  end

  def init(state) do
    {:ok, state}
  end

  def handle_call({:init, mat}, _from, _state) do
    {:reply, true, mat}
  end

  def handle_call({:sum_region, r1, c1, r2, c2}, _from, state) do
    {:reply,
     Map.get(state, {r2 + 1, c2 + 1}, 0) - Map.get(state, {r2 + 1, c1}, 0) -
       Map.get(state, {r1, c2 + 1}, 0) + Map.get(state, {r1, c1}, 0), state}
  end
end

# Your functions will be called as such:
# NumMatrix.init_(matrix)
# param_1 = NumMatrix.sum_region(row1, col1, row2, col2)

# NumMatrix.init_ will be called before every test case, in which you can do some necessary initializations.
```