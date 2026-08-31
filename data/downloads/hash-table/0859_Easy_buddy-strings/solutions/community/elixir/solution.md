# Elixir, binary pattern matching

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/4275036/](https://leetcode.com/problems/buddy-strings/solutions/4275036/)

---

# Approach
Uses binary pattern matching to iterate the strings character by character. Keeps track of mismatch count of characters in both strings, character frequencies of s and goal. If the mismatch count is zero, then it means that both strings are equal. In this case, if the string s has more than one same character, they can be swapped. If the mismatch count is 2, then check if both strings have the same characters by checking the frequency maps. If the mismatch count is anything other than this, then the answer is false.

# Complexity
- Time complexity:
O(n) where n is the length of string s 

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec buddy_strings(s :: String.t, goal :: String.t) :: boolean
  def buddy_strings(s, goal) when byte_size(s) != byte_size(goal), do: false
  def buddy_strings(s, goal), do: do_buddy_strings(s, goal, %{}, %{}, 0, false)

  defp do_buddy_strings(_s, _goal, _s_freq, _goal_freq, 3, _more_than_1_same_chars?), do: false
  defp do_buddy_strings(<<f, rest1::bytes>>, <<f1, rest2::bytes>>, s_freq, goal_freq, mismatch_count, more_than_1_same_chars?) do
    mismatch_count = if f == f1, do: mismatch_count, else: mismatch_count + 1
    char_count = Map.get(s_freq, f, 0) + 1
    do_buddy_strings(rest1, rest2, Map.put(s_freq, f, char_count), Map.update(goal_freq, f1, 1, &(&1 + 1)), mismatch_count, more_than_1_same_chars? or char_count > 1) 
  end
  defp do_buddy_strings(<<>>, <<>>, s_freq, goal_freq, mismatch_count, more_than_1_same_chars?) do
    case mismatch_count do
      0 -> more_than_1_same_chars?
      2 -> s_freq == goal_freq
      _ -> false
    end
  end
end
```