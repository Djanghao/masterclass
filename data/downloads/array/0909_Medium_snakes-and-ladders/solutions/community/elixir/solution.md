# Elixir BFS Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/3092667/](https://leetcode.com/problems/snakes-and-ladders/solutions/3092667/)

---

```
defmodule Solution do
  @spec snakes_and_ladders(board :: [[integer]]) :: integer
  def snakes_and_ladders(board) do
    :queue.new()
    |> :queue.snoc(1)
    |> bfs(to_map(board), %{1 => 0})
  end

  def bfs(q, mat, mp) do
    if :queue.is_empty(q) do
      -1
    else
      label = :queue.head(q)
      q = :queue.tail(q)
      ct = mp[label]

      if label == map_size(mat) do
        ct
      else
        1..6
        |> Enum.reduce({q, mp}, fn i, {q, mp} ->
          next_label = next(label + i, mat)

          cond do
            next_label > map_size(mat) -> {q, mp}
            Map.has_key?(mp, next_label) -> {q, mp}
            true -> {:queue.snoc(q, next_label), Map.put(mp, next_label, ct + 1)}
          end
        end)
        |> then(fn {q, mp} -> bfs(q, mat, mp) end)
      end
    end
  end

  def next(label, mat) do
    len = mat |> map_size() |> :math.sqrt() |> round()
    i = len - div(label - 1, len) - 1

    j =
      if rem(len - i, 2) == 0,
        do: len - 1 - rem(label - 1, len),
        else: rem(label - 1, len)

    if mat[{i, j}] == -1, do: label, else: mat[{i, j}]
  end

  def to_map(mat) do
    mat
    |> Enum.with_index()
    |> Enum.reduce(%{}, fn {row, i}, acc ->
      row
      |> Enum.with_index()
      |> Enum.reduce(acc, fn {n, j}, acc ->
        Map.put(acc, {i, j}, n)
      end)
    end)
  end
end

```