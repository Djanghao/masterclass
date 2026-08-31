# Elixir - Simple - Matrix - Backtracking

**Author:** Nono31
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-search/solutions/4965368/](https://leetcode.com/problems/word-search/solutions/4965368/)

---

- We Build a matrix (`Map`)
- List possible starting points
- Backtracking from every starting points

# Code
```
defmodule Solution do
  @spec exist(board :: [[char]], word :: String.t) :: boolean
  def exist(board, word) do
    word = String.to_charlist(word)
    set = MapSet.new(word)

    s = hd(word)
    {matrix, starters} = Enum.with_index(board) |> Enum.reduce({%{}, []}, fn {line, r}, {matrix, starters} ->
      Enum.with_index(line) |> Enum.reduce({matrix, starters}, fn {char, c}, {matrix, starters} ->
        if MapSet.member?(set, char) do
          matrix = Map.put(matrix, {r, c}, char)
          starters = if char == s, do: [{r, c} | starters], else: starters
          {matrix, starters}
        else
          {matrix, starters}
        end
      end)
    end)
    dbg(starters)
    Enum.any?(starters, &do_find(&1,  MapSet.new(), matrix, word))
  end

  defp do_find(_point, _visited, _matrix, []), do: true
  defp do_find({r, c} = point, visited, matrix, [char | rest]) do
    if not(MapSet.member?(visited, point)) and char == Map.get(matrix, point) do
      visited = MapSet.put(visited, point)
      do_find({r + 1, c}, visited, matrix, rest) ||
      do_find({r, c + 1}, visited, matrix, rest) ||
      do_find({r - 1, c}, visited, matrix, rest) ||
      do_find({r, c - 1}, visited, matrix, rest)
    else 
      false
    end
  end
end
```