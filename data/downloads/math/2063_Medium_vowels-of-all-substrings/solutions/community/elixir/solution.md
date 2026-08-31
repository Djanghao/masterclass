# Elixir Recursion with String-as-Binary deconstruction

**Author:** erinawiggins
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/5632982/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/5632982/)

---

# Approach
Using recursion we can iterate through the string as a binary and check it against a vowels list. The formula `(index + 1) * (length - index)` tells us how many substrings the current vowel must exist in, since we are always getting substrings in a predictable way

# Code
```
defmodule Solution do
  @vowels ~w(a e i o u)

  @spec count_vowels(word :: String.t) :: integer
  def count_vowels(word) do
    count_vowels(word, 0, 0, String.length(word))
  end

  defp count_vowels(<<>>, _index, acc, _length), do: acc
  defp count_vowels(<<char::utf8, rest::binary>>, index, acc, length) do
    new_acc =
      if <<char::utf8>> in @vowels do
        acc + (index + 1) * (length - index)
      else
        acc
      end

    count_vowels(rest, index + 1, new_acc, length)
  end
end
```