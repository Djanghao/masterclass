# Elixir simple solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/1636994/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/1636994/)

---

```elixir
defmodule Solution do
  @spec first_palindrome(words :: [String.t()]) :: String.t()
  def first_palindrome(words) do
    Enum.find(words, "", &is_palindrome/1)
  end

  defp is_palindrome(word) do
    word == String.reverse(word)
  end
end
```