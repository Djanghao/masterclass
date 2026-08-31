# Elixir - Myers Difference Approach

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3415713/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/3415713/)

---

# Intuition

If we can eliminate the different parts between the original string and the reversed string, and concatenate the common parts, the result is a palindrome string.

The problem is, how can we figure out the minimal different parts? Fortunately, there's an algorithm called Myers difference, which is used by many VCS products to work out the diffs in the source codes. Elixir already ships with this algorithm in its `String` module.

# Approach
1. Calculate the myers difference between the original string and the reversed string.
2. Take all the common parts in the myers difference, and sum up their lengths.

# Complexity
- Time complexity: $$O(ND)$$

- Space complexity: $$O(N + D)$$

# Code
```
defmodule Solution do
  @spec longest_palindrome_subseq(s :: String.t) :: integer
  def longest_palindrome_subseq(s) do
    s
    |> String.reverse()  # Reverse the string
    |> String.myers_difference(s)  # Calculate the Myers difference
    |> Keyword.get_values(:eq)  # Pick the common parts
    |> IO.iodata_length()  # Calculate the total length
  end
end
```