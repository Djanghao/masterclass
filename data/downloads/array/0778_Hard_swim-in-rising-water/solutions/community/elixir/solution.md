# [Elixir] Tail-recursive Djikstra's with Erlang's :gb_tree priority queue

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/2054310/](https://leetcode.com/problems/swim-in-rising-water/solutions/2054310/)

---

This problem is an application of Djikstra's algorithm. The marginal cost of going from cell (a,b) to cell (c,d) is either 0 if a,b has a higher elevation than c,d, or the difference between the two.

Djikstra's algorithm requires using the priority queue abstract data type, so that it prioritizes expansion along the least-expensive route. It also requires keeping track of the visited tiles so that you don't go in loops, which is accomplished by means of a set.

In most programming languages, a priority queue is implemented with a heap, that is to say, a mutable array. But this doesn't work in functional programming because we don't *have* mutable arrays! Instead we need to use a tree, which plays much nicer with immutability.

Elixir doesn't have a built-in priority queue tree, but because it's built on top of Erlang we can use Erlang's :gb_tree (General Balanced Tree) module which is extremely versatile. The only catch is that a GB requires unique keys (which an ordinary heap does not). Luckily, for this problem, we can solve that be encoding the key as {time, row, column} which is a sufficiently unique designation because we're independent of path. 

From there, we make use of the :gb_trees.take_smallest and :gb_trees.enter to execute Djikstra's algorithm. (Note that we're using enter() and not insert(); if we have a duplicate key we want to skip it rather than erroring out.) We parameterize the priority queue, the visited MapSet, and the grid (as a tuple for easy row/column access by position) and the size of the grid (for easy out-of-bounds checks).

```
**defmodule Solution do
  @spec swim_in_water(grid :: [[integer]]) :: integer
  def swim_in_water(grid) do
    n = length(grid)
    tuple_grid = grid |> Enum.map(&List.to_tuple/1) |> List.to_tuple
    start_time = elem(elem(tuple_grid, 0), 0)
    start_key = {start_time, 0, 0}
    initial_queue = :gb_trees.enter(start_key, {0,0}, :gb_trees.empty)
    djikstras(initial_queue, MapSet.new, tuple_grid, n)
  end

  def djikstras(pqueue, visited, grid, n) do
    {{time, r, c}, _, popped_queue} = :gb_trees.take_smallest(pqueue)

    cond do
      (r==n-1 and c==n-1) -> time
      (r<0 or c<0 or r==n or c==n) -> djikstras(popped_queue, visited, grid, n)
      MapSet.member?(visited, {r,c}) -> djikstras(popped_queue, visited, grid, n)
      true ->
        new_visited = MapSet.put(visited, {r,c})
        directions = [{r+1, c}, {r-1,c}, {r,c-1}, {r,c+1}]
        enqueue = fn {x, y}, q ->
          if (x<0 or y<0 or x==n or y==n) do
            q
          else
            new_time = max(time, elem(elem(grid, x), y))
            new_key = {new_time, x, y}
            :gb_trees.enter(new_key, {x,y}, q)
          end
        end
        pushed_queue = Enum.reduce(directions, popped_queue, enqueue)
        djikstras(pushed_queue, new_visited, grid, n)
    end
  end
end
```