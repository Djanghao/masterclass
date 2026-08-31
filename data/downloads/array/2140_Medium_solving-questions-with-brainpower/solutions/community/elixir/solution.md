# [Rust / Elixir] Bottom up DP solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514300/](https://leetcode.com/problems/solving-questions-with-brainpower/solutions/3514300/)

---

# Code
```Rust []
impl Solution {
    pub fn most_points(questions: Vec<Vec<i32>>) -> i64 {
        let mut dp: Vec<i64> = questions.iter()
            .map(|v| v[0] as i64)
            .collect();
        for i in (0..dp.len()).rev() {
            dp[i] += *dp.get(i + questions[i][1] as usize + 1)
                    .unwrap_or(&0);
            dp[i] = dp[i].max(*dp.get(i + 1).unwrap_or(&0));
        }
        dp[0]
    }
}
```
```Elixir []
defmodule Solution do
  @spec most_points(questions :: [[integer]]) :: integer
  def most_points(questions) do
    Enum.with_index(questions)
    |> List.foldr(%{}, fn {[p, bp], i}, dp ->
      (p + Map.get(dp, i + bp + 1, 0))
      |> max(Map.get(dp, i + 1, 0))
      |> then(&(Map.put(dp, i, &1)))
    end)
    |> Map.get(0)
  end
end
```