# Elixir Trie Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-words/solutions/2166434/](https://leetcode.com/problems/replace-words/solutions/2166434/)

---

```elixir
defmodule Solution do
  defmodule Trie do
    defmodule TrieNode do
      defstruct children: %{}, is_end: false
    end

    def new(), do: %TrieNode{}

    def insert(tree, s) when is_binary(s) do
      insert(tree, String.graphemes(s))
    end

    def insert(nil, cs), do: insert(%TrieNode{}, cs)

    def insert(tree, []), do: %{tree | is_end: true}

    def insert(tree, [c | cs]) do
      %{tree | children: Map.put(tree.children, c, insert(tree.children[c], cs))}
    end

    def search(tree, s) do
      search(tree, [], String.graphemes(s))
    end

    def search(nil, _ss, _cs), do: nil
    def search(tree, _ss, []), do: nil

    def search(tree, ss, [c | cs]) do
      cond do
        tree.is_end -> ss |> Enum.reverse() |> Enum.join()
        tree.children[c] -> search(tree.children[c], [c | ss], cs)
        true -> nil
      end
    end
  end

  @spec replace_words(dictionary :: [String.t()], sentence :: String.t()) :: String.t()
  def replace_words(dictionary, sentence) do
    tree =
      dictionary
      |> Enum.reduce(Trie.new(), &Trie.insert(&2, &1))

    sentence
    |> String.split()
    |> Enum.map(fn s -> Trie.search(tree, s) || s end)
    |> Enum.join(" ")
  end
end
```