# Elixir memoization solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/2005807/](https://leetcode.com/problems/generate-parentheses/solutions/2005807/)

---

```elixir
defmodule Solution do
  @spec generate_parenthesis(n :: integer) :: [String.t]
  def generate_parenthesis(n) do
    Task.async(fn -> gen_parens(n) end)
    |> Task.await(:infinity)
    |> Enum.to_list()
  end

  defp gen_parens(0), do: []

  defp gen_parens(1), do: ["()"]

  defp gen_parens(n) do
    memoized(n, fn ->
	  # For n pairs of parens,
	  # first, for each possible k, recursively solve k pairs for the first part, and (n-k) pairs for the second part,
	  # then for each pair in the cartessian product of those subsolutions,
	  # concatenate the first part with the second part.
      solutions = 
        for i <- 1..n-1//1,
            j = n - i,
            front <- gen_parens(i),
            rear <- gen_parens(j),
            into: MapSet.new() do
          front <> rear
        end
  
      # Then, we solve the n-1 pairs,
	  # and for each n-1 subsolution,
	  # surround that subsolution in an additional pair of parens.
      gen_parens(n-1)
      |> Stream.map(&"(#{&1})")
      |> Enum.into(solutions)
    end)
  end

  defp memoized(key, fun) do
    case Process.get(key) do
      nil ->
        value = fun.()
        Process.put(key, value)
        value
      value ->
        value
    end
  end
end
```