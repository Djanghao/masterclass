# [Rust / Elixir] Sort and then queue

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5266644/](https://leetcode.com/problems/hand-of-straights/solutions/5266644/)

---

# Code
```Rust []
use std::collections::VecDeque;

impl Solution {
    pub fn is_n_straight_hand(mut hand: Vec<i32>, group_size: i32) -> bool {
        if group_size == 1 {
            return true;
        }
        if hand.len() % group_size as usize != 0 {
            return false;
        }
        hand.sort_unstable();
        let mut queue = VecDeque::<(i32, i32)>::new();
        for &x in hand.iter() {
            if queue.is_empty()
            || queue.front().unwrap().0 == x + 1 {
                queue.push_back((x + 1, 2));
            }
            else {
                let (y, seq) = queue.pop_front().unwrap();
                if y != x {
                    return false;
                }
                else if seq != group_size {
                    queue.push_back((x + 1, seq + 1));
                }
            }
        }
        queue.is_empty()
    }
}
```
```Elixir []
defmodule Solution do
  @spec is_n_straight_hand(hand :: [integer], group_size :: integer) :: boolean
  def is_n_straight_hand(_, 1), do: true
  def is_n_straight_hand(hand, group_size) do
    Enum.sort(hand)
    |> Enum.reduce_while(:queue.new(), fn x, q ->
      case :queue.peek(q) do
        {:value, {^x, ^group_size}} ->
          {:cont, :queue.drop(q)}
        {:value, {^x, seq}} ->
          q = :queue.drop(q)
          {:cont, :queue.in({x + 1, seq + 1}, q)}
        {:value, {y, seq}} when y < x ->
          {:halt, q}
        _ -> {:cont, :queue.in({x + 1, 2}, q)}
      end
    end)
    |> :queue.is_empty()
  end
end
```