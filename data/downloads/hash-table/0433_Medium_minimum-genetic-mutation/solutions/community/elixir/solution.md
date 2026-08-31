# Elixir BFS solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/4000655/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/4000655/)

---

Quite interesting that the function `Enum.split_with` fits so well into the BFS algorithm.
# Code
```
defmodule Solution do
  @spec min_mutation(start_gene :: String.t, end_gene :: String.t, bank :: [String.t]) :: integer
  def min_mutation(start_gene, end_gene, bank) do
    bfs({[start_gene], bank}, end_gene, 0)
  end

  defp bfs({[], _}, _, _), do: -1
  defp bfs({list, bank}, end_gene, step) do
    if end_gene in list do
      step
    else
      Enum.split_with(bank, fn gene ->
        Enum.any?(list, fn gene2 -> adj?(gene, gene2) end)
      end)
      |> bfs(end_gene, step + 1)
    end
  end

  defp adj?(s1, s2) do
    [String.to_charlist(s1), String.to_charlist(s2)]
    |> Enum.zip()
    |> Enum.count(fn {a, b} -> a != b end)
    |> Kernel.==(1)
  end
end
```