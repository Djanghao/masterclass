# Elixir solution

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5072227/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5072227/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 329ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.73MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec number_of_special_chars(word :: String.t) :: integer
  def number_of_special_chars(word) do
    Enum.reduce(String.codepoints(word), %{}, fn ch, cnts ->
      if ch >= "a" and String.contains?(word, String.upcase(ch)) do
        Map.put(cnts, ch, true)
      else
        cnts
      end
    end)
    |> map_size()
  end
end

```