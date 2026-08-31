# Elixir - Myers Difference

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solutions/5875363/](https://leetcode.com/problems/sentence-similarity-iii/solutions/5875363/)

---

# Intuition
Split the sentences into lists of words, see the Myers difference between the two lists contains one or less insertions or deletions.

To handle the case like `"A"` and `"a A b A"`, I just do the Myers difference on both the original sentences and the reversed sentences. 

# Code
```elixir []
defmodule Solution do
  @spec are_sentences_similar(sentence1 :: String.t, sentence2 :: String.t) :: boolean
  def are_sentences_similar(sentence1, sentence2) do
    similar?(sentence1, sentence2) or
    similar?(String.reverse(sentence1), String.reverse(sentence2))
  end

  defp similar?(sentence1, sentence2) do
    words1 = String.split(sentence1)
    words2 = String.split(sentence2)

    words1
    |> List.myers_difference(words2)
    |> Enum.reduce_while(1, fn
      {:eq, _}, countdown -> {:cont, countdown}
      _, 1 -> {:cont, 0}
      _, 0 -> {:halt, -1}
    end)
    |> Kernel.>=(0)
  end
end
```