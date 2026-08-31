# Elixir 100/100

**Author:** jowi-dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/6016983/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/6016983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I had just done a binary based problem so I knew the power of working in binary data for this one.

# Approach
<!-- Describe your approach to solving the problem. -->
I wanted to pattern match on binary and run through a recursive search and exit the first non match

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1) - I am not iterating at all from a time complexity perspective

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) - I am recursively searching which at worst case will take the size of the string s

# Code
```elixir []
defmodule Solution do
  @spec is_prefix_string(s :: String.t, words :: [String.t]) :: boolean
  def is_prefix_string(s, words) do
    is_prefix?(s, hd(words), tl(words))
  end

  defp is_prefix?(str, "", []) when str != "", do: false
  
  defp is_prefix?(<<a, strrest::binary>>, <<b, rest::binary>> , arr) do
    if a == b, 
      do: is_prefix?(strrest, rest, arr), 
      else: false
  end

  defp is_prefix?("", "", _), do: true
  defp is_prefix?(s, "", arr) when length(arr) > 0, do: is_prefix?(s, hd(arr), tl(arr))
  defp is_prefix?("", "", _), do: true
  defp is_prefix?("", _one, _), do: false
end
```