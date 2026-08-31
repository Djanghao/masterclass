# Elixir Solution with Char Trie Data Structure

**Author:** 9kqtuKP8J2
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/6080168/](https://leetcode.com/problems/word-search-ii/solutions/6080168/)

---

# Intuition
We explore the board, starting from each position, 
using depth-first search to find every word starting
from that position.
# Approach
We need to store the words in a data structure which
tells us efficiently, given a prefix of some sequence
of letters, which, if any, subsequent letters could 
possibly lead to spelling a word.

Such a data structure is a trie, which stores words
by tiers, where we descend the trie one layer each time
we add another letter to the prefix string, and the 
trie tells us, for any given prefix, which letters, if 
any, lead to words.

In order not to waste time finding every possible way
to generate a given word, we also need to be able to
remove words from the trie as soon as we have generated
them from a given depth-first search on the board.

# Complexity
- Time complexity:
$O(nml + ql)$, where $q$ is the number of words on the
board and $l$ is either the length of the typical search
on the board before we run out of words with that prefix,
or the length of the typical word on the board, depending
on context.

- Space complexity:
$O(wl + nm)$ to store the trie and a random-access hash
map for the board, where $w$ is the number of
words in the tree and $l$ the length of each word.  

# Code
```elixir []
defmodule Trie do
  def empty() do
    {false, %{}}
  end

  def suffix({_bool, map}, char) do
    Map.get(map, char)
  end

  def contains_empty?({bool, _map}) do
    bool
  end

  def add_word(trie, str) do
    add_charlist(trie, to_charlist(str))
  end
  defp add_charlist({bool, map}, clist) do
    case clist do
      [] ->
        {true, map}
      [char | rest] ->
        if Map.has_key?(map, char) do
          {bool, Map.update!(map, char, fn sub -> add_charlist(sub, rest) end)}
        else
          {bool, Map.put(map, char, add_charlist(empty(), rest))}
        end
    end
  end

  def remove_word(trie, str) do
    case rm_charlist(trie, to_charlist(str)) do
      nil ->
        empty()
      rtrie ->
        rtrie
    end
  end
  defp rm_charlist({bool, map}, clist) do
    case clist do
      [] ->
        if map == %{} do
          nil
        else
          {false, map}
        end
      [char | rest] ->
        if Map.has_key?(map, char) do
          sub = map[char]
          rm_sub = rm_charlist(sub, rest)
          if rm_sub == nil do
            if (not bool) and (map_size(map) == 1) do
              nil
            else
              {bool, Map.delete(map, char)}
            end
          else  
            {bool, Map.put(map, char, rm_sub)}
          end
        end
    end
  end
end

defmodule Solution do
  @spec find_words(board :: [[char]], words :: [String.t]) :: [String.t]
  def find_words(board, words) do
    mboard = Enum.with_index(board, fn row, i ->
      Enum.with_index(row, fn char, j ->
        {{i, j}, char}
      end)
    end) |> 
      List.flatten() |> 
      Map.new()
    twords = Enum.reduce(words, Trie.empty(), fn w, t -> Trie.add_word(t, w) end)

    {_twords, bws} = Map.keys(mboard) |> 
      Enum.reduce({twords, []}, fn start, {tw, bw} ->
        dfs_words(mboard, start, tw, bw)
      end)
    bws
  end

  def adjacents({i, j}) do
    [{i - 1, j}, {i + 1, j}, {i, j - 1}, {i, j + 1}]
  end

  def dfs_words(mboard, start, trie, found \\\\ []) do
    case find_word(mboard, start, trie) do
      nil -> 
        {trie, found}
      word ->
        trie = Trie.remove_word(trie, word)
        dfs_words(mboard, start, trie, [word | found])
    end
  end

  def find_word(mboard, posn, trie, prefix \\\\ []) do
    char = mboard[posn]
    case Trie.suffix(trie, char) do
      nil ->
        nil
      suffix ->
        prefix = [char | prefix]
        if Trie.contains_empty?(suffix) do
          to_string(Enum.reverse(prefix))
        else
          mboard = Map.delete(mboard, posn)
          Enum.find_value(adjacents(posn), fn adj ->
            find_word(mboard, adj, suffix, prefix)
          end)
        end
    end
  end
end
```