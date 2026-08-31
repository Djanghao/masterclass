# Elixir Approach and Solution

**Author:** bpfaust
**Votes:** 1
**Link:** [https://leetcode.com/problems/backspace-string-compare/solutions/1999422/](https://leetcode.com/problems/backspace-string-compare/solutions/1999422/)

---

# Approach
1. Convert each string into a list of its integer codepoints. 
2. Recursively step down each list to return a list representing what would be the final string after all typing. 
3. Note, the integer codepoint for a `#` is `35`. If `35` is encountered, remove the last entry from the list tracking inputs thus far, named `seen`. 
# Solution
```
defmodule Solution do
  @spec backspace_compare(s :: String.t, t :: String.t) :: boolean
  def backspace_compare(s, t) do
    (s |> String.to_charlist() |> check()) === (t |> String.to_charlist() |> check())
  end
    
  def check([], seen \\\\ []), do: seen
  def check([35 | tail], [_ | seen_tail]), do: check(tail, seen_tail)
  def check([35 | tail], []), do: check(tail, [])
  def check([c | tail], seen), do: check(tail, [c | seen])
end
```