# tail_recursion |> function_clause_matching = {:ok, O(n)} #2solutions

**Author:** K11ZU
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/5886781/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/5886781/)

---

# Code

### Optimized for memory:
```elixir []
defmodule Solution do

  @vowels ~c"aeiouAEIOU"
  @spec reverse_vowels(s :: String.t) :: String.t
  def reverse_vowels(s) do
    s
    |> find_vowels()
    |> substitute_vowels(s)    
  end
  
  defp substitute_vowels(vowels, text, acc \\\\ "")
  defp substitute_vowels([v | vowels], <<c, text::binary>>, acc) when c in @vowels do
    substitute_vowels(vowels, text, acc <> <<v>>)
  end
  defp substitute_vowels(vowels, <<c, text::binary>>, acc) do
    substitute_vowels(vowels, text, acc <> <<c>>)
  end
  defp substitute_vowels( _, _, acc) do
    acc
  end

  defp find_vowels(text, vowels \\\\ [])
  defp find_vowels(<<v, text::binary>>, vowels) when v in @vowels do
    find_vowels(text, [v | vowels])
  end
  defp find_vowels(<<_, text::binary>>, vowels)do
    find_vowels(text, vowels)
  end
  defp find_vowels(_, vowels) do
    vowels
  end
  
end
```

### Optimized for runtime:
```elixir []
defmodule Solution do

  @vowels ~c"aeiouAEIOU"

  @spec reverse_vowels(s :: String.t) :: String.t
  def reverse_vowels(s) do
    s
    |> find_vowels()
    |> substitute_vowels(s)
    |> Enum.reverse()
    |> List.to_string()
    
  end
  defp substitute_vowels(vowels, text, acc \\\\ [])
  defp substitute_vowels([v | vowels], <<c, text::binary>>, acc) when c in @vowels do
    substitute_vowels(vowels, text, [v | acc])
  end
  defp substitute_vowels(vowels, <<c, text::binary>>, acc) do
    substitute_vowels(vowels, text, [c | acc])
  end
  defp substitute_vowels( _, _, acc) do
    acc
  end

  defp find_vowels(text, vowels \\\\ [])
  defp find_vowels(<<v, text::binary>>, vowels) when v in @vowels do
    find_vowels(text, [v | vowels])
  end
  defp find_vowels(<<_, text::binary>>, vowels)do
    find_vowels(text, vowels)
  end
  defp find_vowels(_, vowels) do
    vowels
  end
  
end
```
# Approach
<!-- Describe your approach to solving the problem. -->
Create a list of vowels appearing in the string in reverse order
|> Put them in the right places
# Complexity
- Time complexity:
$$O(n)$$
