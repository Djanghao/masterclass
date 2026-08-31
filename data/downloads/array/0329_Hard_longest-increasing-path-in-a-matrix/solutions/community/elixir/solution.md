# [Elixir] Dynamic programming DFS

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/2053829/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/2053829/)

---

Whoo, boy, this is a tough one in a functional programming language.

So, the concept is pretty simple--it's just a memoized depth-first search. The problem is that in most languages the approach is to have a DFS recursive loop, and then update the cache as a side effect. That's not allowed in a functional programming language.

One way to get around this in Elixir would be to spawn an Agent and then get/put memoized values there. But...that's kind of cheating, so I'm going to skip it. 

Instead, we have to rewrite our thinking from "the purpose of the DFS is to find the largest value" to "the purpose of the DFS is to populate the cache." That means that each call to the DFS needs to receive an incomplete cache, populate it with the value of a particular row and column (and any dependencies), and then return that updated cache. However, we need to skip that calculation under three circumstance: if the region is OOB, if the cache is already populated, or if doing so would create a loop. Luckily for us, in this problem the strictly increasing requirement doubles as a way to prevent backtracking, so we can use that as a check.

Armed with such a function, we simple initialize an empty cache map, apply the function to the map and all r,c, and then get the largest value out of the map at the end.

Couple other tricks I'm using:
* Converting the list-of-lists into a tuple-of-tuples to make accessing by element easier.
* Using a two-level "for" comprehension to populate all r,c
* Offloading the "run_calc?" boolean check to keep the code clean

The two piped sections for d_cache and path_length could theoretically be rewritten as reduce statements, with the directionality encoded as a list of 2-tuples, but I think it's more readable this way.

```

defmodule Solution do
  @spec longest_increasing_path(matrix :: [[integer]]) :: integer
  def longest_increasing_path(matrix) do
    tupleized = matrix |> Enum.map(&List.to_tuple/1) |> List.to_tuple()

    # Measure size of matrix
    m = tuple_size(tupleized)
    n = tuple_size(elem(tupleized, 0))

    # Set up accumulator lambda
    add_to_cache = fn {r,c}, acc ->
      calc_longest_increasing_path(acc, tupleized, m, n, r, c)
    end

    # Set up list of cells to populate in the cache
    loc_array = for r <- 0..m-1, c<-0..n-1 do
      {r,c}
    end

    # Initialize an empty cache, populate it for all {r,c}, then take the max value
    loc_array |> Enum.reduce(%{}, add_to_cache) |> Map.values |> Enum.max
  end

  defp run_calc?(cache, matrix, m, n, r, c, prev) do
    # Check if we need to populate the cache for this r,c
    cond do
      Map.has_key?(cache, {r,c}) -> false  # Don't rerun if already cached
      r < 0 or c < 0 or r >= m or c >= n -> false # Don't run if out-of-bounds
      elem(elem(matrix, r), c) <= prev -> false # Don't run if it's a non-increasing path
      true -> true
    end
  end

  def calc_longest_increasing_path(cache, matrix, m, n, r, c, prev \\\\ -1) do
    if run_calc?(cache, matrix, m, n, r, c, prev) do
      cell_value = elem(elem(matrix, r), c)

      # Populate the cache for any directions with a higher value than the current cell
      d_cache =
        cache
        |> calc_longest_increasing_path(matrix, m, n, r - 1, c, cell_value)
        |> calc_longest_increasing_path(matrix, m, n, r, c + 1, cell_value)
        |> calc_longest_increasing_path(matrix, m, n, r + 1, c, cell_value)
        |> calc_longest_increasing_path(matrix, m, n, r, c - 1, cell_value)

      # Find the longest increasing path length using the now-populated cache
      max_if_greater = fn curr, x, y ->
        cond do
          x < 0 or y < 0 or x >= m or y >= n -> curr
          elem(elem(matrix, x), y) <= cell_value -> curr
          true -> max(curr, 1 + Map.get(d_cache, {x, y}))
        end
      end

      path_length = 1
                    |> max_if_greater.(r-1,c)
                    |> max_if_greater.(r,c+1)
                    |> max_if_greater.(r+1,c)
                    |> max_if_greater.(r,c-1)

      # Update the cache for the current cell and return it
      Map.put(d_cache, {r,c}, path_length)
    else
      cache
    end
  end
end
```