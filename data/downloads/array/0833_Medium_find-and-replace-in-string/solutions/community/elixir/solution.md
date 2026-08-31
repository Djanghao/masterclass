# Elixir solution & extra

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/3246817/](https://leetcode.com/problems/find-and-replace-in-string/solutions/3246817/)

---

Sort the replacement operations by `indices[i]`, so that the string `s` can be iterated only once while processing all replacements.
# Code
```elixir
defmodule Solution do
  @spec find_replace_string(s :: String.t, indices :: [integer], sources :: [String.t], targets :: [String.t]) :: String.t
  def find_replace_string(s, indices, sources, targets) do
    [indices, sources, targets]
    |> Enum.zip()
    |> Enum.sort()
    |> Enum.reduce({0, s, []}, &do_reduce/2)
    |> then(fn {_, s, ans} ->
      Enum.reverse(ans, [s])
    end)
    |> Enum.join()
  end

  defp do_reduce({i, source, target}, {i, s, ans}) do
    len = String.length(source)
    case s do
      <<^source::binary-size(len), tail::binary>> ->
        {i + len, tail, [target | ans]}
      s -> {i, s, ans}
    end
  end
  defp do_reduce({i, source, target}, {j, <<ch::binary-size(1), tail::binary>>, ans}) do
    do_reduce({i, source, target}, {j + 1, tail, [ch | ans]})
  end
end
```
# Extra
Replace `Enum.sort` with bucket sort approach to reduce time complexity.
```elixir
  def find_replace_string(s, indices, sources, targets) do
    map =
      [indices, sources, targets]
      |> Enum.zip()
      |> Map.new(fn {i, s, t} -> {i, [{i, s, t}]} end)

    (0..String.length(s) - 1)
    |> Enum.flat_map(&(Map.get(map, &1, [])))
    |> Enum.reduce({0, s, []}, &do_reduce/2)
    |> then(fn {_, s, ans} ->
      Enum.reverse(ans, [s])
    end)
    |> Enum.join()
  end

  # &do_reduce/2 is unchanged
```