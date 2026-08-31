# Elixir - words count

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2772258/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2772258/)

---

```elixir
defmodule Solution do
  @spec longest_palindrome(words :: [String.t]) :: integer
  def longest_palindrome(words) do
    freqs = Enum.frequencies(words)

    {len, freqs} =
      for <<a, b>> = w <- Map.keys(freqs),
          reduce: {0, freqs} do
      {len, freqs} ->
        if a == b do
		  c = Map.get(freqs, w, 0)
          {len + 4 * div(c, 2), Map.replace(freqs, w, rem(c, 2))}
        else
          r = <<b, a>>
          c1 = Map.get(freqs, w, 0)
          c2 = Map.get(freqs, r, 0)
          c = min(c1, c2)
          freqs = freqs |> Map.replace(w, c1 - c) |> Map.replace(r, c2 - c)
          {len + c * 4, freqs}
        end
    end
    
    if Enum.any?(freqs, &match?({<<a, a>>, c} when c > 0, &1)) do
      len + 2
    else
      len
    end
  end
end
```