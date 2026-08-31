# Elixir: tuples, growing intervals from center (beats 100% in time)

**Author:** pul-paulsen
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/5763845/](https://leetcode.com/problems/longest-palindromic-substring/solutions/5763845/)

---

# Intuition
**Every palindrome in a string** can be described as an **interval of its indices**. It **must be centered either around a single char** or a pair of **neighboring chars**. 

Therefore we can simply **reduce the char indices** in the string to **the longest palindrome interval around them**. 

To find a **palindrome interval**, we just **grow it around its center index / indices**, until we are **out of bounds** or find **non-matching chars on either side** of the center

# Approach
Overall algorithm:

* Turn the string into a tuple of chars (this is in Elixir way more efficient for random access than Strings)
* Reduce the indices on the chars to the longest palindrome interval around them or them and their neighbor to the right
* Turn that longest interval back into a string

Palindrome interval:

* Given a tuple chars and two indices c1, c2 (which are equal or neighbours):
* Beginning by 0, find the first offset outside the palindrome,  i.e.outside of the bounds of the tuple or where `chars[lower] != chars[upper]`
* Reduce that offset by 1 to get back into the palindrome and add it to c1 and c1 to get the interval `{c1 - offset, c2 + offset}`

# Complexity
- Time complexity: **O(n)**; the solution beats 100% of the solutions in time

- Space complexity: **O(n)**; mainly to copy the string to a tuple to trade off for the inefficient random access in strings

# Code
```elixir []
defmodule Solution do
  @spec longest_palindrome(s :: String.t) :: String.t
  def longest_palindrome(s) when is_binary(s),
    do:
      s
      |> to_char_list()
      |> List.to_tuple()
      |> longest_palindrome()

  def longest_palindrome(chars) when is_tuple(chars),
    do:
      0..tuple_size(chars)-1
      |> Enum.reduce({0, 0}, fn index, longest_interval ->
        longest(
          longest_interval,
          longest(
            palindrome_interval_around(chars, index, index),
            palindrome_interval_around(chars, index, index + 1)
          ))
      end)
      |> then(fn {lower, upper} ->
        to_string(for(i <- lower..upper, do: elem(chars, i)))
      end)

  defp longest({l1, u1} = interval_1, {l2, u2} = interval_2),
    do: if( u2 - l2 > u1 - l1, do: interval_2, else: interval_1)

  defp palindrome_interval_around(chars, center_1, center_2),
    do:
      0..center_1 + 1
      |> Enum.find(fn offset ->
        lower = center_1 - offset
        upper = center_2 + offset

        lower < 0
        or upper > tuple_size(chars) - 1
        or elem(chars, lower) != elem(chars, upper)
      end)
      |> then(fn first_offset_outside_palindrome ->
        offset = first_offset_outside_palindrome - 1
        {center_1 - offset, center_2 + offset}
      end)

end
```