# Simple reduce

**Author:** grantzukowski
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/5825719/](https://leetcode.com/problems/find-words-containing-character/solutions/5825719/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec find_words_containing(words :: [String.t], x :: char) :: [integer]
  def find_words_containing(words, x) do
    Enum.reduce(0..length(words) - 1, [], fn counter, acc ->
        word_to_search = Enum.at(words, counter)
        if String.contains?(word_to_search, <<x>>), do: acc ++ [counter], else: acc
    end)
  end
end
```