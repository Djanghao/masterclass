# Elixir - 3 Solutions

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991120/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991120/)

---

# Code
```elixir [Stack]
defmodule Solution do
  @spec make_fancy_string(s :: String.t) :: String.t
  def make_fancy_string(s) do
    make_fancy(s, [])
  end

  defp make_fancy(<<c, rest::binary>>, [c, c | _] = stack) do
    make_fancy(rest, stack)
  end

  defp make_fancy(<<c, rest::binary>>, stack) do
    make_fancy(rest, [c | stack])
  end

  defp make_fancy("", stack) do
    stack
    |> Enum.reverse()
    |> List.to_string()
  end
end
```

```elixir [Chunk]
defmodule Solution do
  @spec make_fancy_string(s :: String.t) :: String.t
  def make_fancy_string(s) do
    s
    |> String.to_charlist()
    |> Stream.chunk_by(&Function.identity/1)
    |> Enum.map(&Enum.take(&1, 2))
    |> IO.iodata_to_binary()
  end
end
```

```elixir [Regular Expression]
defmodule Solution do
  @spec make_fancy_string(s :: String.t) :: String.t
  def make_fancy_string(s) do
    String.replace(s, ~r/(.)\\1{2,}/, ~S[\\1\\1])
  end
end
```