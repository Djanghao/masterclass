# Brute Force simple Elixir solution

**Author:** nickshbln
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/5105316/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/5105316/)

---

# Complexity
- Time complexity: $$O(n * m)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n + m)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec num_of_strings(patterns :: [String.t], word :: String.t) :: integer
  def num_of_strings(patterns, word) do
    patterns
    |> Enum.count(fn x -> String.contains?(word, x) end)
  end
end

```