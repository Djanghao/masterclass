# Elixir DFS Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043690/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043690/)

---

```
defmodule Solution do
  @spec longest_path(parent :: [integer], s :: String.t()) :: integer
  def longest_path(parent, s) do
    s =
      s
      |> String.graphemes()
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {c, i}, acc ->
        Map.put(acc, i, c)
      end)

    parent
    |> Enum.with_index()
    |> Enum.reduce(%{}, fn {n, i}, acc ->
      Map.update(acc, n, [i], &[i | &1])
    end)
    |> dfs(0, s, 1)
    |> elem(1)
  end

  def dfs(mp, root, s, ans) do
    mp
    |> Map.get(root, [])
    |> Enum.reduce({0, 0, ans}, fn child, {m, n, ans} ->
      {ct, ans} = dfs(mp, child, s, ans)

      if s[child] != s[root] do
        [m, n] = Enum.sort([m, n, ct], &>=/2) |> Enum.take(2)
        {m, n, ans}
      else
        {m, n, ans}
      end
    end)
    |> then(fn {m, n, ans} ->
      ans = max(ans, m + n + 1)
      {m + 1, ans}
    end)
  end
end

```