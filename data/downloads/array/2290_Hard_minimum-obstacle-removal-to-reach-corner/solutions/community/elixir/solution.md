# [Elixir] 0-1 BFS (I can't optimize it more!)

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6091359/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6091359/)

---

This is by far the most annoying problem I've ever met. It's not that hard to come up with Dijkstra algo, but it's the time limit that's so tight for Elixir to pass.

# Optimizations I've tried so far
- Tried Dijkstra with `:gb_sets.set(integer, :queue.queue())` as the priority queue, got TLE at 33 / 54.
- Tried Dijkstra with pairing heap as the priority queue, got TLE at 34 / 54.
- Converted the 2D list to 2D tuple instead of `%{{i, j} => val}`, got TLE at 43 / 54.
- Tried 0-1 BFS instead of Dijkstra, got TLE at 53 / 54.
- Tried `:gb_sets.set()` instead of `MapSet.t()` to track the visited tiles in order to avoid hashing, got TLE at 50 / 54 (I guess that's because a map is an HAMT and a `:gb_sets.set()` is an AVL-ish tree, so a `:gb_sets.set()` is about 5 times higher than the underlying tree of a map containing same amount of entries, which makes CPU cache locality worse).
- Tried using process dictionary for tracking visited tiles, finally passed all TC in ~2000ms.
- Maybe ETS works, too, but its API is just too shabby.

# Code
```elixir []
defmodule Solution do

  # Just for the syntax `grid[{i, j}]`
  # because I'm too lazy to refactor my code.
  defmodule Grid do
    @behaviour Access

    defstruct [:data, :ibound, :jbound]

    def new(list_2d) do
      tuple_2d =
        list_2d
        |> Enum.map(&List.to_tuple/1)
        |> List.to_tuple()
      
      %__MODULE__{
        data: tuple_2d,
        ibound: tuple_size(tuple_2d) - 1,
        jbound: tuple_size(elem(tuple_2d, 0)) - 1
      }
    end

    @impl true
    def fetch(grid, {i, j}) do
      if i < 0 or i > grid.ibound or j < 0 or j > grid.jbound do
        :error
      else
        {:ok, grid.data |> elem(i) |> elem(j)}
      end
    end

    @impl true
    def get_and_update(_, _, _) do
      raise RuntimeError, "Not implemented"
    end

    @impl true
    def pop(_, _) do
      raise RuntimeError, "Not implemented"
    end
  end

  @spec minimum_obstacles(grid :: [[integer]]) :: integer
  def minimum_obstacles(grid) do
    grid = Grid.new(grid)

    deque = :queue.from_list([{{0, 0}, grid[{0, 0}]}])

    dst = {grid.ibound, grid.jbound}

    # Because we're gonna use process dictionary for tracking visited tiles,
    # we better create a child process
    # so that the parent process's dictionary is not polluted.
    Task.async(fn ->
      bfs_01(deque, grid, dst)
    end)
    |> Task.await()
  end

  defp bfs_01(deque, grid, dst) do
    {{:value, {{i, j}, effort}}, deque} = :queue.out(deque)

    cond do
      {i, j} == dst ->
        effort

      Process.get({i, j}) ->
        bfs_01(deque, grid, dst)

      true ->
        Process.put({i, j}, true)

        deque =
          for neighbor <- [{i, j - 1}, {i, j + 1}, {i - 1, j}, {i + 1, j}],
              val = grid[neighbor],
              reduce: deque do
            deque ->
              if val == 0 do
                :queue.in_r({neighbor, effort}, deque)
              else
                :queue.in({neighbor, effort + 1}, deque)
              end
          end

        bfs_01(deque, grid, dst)
    end
  end
end
```