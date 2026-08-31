# Tail Recursive Elixir Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/5098500/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/5098500/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec is_acronym(words :: [String.t], s :: String.t) :: boolean
  def is_acronym(words, s),  do: acronym?(words, s, true)

  defp acronym?([<<ch, _::bytes>> | tl], <<ch1, rest::bytes>>, acc) when ch == ch1 do 
    acronym?(tl, rest, acc)
  end   
  defp acronym?([], <<>>, acc), do: acc
  defp acronym?(_, _, _), do: false

end
```