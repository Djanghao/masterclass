# Elixir - Memoization w/ Pattern Matching

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-break/solutions/3860499/](https://leetcode.com/problems/word-break/solutions/3860499/)

---

# Code
```elixir
defmodule Solution do
  @spec word_break(s :: String.t, word_dict :: [String.t]) :: boolean
  def word_break(s, word_dict) do
    Task.async(fn ->
      breakable?(s, 0, Enum.map(word_dict, &{&1, byte_size(&1)}))
    end)
    |> Task.await()
  end

  defp breakable?("", _idx, _words), do: true

  defp breakable?(s, idx, words) do
    memoized(idx, fn ->
      Enum.any?(words, fn {word, len} ->
        case s do
          <<^word::binary-size(len), rest::binary>> ->
            breakable?(rest, idx + len, words)

          _ ->
            false
        end
      end)
    end)
  end

  defp memoized(key, fun) do
    with nil <- Process.get(key) do
      fun.() |> tap(&Process.put(key, &1))
    end
  end
end
```