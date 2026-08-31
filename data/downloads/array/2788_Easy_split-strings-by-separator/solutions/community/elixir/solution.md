# Elegent Elixir Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/5095728/](https://leetcode.com/problems/split-strings-by-separator/solutions/5095728/)

---

# Complexity
- Time complexity:$$O(n*m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n*m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec split_words_by_separator(words :: [String.t], separator :: char) :: [String.t]
  def split_words_by_separator(words, separator) do
    words 
        |> Enum.map(&(String.split(&1, <<separator>>)))
        |> Enum.concat()
        |> Enum.filter(&(&1 != ""))
  end
end
```