# Elixir solution with frequencies and recursion

**Author:** PavelPatsey
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/4769718/](https://leetcode.com/problems/find-the-town-judge/solutions/4769718/)

---

# Code
```
defmodule Solution do
  @spec find_judge(n :: integer, trust :: [[integer]]) :: integer
  def find_judge(n, trust) do
    [nodes, children] =
      trust
      |> Enum.map(&List.to_tuple/1)
      |> Enum.unzip()
      |> Tuple.to_list()
      |> Enum.map(&Enum.frequencies/1)

    keys =
      1..n
      |> Enum.to_list()

    do_find_judge(keys, nodes, children, n)
  end

  defp do_find_judge([], _nodes, _children, _n), do: -1

  defp do_find_judge([head | tail], nodes, children, n) do
    if Map.get(nodes, head, 0) == 0 and Map.get(children, head, 0) == n - 1 do
      head
    else
      do_find_judge(tail, nodes, children, n)
    end
  end
end
```