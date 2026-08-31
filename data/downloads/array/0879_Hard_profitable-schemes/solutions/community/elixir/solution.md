# [Rust / Elixir] Bottom-up DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/3440373/](https://leetcode.com/problems/profitable-schemes/solutions/3440373/)

---

# Approach
Use a 2D Vec `dp`, where `dp[j][i]` represents number of schemes (aka combination of crimes), where total members used is `i` and total profit is `j`.
(`j` is put before `i`, just for the convenience of calling `dp[min_profit].iter()` in the end to calculate the final answer. For Elixir a Map is used instead of 2D Vec, with keys = `{i, j}`).

# Complexity
- Time complexity: O(n * min_profit * group.length)

- Space complexity: O(n * min_profit)

# Code
```Rust []
impl Solution {
    pub fn profitable_schemes(n: i32, min_profit: i32, group: Vec<i32>, profit: Vec<i32>) -> i32 {
        let n = n as usize;
        let m = min_profit as usize;
        let mut dp: Vec<Vec<i32>> = vec![vec![0; n + 1]; m + 1];
        dp[0][0] = 1;
        let large = 1_000_000_007;
        
        for (&g, &p) in group.iter().zip(profit.iter()) {
            let g = g as usize;
            let p = p as usize;
            if g > n {
                continue;
            }
            for i in (0..=n - g).rev() {
                for j in (0..=m).rev() {
                    let i2 = i + g;
                    let j2 = m.min(j + p);
                    dp[j2][i2] = (dp[j2][i2] + dp[j][i]) % large;
                }
            }
        }
        let mut ans = 0;
        for &x in dp[m].iter() {
            ans = (ans + x) % large;
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @large 1_000_000_007

  @spec profitable_schemes(n :: integer, min_profit :: integer, group :: [integer], profit :: [integer]) :: integer
  def profitable_schemes(n, min_profit, group, profit) do
    Enum.zip(group, profit)
    |> Enum.reduce(%{{0, 0} => 1}, fn {g, p}, dp ->
      Enum.reduce(dp, dp, fn
        {{i, j}, c}, dp2 when i + g > n -> dp2
        {{i, j}, c}, dp2 ->
          t = {i + g, min(j + p, min_profit)}
          Map.update(dp2, t, c, &(rem(&1 + c, @large)))
      end)
    end)
    |> Enum.flat_map(fn {{_, j}, c} ->
      if j == min_profit, do: [c], else: []
    end)
    |> Enum.sum()
    |> rem(@large)
  end
end
```