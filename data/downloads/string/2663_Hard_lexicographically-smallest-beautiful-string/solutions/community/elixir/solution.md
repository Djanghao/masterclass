# [Rust / Elixir] (Base k) number

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/5489943/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/5489943/)

---

# Intuition
`s` can be treated like a (Base k) number.
For example when `k = 10`, `s` is a number consisting of digits ['a'..'j'] which works like ['0'..'9'].

# Approach
"Add 1" to the lowest digit in `s`, and then keep "adding 1" if this creates a palindrome substring in `s`.

If there are no appropriate values for a digit, proceed the operation to a higher digit and continue.

After an appropriate value is assigned to a digit, move back to lower digits and assign "as low as possible" values to them.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$ (for Rust)

# Code
```Rust []
impl Solution {
    pub fn smallest_beautiful_string(mut s: String, k: i32) -> String {
        let bytes = unsafe { s.as_bytes_mut() };
        let max = k as u8 + b'a' - 1;
        let mut i = bytes.len() - 1;
        while i < bytes.len() {
            bytes[i] += 1;
            while (i > 0 && bytes[i] == bytes[i - 1])
            || (i > 1 && bytes[i] == bytes[i - 2]) {
                bytes[i] += 1;
            }
            if bytes[i] > max {
                bytes[i] = b'a' - 1;
                i = i.wrapping_sub(1);
            }
            else {
                i += 1;
            }
        }
        if bytes[0] == b'a' - 1 { String::new() } else { s }
    }
}
```
```Elixir []
defmodule Solution do
  @spec smallest_beautiful_string(s :: String.t, k :: integer) :: String.t
  def smallest_beautiful_string(s, k) do
    String.reverse(s)
    |> then(fn <<ch, tail::binary>> ->
      <<ch + 1, tail::binary>>
    end)
    |> incr(?a + k, 0)
  end

  defp incr(<<ch, ch, tail::binary>>, invalid, pos) do
    incr(<<ch + 1, ch, tail::binary>>, invalid, pos)
  end
  defp incr(<<ch, ch2, ch, tail::binary>>, invalid, pos) do
    incr(<<ch + 1, ch2, ch, tail::binary>>, invalid, pos)
  end
  defp incr(<<invalid, ch2, tail::binary>>, invalid, pos) do
    incr(<<ch2 + 1, tail::binary>>, invalid, pos + 1)
  end
  defp incr(<<invalid>>, invalid, _), do: ""
  defp incr(s, _, 0), do: String.reverse(s)
  defp incr(s, invalid, pos) do
    incr(<<?a, s::binary>>, invalid, pos - 1)
  end
end
```