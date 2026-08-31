# Elixir One-Line Approach and Solution

**Author:** bpfaust
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/2343318/](https://leetcode.com/problems/valid-anagram/solutions/2343318/)

---

# Approach
1. Convert both `s` and `t` into a list of the characters' integer code points using `String.to_charlist/1`. 
2. Count each character occurence into a map of frequencies using `Enum.frequencies/1`. 
3. Compare both maps to determine if they are equal using `Kernel.==/2`. 
# Solution
301 ms runtime, using 60.9 MB of memory. 
```
defmodule Solution do
  @spec is_anagram(s :: String.t, t :: String.t) :: boolean
  def is_anagram(s, t), do: (s |> String.to_charlist |> Enum.frequencies) == (t |> String.to_charlist |> Enum.frequencies)
end
```