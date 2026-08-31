# Elixir - Hash Table

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285289/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/4285289/)

---

# Approach
1. For each char in `s`, we record all the positions (indices) that of that char. For the sake of performance, I also recorded the position of its first and last appearance.
2. For each char `c`, count how many kinds of chars (including `c`) that appears in between `c`'s first and last appearance.
3. Sum them up.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```elixir
defmodule Solution do
  @spec count_palindromic_subsequence(s :: String.t) :: integer
  def count_palindromic_subsequence(s) do
    positions =
      s
      |> :binary.bin_to_list()
      |> Stream.with_index()
      |> Enum.reduce(%{}, fn {char, i}, acc ->
        Map.update(acc, char, {i, i, [i]}, fn {first, _last, indices} ->
          {first, i, [i | indices]}
        end)
      end)

    for {_, {first, last, [_, _ | _]}} <- positions, reduce: 0 do
      acc ->
        Enum.count(positions, fn {_, {_, _, indices}} ->
          Enum.any?(indices, & &1 > first and &1 < last)
        end) + acc
    end
  end
end
```