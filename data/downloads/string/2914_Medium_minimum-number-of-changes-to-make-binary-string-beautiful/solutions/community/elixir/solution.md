# Elixir - Greedy

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008792/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008792/)

---

# Algorithm
1. Split the string to characters.
2. Group all the consecutive same characters into one chunk, e.g. `[1,0,0,1,1,0]` => `[[1], [0,0], [1,1], [0]]`.
3. Calculate the lengths of all chunks.
4. For each chunk length, if it's even, then no change required. If it's odd, shrink the next chunk by 1 char and solve the problem.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```elixir []
defmodule Solution do
  import Integer, only: [is_odd: 1]

  @spec min_changes(s :: String.t) :: integer
  def min_changes(s) do
    s
    |> :binary.bin_to_list()
    |> Enum.chunk_by(&Function.identity/1)
    |> Enum.map(&length/1)
    |> solve(0)
  end

  defp solve([a, b | t], acc) when is_odd(a) do
    solve([b - 1 | t], acc + 1)
  end

  defp solve([_ | t], acc) do
    solve(t, acc)
  end

  defp solve([], acc) do
    acc
  end
end
```