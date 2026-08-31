# [Rust / Elixir] backtracking solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/3079257/](https://leetcode.com/problems/restore-ip-addresses/solutions/3079257/)

---

Backtracking with quite complicated logic.
Check remaining length of `s` to avoid more meaningless steps.
# Rust
```rust
impl Solution {
    pub fn restore_ip_addresses(s: String) -> Vec<String> {
        let mut ans = Vec::new();
        Self::backtrack(&mut Vec::new(), &mut ans, s.as_bytes());
        ans
    }

    fn backtrack(ip: &mut Vec<i32>, ans: &mut Vec<String>, bytes: &[u8]) {
        if bytes.len() < 4 - ip.len()
        || bytes.len() >= (5 - ip.len()) * 3
        || *ip.last().unwrap_or(&0) > 255 { 
            return;
        }
        else if bytes.is_empty() {
            let v: Vec<String> = ip.iter()
                .map(|&x| x.to_string())
                .collect();
            ans.push(v.join(".").to_owned());
            return;
        }
        ip.push((bytes[0] - b'0') as i32);
        Self::backtrack(ip, ans, &bytes[1..]); 
        ip.pop();
        let x = *ip.last().unwrap_or(&0);
        if x > 0 {
            *ip.last_mut().unwrap() = x * 10 + (bytes[0] - b'0') as i32;
            Self::backtrack(ip, ans, &bytes[1..]); 
            *ip.last_mut().unwrap() = x;
        }
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec restore_ip_addresses(s :: String.t) :: [String.t]
  def restore_ip_addresses(s) do
    String.to_charlist(s)
    |> then(&(backtrack([], &1, length(&1), [], 0)))
  end
  
  defp backtrack(ans, _, len, [x | _], ip_len) when
  x > 255 or
  len < 4 - ip_len or
  len >= (5 - ip_len) * 3, do: ans

  defp backtrack(ans, [], _, ip, _) do
    Enum.reverse(ip)
    |> Enum.map(&(to_string(&1)))
    |> Enum.join(".")
    |> then(&([&1 | ans]))
  end
  
  defp backtrack(ans, [c | chars], len, ip, ip_len) when ip_len == 0 or hd(ip) == 0 do
    backtrack(ans, chars, len - 1, [c - ?0 | ip], ip_len + 1)
  end
  
  defp backtrack(ans, [c | chars], len, [x | ip], ip_len) do
    backtrack(ans, chars, len - 1, [x * 10 + c - ?0 | ip], ip_len)
    |> backtrack(chars, len - 1, [c - ?0, x | ip], ip_len + 1)
  end
end
```