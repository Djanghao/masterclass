# Elixir sort reversed strings

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/2176721/](https://leetcode.com/problems/short-encoding-of-words/solutions/2176721/)

---

```elixir
  def minimum_length_encoding(words) do
    words
    |> Enum.map(&String.reverse(&1))
    |> Enum.sort()
    |> Enum.reduce({0, 0, ""}, fn word, {answer, longest_suff, last_word} -> 
                    answer = 
                        if not String.starts_with?(word, last_word) do
                          answer + longest_suff + 1
                        else
                          answer
                        end
                    {answer, String.length(word), word}
                  end)
    |> handle_last_item()
  end
      
  defp handle_last_item({res, longest_suff, _}), do: res + longest_suff + 1
  ```