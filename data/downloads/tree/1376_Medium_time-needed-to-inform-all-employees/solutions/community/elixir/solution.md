# [Rust / Elixir] DP solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3591209/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3591209/)

---

# Code
```Rust []
impl Solution {
    pub fn num_of_minutes(n: i32, head_id: i32, manager: Vec<i32>, inform_time: Vec<i32>) -> i32 {
        let mut dp = vec![-1; n as usize];
        for i in 0..n as usize {
            Self::memo(i, &mut dp, &manager, &inform_time);
        }
        *dp.iter().max().unwrap()
    }

    fn memo(i: usize, dp: &mut Vec<i32>, manager: &Vec<i32>, inform_time: &Vec<i32>) {
        if dp[i] == -1 {
            dp[i] = if manager[i] == -1 {
                0
            }
            else {
                let m = manager[i] as usize;
                Self::memo(m, dp, manager, inform_time);
                dp[m] + inform_time[m]
            };
        }        
    }
}
```
```Elixir []
defmodule Solution do
  @spec num_of_minutes(n :: integer, head_id :: integer, manager :: [integer], inform_time :: [integer]) :: integer
  def num_of_minutes(n, head_id, manager, inform_time) do
    manager = List.to_tuple(manager)
    inform_time = List.to_tuple(inform_time)

    Enum.reduce(0..n - 1, %{}, fn i, dp ->
      memo(i, dp, manager, inform_time)
    end)
    |> Map.values()
    |> Enum.max()
  end

  defp memo(i, dp, manager, inform_time) do
    if Map.get(dp, i) == nil do
      case elem(manager, i) do
        -1 -> Map.put(dp, i, 0)
        m ->
          dp = memo(m, dp, manager, inform_time)
          time = Map.get(dp, m) + elem(inform_time, m)
          Map.put(dp, i, time)
      end
    else
      dp
    end
  end
end
```