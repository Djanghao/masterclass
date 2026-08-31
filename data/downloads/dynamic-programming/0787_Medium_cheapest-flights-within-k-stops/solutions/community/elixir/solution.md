# Rust, Elixir solutions

**Author:** Minamikaze392
**Votes:** 5
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/3100109/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/3100109/)

---

Was going for a DP approach, but seems that they are officially called Bellman-Ford algorithm.
# Rust
```rust
impl Solution {
    pub fn find_cheapest_price(n: i32, flights: Vec<Vec<i32>>, src: i32, dst: i32, k: i32) -> i32 {
        let mut adj = vec![Vec::new(); n as usize];
        for v in flights.iter() {
            adj[v[0] as usize].push((v[1] as usize, v[2]));
        }
        let mut cost = vec![i32::MAX; n as usize];
        cost[src as usize] = 0;
        for _ in 0..=k {
            let mut cost2 = cost.clone();
            for i in 0..n as usize {
                if cost[i] != i32::MAX {
                    for &(j, price) in adj[i].iter() {
                        cost2[j] = cost2[j].min(cost[i] + price);
                    }
                }
            }
            cost = cost2;
        }
        match cost[dst as usize] {
            i32::MAX => -1,
            x => x,
        }
    }
}
```
# Elixir
Not building the adjacency list and just iterate through `flights`.
The result code is very compact.
```elixir
defmodule Solution do
  @spec find_cheapest_price(n :: integer, flights :: [[integer]], src :: integer, dst :: integer, k :: integer) :: integer
  def find_cheapest_price(n, flights, src, dst, k) do
    Enum.reduce(0..k, %{src => 0}, fn _, cost ->
      Enum.reduce(flights, cost, fn [i, j, price], cost2 ->
        case Map.get(cost, i) do
          nil -> cost2
          x -> Map.update(cost2, j, x + price, &(min(&1, x + price)))
        end
      end)
    end)
    |> Map.get(dst, -1)
  end
end
```