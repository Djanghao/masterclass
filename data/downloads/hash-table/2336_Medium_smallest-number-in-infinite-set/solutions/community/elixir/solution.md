# [Rust / Elixir] Ordered set solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3452583/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3452583/)

---

# Approach
Always keep at least 1 number in the set for the next `pop_smallest()` call.

# Complexity
- Time complexity:
`pop_smallest()`: $$O(log(n))$$
`add_back(num)`: $$O(log(n))$$

- Space complexity: $$O(n)$$

# Code
```Rust []
use std::collections::BTreeSet;

struct SmallestInfiniteSet {
    set: BTreeSet<i32>,
}

impl SmallestInfiniteSet {
    fn new() -> Self {
        Self {
            set: BTreeSet::from([1]),
        }
    }
    
    fn pop_smallest(&mut self) -> i32 {
        let &ans = self.set.iter().next().unwrap();
        self.set.remove(&ans);
        if self.set.is_empty() {
            self.set.insert(ans + 1);
        }
        ans
    }
    
    fn add_back(&mut self, num: i32) {
        let &x = self.set.iter().next_back().unwrap();
        if num < x {
            self.set.insert(num);
        }
    }
}
```
```Elixir []
defmodule SmallestInfiniteSet do
  use GenServer
  
  @spec init_() :: any
  def init_() do
    GenServer.start_link(__MODULE__, nil, [name: __MODULE__])
    GenServer.call(__MODULE__, :reset)
  end

  @spec pop_smallest() :: integer
  def pop_smallest() do
    GenServer.call(__MODULE__, :pop)
  end

  @spec add_back(num :: integer) :: any
  def add_back(num) do
    GenServer.call(__MODULE__, {:add, num})
  end

  @impl true
  def init(_) do
    {:ok, nil}
  end
  
  @impl true
  def handle_call(:reset, _, _) do
    {:reply, true, :gb_sets.from_list([1])}
  end
  
  @impl true
  def handle_call(:pop, _, set) do
    {ans, set} = :gb_sets.take_smallest(set)
    if :gb_sets.is_empty(set) do
      {:reply, ans, :gb_sets.add(ans + 1, set)}
    else
      {:reply, ans, set}
    end
  end
  
  @impl true
  def handle_call({:add, num}, _, set) do
    x = :gb_sets.largest(set)
    if num < x do
      {:reply, true, :gb_sets.add(num, set)}
    else
      {:reply, true, set}
    end
  end
end
```