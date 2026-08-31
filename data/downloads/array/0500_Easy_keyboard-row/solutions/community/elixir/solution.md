# Elixir solution using local functions, pipes and comprehensions

**Author:** foxesknow
**Votes:** 1
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/3764502/](https://leetcode.com/problems/keyboard-row/solutions/3764502/)

---

# Code
```
defmodule Solution do
  @spec find_words(words :: [String.t]) :: [String.t]
  def find_words(words) do
    top = "qwertyuiop" |> String.graphemes |> MapSet.new
    middle = "asdfghjkl" |> String.graphemes |> MapSet.new
    bottom = "zxcvbnm" |> String.graphemes |> MapSet.new

    check_word = fn(word) ->
      as_set = word |> String.downcase 
                    |> String.graphemes 
                    |> MapSet.new

        MapSet.subset?(as_set, top) or MapSet.subset?(as_set, middle) or MapSet.subset?(as_set, bottom)
    end

    for word <- words, check_word.(word), do: word
  end
end

IO.inspect(Solution.find_words(["Hello","Alaska","Dad","Peace"]))
IO.inspect(Solution.find_words(["omk"]))
IO.inspect(Solution.find_words(["adsdf","sfd"]))
```