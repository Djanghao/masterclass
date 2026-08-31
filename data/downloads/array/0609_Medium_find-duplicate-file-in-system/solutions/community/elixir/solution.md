# Elixir pattern matching solution

**Author:** Fubuchi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2595684/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/2595684/)

---

```
defmodule Solution do
  def find_duplicate(paths) do
    paths
    |> Enum.reduce(%{}, fn path, map ->
      [dir | files] = String.split(path, " ")

      files
      |> Stream.map(&String.split(&1, "("))
      |> Enum.reduce(map, fn [name, content], map ->
        Map.update(map, content, [dir <> "/" <> name], &[dir <> "/" <> name | &1])
      end)
    end)
    |> Map.filter(fn
      {_, [_, _ | _]} -> true
      _ -> false
    end)
    |> Map.values()
  end
end
```