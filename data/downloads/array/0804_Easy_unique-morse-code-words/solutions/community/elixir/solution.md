# Elixir simple map pipeline

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/4980634/](https://leetcode.com/problems/unique-morse-code-words/solutions/4980634/)

---

# Code
```
defmodule Solution do
  @alpha_morse [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
               |> Enum.with_index(?a)
               |> Map.new(fn {m, c} -> {c, m} end)

  @spec unique_morse_representations(words :: [String.t()]) :: integer
  def unique_morse_representations(words) do
    words
    |> Enum.map(&String.to_charlist/1)
    |> Enum.map(&Enum.map(&1, fn c -> @alpha_morse[c] end))
    |> Enum.map(&Enum.join/1)
    |> MapSet.new()
    |> MapSet.size()
  end
end
```