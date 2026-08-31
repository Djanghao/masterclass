# Elixir One-Liner

**Author:** bpfaust
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/2818275/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/2818275/)

---

# Approach
1. Split `s` into a List of words using `String.split\\1`. 
2. Reverse the List of words using `Enum.reverse\\1`.
3. Recombine the words into a sentence using `Enum.join\\2` using `" "` as the joiner. 
# Solution
```
defmodule Solution do
  @spec reverse_words(s :: String.t) :: String.t
  def reverse_words(s), do: s |> String.split |> Enum.reverse |> Enum.join(" ")
end
```