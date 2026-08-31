# Naive recursive solution

**Author:** sQQVEutPou
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/6044695/](https://leetcode.com/problems/palindrome-partitioning/solutions/6044695/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec partition(s :: String.t) :: [[String.t]]
  def partition(s) do
    <<head::utf8, rest::binary>> = s
    do_partition(rest, <<head::utf8>>, [])
  end

  defp do_partition(<<head::utf8, rest::binary>> = s, current, acc) do
    acc =
      if is_palindrome(current) do
        Enum.reduce(partition(s), acc, &[[current | &1] | &2])
      else
        acc
      end
      
    do_partition(rest, <<current::binary, head::utf8>>, acc)
  end

  defp do_partition("", current, acc) do
    if is_palindrome(current) do
      [[current] | acc]
    else
      acc
    end
  end

  defp is_palindrome(string) do
    String.reverse(string) === string
  end
end
```