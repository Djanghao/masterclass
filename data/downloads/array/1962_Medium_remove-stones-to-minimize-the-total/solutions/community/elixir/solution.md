# [Rust / Elixir] 2 approaches

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2960645/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2960645/)

---

1. Maximum heap

Time: `O((n + k) * log(n))`, Space: `O(n)`

# Rust only - 78ms
```rust
use std::collections::BinaryHeap;

impl Solution {
    pub fn min_stone_sum(piles: Vec<i32>, k: i32) -> i32 {
        let mut heap = BinaryHeap::from(piles);
        for _ in 0..k {
            let x = heap.pop().unwrap();
            heap.push((x + 1) / 2);
        }
        heap.into_iter().sum()
    }
}
```
2. With a counter Vec

Time: `O(n + max(piles)))`, Space: `O(max(piles))`
# Rust - 15ms
```rust
impl Solution {
    pub fn min_stone_sum(piles: Vec<i32>, mut k: i32) -> i32 {
        let max = *piles.iter().max().unwrap() as usize;
        let mut count = vec![0; max + 1];
        for &x in piles.iter() {
            count[x as usize] += 1;
        }
        for i in (1..=max).rev() {
            if k == 0 {
                break;
            }
            let smaller = count[i].min(k);
            count[i] -= smaller;
            count[(i + 1) / 2] += smaller;
            k -= smaller;
        }
        count.iter().enumerate()
            .map(|(i, c)| i as i32 * c)
            .sum()
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec min_stone_sum(piles :: [integer], k :: integer) :: integer
  def min_stone_sum(piles, k) do
    max = Enum.max(piles)
    Enum.reduce(piles, %{}, fn x, map ->
      Map.update(map, x, 1, &(&1 + 1))
    end)
    |> operation(k, max)
    |> Enum.reduce(0, fn {x, c}, acc -> c * x + acc end)
  end

  defp operation(map, 0, _), do: map
  defp operation(map, _, 0), do: map
  defp operation(map, k, x) do
    smaller = Map.get(map, x, 0) |> min(k)
    Map.update(map, x, 0, &(&1 - smaller))
    |> Map.update(div(x + 1, 2), smaller, &(&1 + smaller))
    |> operation(k - smaller, x - 1)
  end
end
```
