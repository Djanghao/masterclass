# [Rust / Elixir] easy solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3353560/](https://leetcode.com/problems/reducing-dishes/solutions/3353560/)

---

# Code
```Rust []
impl Solution {
    pub fn max_satisfaction(mut satisfaction: Vec<i32>) -> i32 {
        satisfaction.sort_unstable();
        let mut ans = 0;
        let mut acc = 0;
        for &x in satisfaction.iter().rev() {
            acc += x;
            if acc < 0 {
                break;
            }
            ans += acc;
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec max_satisfaction(satisfaction :: [integer]) :: integer
  def max_satisfaction(satisfaction) do
    Enum.sort(satisfaction, :desc)
    |> Enum.scan(&+/2)
    |> Enum.take_while(&(&1 > 0))
    |> Enum.sum()
  end
end
```