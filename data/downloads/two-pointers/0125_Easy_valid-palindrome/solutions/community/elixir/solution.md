# Elixir, two pointer recursion

**Author:** visuelledata
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/3200331/](https://leetcode.com/problems/valid-palindrome/solutions/3200331/)

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
```
defmodule Solution do

  def is_palindrome(s, l, r) when is_tuple(s) and l < r do
    cond do
      !is_alnum?(elem(s, l)) -> is_palindrome(s, l + 1, r) # inc left index if not alphanumeric
      !is_alnum?(elem(s, r)) -> is_palindrome(s, l, r - 1) # dec right index if not alphanumeric
      elem(s, l) != elem(s, r) -> false # end recursion early if values don't match
      true -> is_palindrome(s, l + 1, r - 1) # if values match increment until left index >= right index
    end
  end 

  # ending if l >= r
  def is_palindrome(s, l, r) when is_tuple(s), do: true

  # initial call
  @spec is_palindrome(s :: String.t) :: boolean
  def is_palindrome(s) do
    s_processed = 
      s
      |> String.downcase()
      |> String.to_charlist()
      |> List.to_tuple() # tuples are needed because accessing any element of an elixir list is O(n)
    
    is_palindrome(s_processed, 0, tuple_size(s_processed) - 1)
  end

  def is_alnum?(num), do: (?a <= num and num <= ?z) or (?0 <= num and num <=  ?9) # ?a returns the integer representation of "a"
end
```