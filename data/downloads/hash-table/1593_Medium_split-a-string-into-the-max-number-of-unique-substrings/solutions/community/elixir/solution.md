# Elixir - Brute Force

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5945794/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5945794/)

---

# Complexity
- Time complexity: $$O(n ^ 3)$$ in worst case.

- Space complexity: $$O(n ^ 2)$$.

# Code
```elixir []
defmodule Solution do
  @spec max_unique_split(s :: String.t) :: non_neg_integer
  def max_unique_split(s) do
    solve(s, [])
  end

  # Recursively solve the problem.
  @spec solve(String.t(), [charlist()]) :: non_neg_integer() 
  defp solve(<<>>, _seen), do: 0

  defp solve(<<h, t::binary>>, seen) do
    for {rev_prefix, suffix} <- splits(t, [{[], t}]),
        prefix = [h | Enum.reverse(rev_prefix)],
        prefix not in seen,
        reduce: 0 do
      max -> max(max, solve(suffix, [prefix | seen]) + 1)
    end
  end

  # Calculates all possible splits of a given string.
  # Returns a list of `{rev_prefix, suffix}`
  # where `rev_prefix` is the reversed prefix (could be an empty charlist)
  # and `suffix` is the remaining string (could be an empty string).
  @spec splits(String.t(), acc) :: acc
        when acc: [{rev_prefix, suffix}],
             rev_prefix: charlist(),
             suffix: String.t()
  defp splits(<<>>, acc), do: acc

  defp splits(<<h, t::binary>>, [{rev_prefix, _} | _] = acc) do
    splits(t, [{[h | rev_prefix], t} | acc])
  end
end
```