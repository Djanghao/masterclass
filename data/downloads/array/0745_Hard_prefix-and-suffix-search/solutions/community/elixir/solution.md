# Elixir - Double Tries

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/2165676/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/2165676/)

---

This solution sometimes times out >_<

The tries created have a small twist: each node contains all indices of the words that start with the characters in the current node's ancestors chain (including the node itself).

```elixir
defmodule WordFilter do
  use GenServer, shutdown: :brutal_kill

  @spec init_(words :: [String.t]) :: any
  def init_(words) do
    case GenServer.start_link(__MODULE__, words, name: __MODULE__) do
      {:error, {:already_started, pid}} ->
        :ok = GenServer.stop(pid)
        init_(words)
      on_start ->
        on_start
    end
  end

  @spec f(prefix :: String.t, suffix :: String.t) :: integer
  def f(prefix, suffix) do
    GenServer.call(__MODULE__, {:f, prefix, suffix})
  end
    
  @impl GenServer
  def init(words) do
    words_with_index = words |> Enum.with_index() |> Map.new()
    reversed_words_with_index = Enum.map(words_with_index, fn {w, i} -> {String.reverse(w), i} end)
    prefix_trie = create_trie(words_with_index)
    suffix_trie = create_trie(reversed_words_with_index)
    {:ok, {prefix_trie, suffix_trie}}
  end
  
  @impl true
  def handle_call({:f, prefix, suffix}, _from, {prefix_trie, suffix_trie} = state) do
    idxs1 = lookup(prefix_trie, prefix)
    idxs2 = lookup(suffix_trie, String.reverse(suffix))
    
    common_idxs = MapSet.intersection(idxs1, idxs2)
    
    result = Enum.max(common_idxs, fn -> -1 end)

    {:reply, result, state}
  end

  @typep word_index :: non_neg_integer
  @typep char_index :: non_neg_integer
  @typep trie_node :: {MapSet.t(word_index), %{optional(char) => trie_node}}

  @spec create_trie([{String.t, word_index}], char_index) :: trie_node
  defp create_trie(words_with_index, i \\\\ 0) do
    {has_children, no_children} =
      Enum.split_with(words_with_index, fn {word, _} -> i < byte_size(word) end)

    sub_tries =
      has_children
      |> Enum.group_by(fn {word, _} -> :binary.at(word, i) end)
      |> Map.new(fn {char, group} -> {char, create_trie(group, i + 1)} end)

    idxs = Enum.map(no_children, &elem(&1, 1)) |> MapSet.new()
    
    idxs = for {_, {sub_idxs, _}} <- sub_tries, reduce: idxs do
      idxs -> MapSet.union(idxs, sub_idxs)
    end

    {idxs, sub_tries}
  end

  defp lookup({idxs, _sub_tries}, "") do
    idxs
  end

  defp lookup({_, sub_tries}, <<c, rest::binary>>) do
    case sub_tries[c] do
      nil -> MapSet.new()
      sub_trie -> lookup(sub_trie, rest)
    end
  end
end
```