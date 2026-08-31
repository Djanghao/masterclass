# [Rust / Elixir] use 2 pointers vs sorting

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/5420469/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/5420469/)

---

Use 2 pointers for Rust, and use sorting for Elixir.
# Code
```Rust []
impl Solution {
    pub fn repeat_limited_string(s: String, repeat_limit: i32) -> String {
        let repeat_limit = repeat_limit as usize;
        let mut count = vec![0; 26];
        for b in s.bytes() {
            count[(b - b'a') as usize] += 1;
        }

        let to_ch = |i| (b'a' + i as u8) as char;
        let mut ans = String::with_capacity(s.len());
        let mut j = 24;

        for i in (0..26).rev() {
            while count[i] != 0 {
                let take = count[i].min(repeat_limit);
                ans.extend(std::iter::repeat(to_ch(i)).take(take));
                count[i] -= take;
                
                if count[i] != 0 {
                    while j > 0 && (j >= i || count[j] == 0) {
                        j -= 1;
                    }
                    if i == 0 || count[j] == 0 {
                        return ans;
                    }
                    ans.push(to_ch(j));
                    count[j] -= 1;
                }
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec repeat_limited_string(s :: String.t, repeat_limit :: integer) :: String.t
  def repeat_limited_string(s, repeat_limit) do
    String.to_charlist(s)
    |> Enum.frequencies()
    |> Enum.sort(:desc)
    |> greedy(repeat_limit, [])
    |> Enum.reverse()
    |> to_string()
  end

  defp greedy([{i, c_i} | tail], limit, ans) when c_i <= limit do
    ans = List.duplicate(i, c_i) ++ ans
    greedy(tail, limit, ans)
  end
  defp greedy([{i, c_i}, {j, 1} | tail], limit, ans) do
    ans = [j] ++ List.duplicate(i, limit) ++ ans
    greedy([{i, c_i - limit} | tail], limit, ans)
  end
  defp greedy([{i, c_i}, {j, c_j} | tail], limit, ans) do
    ans = [j] ++ List.duplicate(i, limit) ++ ans
    greedy([{i, c_i - limit}, {j, c_j - 1} | tail], limit, ans)
  end
  defp greedy([{i, _}], limit, ans) do
    List.duplicate(i, limit) ++ ans
  end
  defp greedy([], _, ans), do: ans
end
```