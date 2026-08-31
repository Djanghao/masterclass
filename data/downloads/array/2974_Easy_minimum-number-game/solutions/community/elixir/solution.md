# Elixir & Rust Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4580128/](https://leetcode.com/problems/minimum-number-game/solutions/4580128/)

---

# Elixir
```
defmodule Solution do
  @spec number_game(nums :: [integer]) :: [integer]
  def number_game(nums) do
    nums
    |> Enum.sort()
    |> Enum.chunk_every(2)
    |> Enum.flat_map(fn [a, b] -> [b, a] end)
  end
end
```

# Rust
```
impl Solution {
    pub fn number_game(mut nums: Vec<i32>) -> Vec<i32> {
        nums.sort_unstable();
        for i in (0..nums.len()).step_by(2) {
            nums.swap(i, i + 1);
        }
        nums
    }
}
```