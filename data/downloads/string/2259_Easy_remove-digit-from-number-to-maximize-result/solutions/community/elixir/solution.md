# Elixir: binary pattern matching, tail-call recursion (beats 100%)

**Author:** pul-paulsen
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/5786206/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/5786206/)

---

# Intuition
In a positional number system, deleteting **first digit d, which is smaller than its following digit**, will lead to a **bigger number than deleting a later occurence of d**. 

So we can s**imply scan through the number**, searching for that criterion, which leade sot an **early exit**. If none is found, the solution must be the **last position of d**.

Should be very elegant and efficient with Elixirs binary patterm matching and tail-call recursion.

# Approach
* Use tail-call recursion increasing pos
* Use pattern matching to destructuer the number-string
    * If first char matches d and second char > d, return pos
    * If first char matches d, remember pos as last and recur with remaining number
    * If first char is not d recur with remaining number
    * If number is empty, return last
* Split the String at the found pos and merge the left and right string

# Complexity
- Time complexity: **O(n)**, where n is number of digits in total or up to to the first digit, that fulfills the criterion for early exit 
- Space complexity: **O(1)**

# Code
```elixir []
defmodule Solution do
  @spec remove_digit(number :: String.t, digit :: char) :: String.t
  def remove_digit(number, digit) when is_binary(number) and digit in ?0..?9, 
    do:
        position_to_remove(number, digit)
        |> then(&String.split_at(number, &1))
        |> then(fn {left, <<_, right::binary>>} -> 
            left <> right 
        end)
    
  defp position_to_remove(number, digit_char, pos \\\\ 0, last \\\\ nil)
  defp position_to_remove(<<d, bigger, _::binary>>, d, pos, _) when bigger > d, 
    do: pos
  defp position_to_remove(<<d, number::binary>>, d, pos, _), 
    do: position_to_remove(number, d, pos + 1, pos)
  defp position_to_remove(<<_, number::binary>>, d, pos, last), 
    do: position_to_remove(number, d, pos + 1, last)
  defp position_to_remove(<<>>, _, _, last), do: last
end
```