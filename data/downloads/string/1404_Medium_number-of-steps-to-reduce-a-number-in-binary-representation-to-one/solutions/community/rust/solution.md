# Rust with iterator

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5223591/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5223591/)

---

# Intuition
There are 2 cases to consider:
1. `s` is one `"1"` followed by all `"0"`s:
ans = `s.len() - 1`.
Because there are only "divide by 2" operations.

2. Otherwise:
ans = (Number of **non-trailing** `"0"`s) `+ s.len() + 1`.
For each (**non-trailing** `"0"`s), we will need one "add 1" operation, followed by some "divide by 2" operations.
Then eventually `s` will become a series of at least 2 `"1"`s, and will require one more "add 1" operation followed by some "divide by 2" operations.
Note that the total number of "divide by 2" operations is **always** `s.len()`.

# Code
```
impl Solution {
    pub fn num_steps(s: String) -> i32 {
        let mut bytes = s.bytes().enumerate().rev()
            .skip_while(|&(_, b)| b == b'0');
        if bytes.next() == Some((0, b'1')) {
            return s.len() as i32 - 1;
        }
        1 + (s.len() + bytes.filter(|&(_, b)| b == b'0').count()) as i32
    }
}
```
# Extra
Elixir version (not iterator?)
```
defmodule Solution do
  @spec num_steps(s :: String.t) :: integer
  def num_steps(s) do
    String.to_charlist(s)
    |> Enum.reverse()
    |> Enum.drop_while(&(&1 == ?0))
    |> then(fn
      [?1] -> String.length(s) - 1
      list -> 1 + String.length(s) + Enum.count(list, &(&1 == ?0))
    end)
  end
end
```