# Elixir - regular expression

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/2684512/](https://leetcode.com/problems/break-a-palindrome/solutions/2684512/)

---

```elixir
defmodule Solution do
  @spec break_palindrome(palindrome :: String.t) :: String.t
  def break_palindrome(palindrome) do
    cond do
	  # If the given palindrome contains only one character,
	  # then we have no way to break it.
      byte_size(palindrome) <= 1 ->
	    ""
		
      # If the given palindrome contains only character "a"s,
	  # or if the given palindrome has odd number of characters and all of them except the central one are "a"s,
	  # then replace the last character with "b".
      palindrome =~ ~r/^(a*).?\\1$/ ->
	    String.replace(palindrome, ~r/a$/, "b")
		
      # Otherwise, replace the first character that is not "a" with the character "a".
      true ->
	    String.replace(palindrome, ~r/[^a]/, "a", global: false)
    end
  end
end
```