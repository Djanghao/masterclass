# 100/96 Elixir Solution O(1) Time O(N) Space

**Author:** jowi-dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6033797/](https://leetcode.com/problems/string-compression-iii/solutions/6033797/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I've seen a few problems similar to this requiring keeping a tab on the number of times a character has occurred, so I knew keeping a raw integer count would be the easiest way.

# Approach
<!-- Describe your approach to solving the problem. -->
Binary operations in Elixir have been a revelation in performance. I wanted to avoid using anything that was using the String or Enum modules this time as they seem to cause a lot of complexity, and they require a final reversal of the string at the end, where this method does not.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1) - This is entirely a recursive run

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) - This is a single pass recursion to find the counts and compress

# Code
```elixir []
defmodule Solution do
  @spec compressed_string(word :: String.t) :: String.t
  def compressed_string(""), do: ""
  def compressed_string(<<c, rest::binary>>) do
    compress(rest, c, 1, "")
  end

  

  defp compress(<<c, rest::binary>>, c, count, out) when count < 9, 
    do: compress(rest, c, count + 1, out)

  defp compress(<<nc, rest::binary>>, c, count, out) do
    out = append(out, c, count)

    compress(rest, nc, 1, out)
  end

  defp compress(<<c, rest::binary>>, c, 9, out) do
    out = append(out, c, 9)
    compress(rest, c, 1, out)
  end

  defp compress("", c, count, out), do: append(out, c, count)

  defp append(out, c, count) do
    num = <<count + 48>>
    out = <<out::binary, num::binary>>
    <<out::binary, c>>
  end
end
```