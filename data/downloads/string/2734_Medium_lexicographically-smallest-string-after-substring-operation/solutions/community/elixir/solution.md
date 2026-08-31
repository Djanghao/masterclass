# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3636421/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3636421/)

---

# Approach
1. Find the 1st non-"a".
2. Start replacing with previous letters until seeing the next "a".
3. Ignore the remaining letters.
4. If all letters are "a", replace the last one with "z".
# Code
```
defmodule Solution do
  @spec smallest_string(s :: String.t) :: String.t
  def smallest_string(s) do
    String.to_charlist(s)
    |> Enum.map_reduce(:find, fn
      ?a, :find -> {?a, :find}
      ch, :find -> {ch - 1, :replace}
      ?a, :replace -> {?a, :ignore}
      ch, :replace -> {ch - 1, :replace}
      ch, :ignore -> {ch, :ignore}
    end)
    |> then(fn
      {[_ | tail], :find} -> to_string(tail) <> "z"
      {list, _} -> to_string(list)
    end)
  end
end
```