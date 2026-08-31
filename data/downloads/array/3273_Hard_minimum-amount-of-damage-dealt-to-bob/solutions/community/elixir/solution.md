# [Rust / Elixir] greedyyyyy

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5811471/](https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5811471/)

---

# Code
```Rust []
impl Solution {
    pub fn min_damage(power: i32, damage: Vec<i32>, health: Vec<i32>) -> i64 {
        let mut indices: Vec<usize> = (0..damage.len()).collect();
        let turns = |hp: i32| (hp - 1) / power + 1;
        indices.sort_unstable_by(|&a, &b|
            (turns(health[b]) * damage[a])
            .cmp(&(turns(health[a]) * damage[b]))
        );
        let mut ans = 0i64;
        let mut atk = damage.iter().map(|&x| x as i64).sum::<i64>();
        for &i in indices.iter().rev() {
            ans += atk * turns(health[i]) as i64;
            atk -= damage[i] as i64;
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec min_damage(power :: integer, damage :: [integer], health :: [integer]) :: integer
  def min_damage(power, damage, health) do
    Enum.zip_with(damage, health, fn d, h ->
      t = ceil(h / power)
      {d / t, d, t}
    end)
    |> Enum.sort(:desc)
    |> Enum.reduce({0, Enum.sum(damage)}, fn {_, d, t}, {ans, atk} ->
      {ans + atk * t, atk - d}
    end)
    |> elem(0)
  end
end
```