# Elixir, uses map, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/4259017/](https://leetcode.com/problems/shortest-completing-word/solutions/4259017/)

---

# Approach
Iterates the characters in the license plate and creates a frequency map of letters. Iterates each word and checks if the word has all the letters in the license plate and updates the result.

# Complexity
- Time complexity:
O(n * m) where n is the number of words in the list and m is the average number of characters in words

- Space complexity:
O(k) where k is the maximum number of unique characters in the license_plate string.

# Code
```
defmodule Solution do
  @spec shortest_completing_word(license_plate :: String.t, words :: [String.t]) :: String.t
  def shortest_completing_word(license_plate, words) do
    license_ch_count = get_char_count(license_plate)
    for word <- words, reduce: nil do
      res -> 
        cond do
          res && byte_size(res) <= byte_size(word) -> res
          true -> if complete?(license_ch_count, word), do: word, else: res
        end
    end 
  end

  defp get_char_count(str) do
    for <<x <- str>>, x = lowercase_cp(x), reduce: %{} do
      acc -> Map.update(acc, x, 1, &(&1 + 1))
    end 
  end

  defp complete?(ch_count, str) do
    for <<x <- str>>, x = lowercase_cp(x), reduce: ch_count do
      acc -> 
        case acc[x] do
          nil -> acc
          1 -> Map.delete(acc, x)
          n -> Map.put(acc, x, n - 1)
        end
    end |> then(fn ch_count -> map_size(ch_count) == 0 end)
  end

  defp lowercase_cp(cp) do
    cond do
      cp >= ?a && cp <= ?z -> cp
      cp >= ?A && cp <= ?Z -> cp + (?a - ?A)
      true -> nil
    end
  end
end
```