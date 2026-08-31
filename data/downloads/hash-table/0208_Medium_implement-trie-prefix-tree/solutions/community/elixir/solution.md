# Elixir: Agent & Erlang array

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/5057722/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/5057722/)

---

# Code
```
defmodule Trie do
  defstruct terminal: false, children: :array.new(26, fixed: true, default: :undefined)

  @spec init_() :: any
  def init_() do
    case GenServer.whereis(__MODULE__) do
      nil -> Agent.start_link(fn -> %Trie{} end, name: __MODULE__)
      _ -> Agent.cast(__MODULE__, fn _ -> %Trie{} end)
    end
  end

  @spec insert(word :: String.t()) :: any
  def insert(word) do
    Agent.cast(__MODULE__, Trie, :do_insert, [to_charlist(word)])
  end

  @spec search(word :: String.t()) :: boolean
  def search(word) do
    Agent.get(__MODULE__, Trie, :do_search, [to_charlist(word)])
  end

  @spec starts_with(prefix :: String.t()) :: boolean
  def starts_with(prefix) do
    Agent.get(__MODULE__, Trie, :do_prefix, [to_charlist(prefix)])
  end

  def do_insert(%Trie{} = trie, []), do: %Trie{trie | terminal: true}

  def do_insert(%Trie{} = trie, [c | rest]) do
    child =
      case :array.get(c - ?a, trie.children) do
        :undefined -> %Trie{}
        x -> x
      end

    child = do_insert(child, rest)
    children = :array.set(c - ?a, child, trie.children)
    %Trie{trie | children: children}
  end

  def do_search(%Trie{} = trie, [c | rest]) do
    children = :array.get(c - ?a, trie.children)
    do_search(children, rest)
  end

  def do_search(%Trie{terminal: true}, []), do: true
  def do_search(_, _), do: false

  def do_prefix(%Trie{} = trie, [c | rest]) do
    children = :array.get(c - ?a, trie.children)
    do_prefix(children, rest)
  end

  def do_prefix(%Trie{}, []), do: true
  def do_prefix(_, _), do: false
end
```