# [Rust / Elixir] with 2 counters

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/3316551/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/3316551/)

---

No extra space used for Rust. O(n) space for Elixir due to Enum functions.
# Code
```rust []
impl Solution {
    pub fn good_days_to_rob_bank(security: Vec<i32>, time: i32) -> Vec<i32> {
        if time == 0 {
            return (0..security.len() as i32).collect();
        }
        let time = time as usize;
        let mut incr = 0;
        let mut decr = 0;
        let mut ans = Vec::new();
        for i in 1 + time..security.len() {
            if security[i - time] <= security[i - time - 1] {
                decr += 1;
            }
            else {
                decr = 0;
            }
            if security[i] >= security[i - 1] {
                incr += 1;
            }
            else {
                incr = 0;
            }
            if incr >= time && decr >= time {
                ans.push((i - time) as i32);
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec good_days_to_rob_bank(security :: [integer], time :: integer) :: [integer]
  def good_days_to_rob_bank(security, 0), do: Enum.to_list(0..length(security) - 1)
  def good_days_to_rob_bank(security, time) do
    Enum.drop(security, time)
    |> count_order(&Kernel.<=/2)
    |> Enum.zip(
      count_order(security, &Kernel.>=/2)
    )
    |> Enum.with_index(1)
    |> Enum.flat_map(fn {{incr, decr}, i} ->
      if incr >= time and decr >= time, do: [i], else: []
    end)
  end

  defp count_order(list, fun) do
    Enum.chunk_every(list, 2, 1, :discard)
    |> Enum.map_reduce(0, fn [x, y], acc ->
      if fun.(x, y) do
        {acc + 1, acc + 1}
      else
        {0, 0}
      end
    end)
    |> elem(0)
  end
end
```