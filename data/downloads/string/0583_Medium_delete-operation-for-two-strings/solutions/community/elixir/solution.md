# Elixir - memoization

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2152774/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/2152774/)

---

Again, doing memoization with my favorite boilerplate code XD

```elixir
defmodule Solution do
  @spec min_distance(word1 :: String.t, word2 :: String.t) :: integer
  def min_distance(word1, word2) do
    length1 = byte_size(word1)
    length2 = byte_size(word2)
	
    common_length = Task.async(fn ->
      longest_common_substring_length(word1, word2, length1 - 1, length2 - 1)                 
    end)
    |> Task.await(:infinity)

    length1 + length2 - 2 * common_length
  end
    
  defp longest_common_substring_length(_, _, i, j) when i < 0 or j < 0, do: 0
  
  defp longest_common_substring_length(s1, s2, i, j) do
    memoized({i, j}, fn ->
      if :binary.at(s1, i) == :binary.at(s2, j) do
        1 + longest_common_substring_length(s1, s2, i - 1, j - 1)
      else
        max(
          longest_common_substring_length(s1, s2, i - 1, j),
          longest_common_substring_length(s1, s2, i, j - 1)
        )
      end
    end)
  end
  
  defp memoized(key, fun) do
    case Process.get(key) do
      nil ->
        value = fun.()
        Process.put(key, value)
        value
      value ->
        value
    end
  end
end
```