# Rust | 0ms

**Author:** RBird111
**Votes:** 2
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001249/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001249/)

---

# Code
```Rust []
use std::collections::VecDeque;

impl Solution {
    pub fn deck_revealed_increasing(mut deck: Vec<i32>) -> Vec<i32> {
        deck.sort_unstable();
        let mut deck = deck.into_iter();

        let mut queue = VecDeque::from_iter(0..deck.len());
        let mut result = vec![0; deck.len()];

        while let Some(i) = queue.pop_front() {
            result[i] = deck.next().unwrap();
            queue.rotate_left(1.min(queue.len()));
        }

        result
    }
}
```
```Elixir []
defmodule Solution do
  @spec deck_revealed_increasing(deck :: [integer]) :: [integer]
  def deck_revealed_increasing(deck) do
    0..(length(deck) - 1)
    |> Enum.to_list()
    |> :queue.from_list()
    |> get_order()
    |> Enum.zip(Enum.sort(deck))
    |> Enum.sort()
    |> Enum.map(&elem(&1, 1))
  end

  defp get_order(q, ls \\\\ []) do
    case :queue.out(q) do
      {{:value, v}, q} -> get_order(rotate(q), [v | ls])
      _ -> Enum.reverse(ls)
    end
  end

  defp rotate(q) do
    case :queue.out(q) do
      {{:value, v}, q} -> :queue.in(v, q)
      _ -> q
    end
  end
end
```