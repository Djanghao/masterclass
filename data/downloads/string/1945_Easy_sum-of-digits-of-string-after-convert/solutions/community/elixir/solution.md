# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5728844/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5728844/)

---

# Code
```elixir []
defmodule Solution do
  @spec get_lucky(s :: String.t, k :: integer) :: integer
  def get_lucky(s, k) do
    String.to_charlist(s)
    |> Enum.map(&transform(&1 - ?a + 1))
    |> Enum.sum()
    |> Stream.iterate(&transform/1)
    |> Enum.at(k - 1)
  end

  defp transform(x, ans \\\\ 0)
  defp transform(0, ans), do: ans
  defp transform(x, ans) do
    transform(div(x, 10), ans + rem(x, 10))
  end
end
```