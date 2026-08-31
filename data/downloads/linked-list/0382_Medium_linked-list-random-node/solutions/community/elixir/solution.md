# [Rust / Elixir] Splitting the list

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/3280567/](https://leetcode.com/problems/linked-list-random-node/solutions/3280567/)

---

# Approach
Split the list into a Vec of `list_count` lists, where `list_count` is a finite configurable number. Higher value of `list_count` leads to higher *randomness* with higher time and space cost.

For `get_random()`, just take the head node of the 1st list, read the value, and then prepend it to head of another *random* list in Vec. If the 1st list is empty, choose a *random* non-empty list from the Vec and assign it as the 1st list.

The drawback is that when `list_count` is not high enough, it works more like shuffling than random. Because a chosen node can never be chosen again until the 1st list is emptied.
Eg. for `list_count = 16` the code is not always accepted by the online judge.

# Complexity
- Time complexity:
`O(n)` for `init()`.
`Amortized O(1)` for `get_random()`, considering that `list_count` should be assigned a value much smaller than `n`. 
 
- Space complexity: `O(list_count)`.
# Rust
```rust
use rand::prelude::*;

type OptNode = Option<Box<ListNode>>;

const LIST_COUNT: usize = 16;

struct Solution {
    v: Vec<OptNode>,
    random: ThreadRng,
}

impl Solution {
    fn new(mut head: OptNode) -> Self {
        let mut v: Vec<OptNode> = vec![None; LIST_COUNT];
        let mut random = rand::thread_rng();
        while let Some(mut n) = head {
            head = n.next;
            let i = random.gen_range(0, LIST_COUNT);
            n.next = v[i].take();
            v[i] = Some(n);
        }
        Self { v, random }
    }
    
    fn get_random(&mut self) -> i32 {
        if self.v[0].is_none() {
            let mut i = self.random.gen_range(1, LIST_COUNT);
            while self.v[i].is_none() {
                i = i % (LIST_COUNT - 1) + 1;
            }
            self.v[0] = self.v[i].take();
        }
        let mut n = self.v[0].take().unwrap();
        let ans = n.val;
        self.v[0] = n.next;
        let i = self.random.gen_range(1, LIST_COUNT);
        n.next = self.v[i].take();
        self.v[i] = Some(n);
        ans
    }
}
```
# Elixir
```elixir
defmodule Solution do
  use GenServer

  @list_count 16

  @spec init_(head :: ListNode.t | nil) :: any
  def init_(head) do
    GenServer.start_link(__MODULE__, nil, [name: __MODULE__])
    GenServer.call(__MODULE__, {:reset, head})
  end

  @spec get_random() :: integer
  def get_random() do
    GenServer.call(__MODULE__, :get)
  end

  @impl true
  def init(_) do
    {:ok, nil}
  end

  @impl true
  def handle_call({:reset, head}, _, _) do
    state = read(%{}, head)
    {:reply, true, state}
  end

  def handle_call(:get, _, state) do
    state =
      if Map.get(state, 1) == nil do
        swap(state)
      else
        state
      end

    node = Map.get(state, 1)
    i = Enum.random(2..@list_count)
    state =
      Map.update!(state, 1, &(&1.next))
      |> Map.update(i, %{node | next: nil}, &(%{node | next: &1}))

    {:reply, node.val, state}
  end

  defp read(state, nil), do: state
  defp read(state, node) do
    i = Enum.random(2..@list_count)
    Map.update(state, i, %{node | next: nil}, &(%{node | next: &1}))
    |> read(node.next)
  end

  defp swap(state) do
    i =
      Enum.random(2..@list_count)
      |> Stream.unfold(&({&1, rem(&1 - 1, @list_count - 1) + 2}))
      |> Enum.find(&(Map.get(state, &1) != nil))
    {node, state} = Map.pop(state, i)
    Map.put(state, 1, node)
  end
end
```