# [Rust / Elixir] sort the spaces

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2955559/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2955559/)

---

# Rust
```rust
impl Solution {
    pub fn maximum_bags(capacity: Vec<i32>, rocks: Vec<i32>, mut additional_rocks: i32) -> i32 {
        let mut need: Vec<i32> = (0..rocks.len())
            .map(|i| capacity[i] - rocks[i])
            .collect();
        need.sort_unstable();
        for i in 0..need.len() {
            if additional_rocks < need[i] {
                return i as i32;
            }
            additional_rocks -= need[i];
        }
        need.len() as i32
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec maximum_bags(capacity :: [integer], rocks :: [integer], additional_rocks :: integer) :: integer
  def maximum_bags(capacity, rocks, additional_rocks) do
    Enum.zip_with([capacity, rocks], fn [c, r] -> c - r end)
    |> Enum.sort()
    |> Enum.scan(&(&1 + &2))
    |> Enum.find_index(&(&1 > additional_rocks))
    |> Kernel.||(length(rocks)) # replace :nil with n
  end
end
```