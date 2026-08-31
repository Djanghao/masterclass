# [Rust / Elixir] slide the window~

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218939/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218939/)

---

# Code
```Rust []
impl Solution {
    pub fn equal_substring(s: String, t: String, max_cost: i32) -> i32 {
        let mut i = 0;
        let mut acc = 0;
        let mut ans = 0;
        let diff = |i| (s.as_bytes()[i] as i32 - t.as_bytes()[i] as i32).abs();
        for j in 0..s.len() {
            acc += diff(j);
            while acc > max_cost {
                acc -= diff(i);
                i += 1;
            }
            ans = ans.max((j + 1 - i) as i32);
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec equal_substring(s :: String.t, t :: String.t, max_cost :: integer) :: integer
  def equal_substring(s, t, max_cost) do
    [s, t]
    |> Enum.map(&String.to_charlist/1)
    |> Enum.zip_with(fn [ch1, ch2] -> abs(ch1 - ch2) end)
    |> then(&slide(&1, &1, max_cost, 0, 0))
  end

  defp slide([x | tail1], list2, remain, len, ans) when remain < 0 do
    slide(tail1, list2, remain + x, len - 1, ans)
  end
  defp slide(list1, [x | tail2], remain, len, ans) do
    slide(list1, tail2, remain - x, len + 1, max(ans, len))
  end
  defp slide(_, [], _, len, ans), do: max(ans, len)
end
```