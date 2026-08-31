# Fast Elixir solution

**Author:** juumixx
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2636564/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2636564/)

---

Traversing the input with two pointers to the beginning and the end of a window:
```
defmodule Solution do
  @spec length_of_longest_substring(s :: String.t()) :: integer
  def length_of_longest_substring(s) do
    sublen([], String.codepoints(s), 0, 0, 0)
  end

  defp sublen(_, [], _, _, m), do: m
  
  defp sublen(left, [next | rest] = right, start, stop, m) do
    if Enum.member?(left, next) do
      [_ | mid] = left
      sublen(mid, right, start + 1, stop, m)
    else
      stop = stop + 1
      sublen(left ++ [next], rest, start, stop, max(m, stop - start))
    end
  end
end
```

The conversion from String to List costs more memory initially, but linear list traversal is fast compared to repeated indexed String access:
> Runtime: 458 ms, faster than 94.74% of Elixir online submissions for Longest Substring Without Repeating Characters.
> Memory Usage: 62 MB, less than 15.79% of Elixir online submissions for Longest Substring Without Repeating Characters.

It could possibly be optimized by using a Map for keeping the elements of the current window.