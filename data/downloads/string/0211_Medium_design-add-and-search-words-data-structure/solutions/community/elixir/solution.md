# [Rust / Elixir] Trie solution

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3313871/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3313871/)

---

Iterative BFS for Rust, recursive DFS for Elixir.
# Complexity
- Time complexity:
$O(|word|)$ for `add_word()`.
Worst $O(a*|word|)$ or $O(26^3*|word|)$ for `search()` because there are at most 3 dots.

- Space complexity:
$O(a*|word|)$.

Where |word| is length of `word` and a is number of words stored in the dictionary.
# Code
```Rust []
type OptNode = Option<Box<TrieNode>>;

#[derive(Default)]
struct TrieNode {
    flag: bool,
    next: [OptNode; 26],
}

struct WordDictionary {
    root: OptNode,
}

impl WordDictionary {
    fn new() -> Self {
        Self {
            root: Some(Box::new(Default::default())),
        }
    }
    
    fn add_word(&mut self, word: String) {
        let mut node = &mut self.root;
        for b in word.bytes() {
            let i = (b - b'a') as usize;
            node = &mut node.as_mut().unwrap().next[i];
            if node.is_none() {
                *node = Some(Box::new(Default::default()));
            }
        }
        node.as_mut().unwrap().flag = true;
    }
    
    fn search(&self, word: String) -> bool {
        let mut v = vec![&self.root];
        let mut v2 = Vec::new();
        for b in word.bytes() {
            if b == b'.' {
                for opt in v.drain(..) {
                    for o in opt.as_ref().unwrap().next
                    .iter().filter(|o| o.is_some()) {
                        v2.push(o);
                    }
                }
            }
            else {
                let i = (b - b'a') as usize;
                for opt in v.drain(..) {
                    if opt.as_ref().unwrap().next[i].is_some() {
                        v2.push(&opt.as_ref().unwrap().next[i]);
                    }
                }
            }
            std::mem::swap(&mut v, &mut v2);
        }
        v.iter().any(|o| o.as_ref().unwrap().flag)
    }
}
```
```Elixir []
defmodule TrieNode do
  defstruct flag: false, next: %{}
end

defmodule WordDictionary do
  use GenServer
  
  @spec init_() :: any
  def init_() do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
    GenServer.call(__MODULE__, :start)
  end

  @spec add_word(word :: String.t) :: any
  def add_word(word) do
    GenServer.call(__MODULE__, {:add, word})
  end

  @spec search(word :: String.t) :: boolean
  def search(word) do
    GenServer.call(__MODULE__, {:search, word})
  end

  @impl true
  def init(_) do
    {:ok, nil}
  end

  @impl true
  def handle_call(:start, _, _) do
    {:reply, nil, %TrieNode{}}
  end

  def handle_call({:add, word}, _, root) do
    {:reply, nil, add(root, String.to_charlist(word))}
  end

  defp add(node, []) do
    %{node | flag: true}
  end
  defp add(node, [ch | tail]) do
    map = Map.update(node.next, ch, add(%TrieNode{}, tail), &(add(&1, tail)))
    %{node | next: map}
  end

  def handle_call({:search, word}, _, root) do
    {:reply, find(root, String.to_charlist(word)), root}
  end

  defp find(nil, _), do: false
  defp find(node, []), do: node.flag
  defp find(node, [?. | tail]) do
    Enum.any?(node.next, fn {_, child} -> find(child, tail) end)
  end
  defp find(node, [ch | tail]) do
    Map.get(node.next, ch)
    |> find(tail)
  end
end
```