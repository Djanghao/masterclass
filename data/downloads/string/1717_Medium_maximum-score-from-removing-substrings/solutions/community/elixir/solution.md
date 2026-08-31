# [Rust / Elixir] Greedily maintaining 2 variables

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463376/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463376/)

---

# Intuition
The main issue to consider is when, for example, `y < x` but we see a string segment like "cbbbbaaaab". We want prioritize removing a "ab" for `x` score, instead of removing "ba" 4 times and losing the chance to remove "ab".

# Approach
Use 2 variables `a` and `b` to count the number of "a" and "b" in a pattern of:
"bbb...aaa..." when `y < x`.
"aaa...bbb..." when `x < y`.
Prioritize doing the operation with higher score.
Only do the operation with lower score when reaching a char other than "a" or "b", or when the end of string is reached.
If `x == y`, we can treat both operations as "higher".

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$
(If Elixir's `String.to_charlist` is O(1). Otherwise tail recursion with `s` in binary form and pattern matching clauses can be used. e.g.:)
```
def maximum_gain(<<?a, tail::binary>>, x, y, ans, a, b)
when y >= x and b != 0 do
  maximum_gain(tail, x, y, ans + y, a, b - 1)
end
```
# Code
```Rust []
impl Solution {
    pub fn maximum_gain(s: String, x: i32, y: i32) -> i32 {
        let mut ans = 0;
        let mut a = 0;
        let mut b = 0;
        for byte in s.bytes().chain(std::iter::once(b'$')) {
            match byte {
                b'a' => if y >= x && b != 0 {
                        b -= 1;
                        ans += y;
                    }
                    else {
                        a += 1;
                    }
                b'b' => if x >= y && a != 0 {
                        a -= 1;
                        ans += x;
                    }
                    else {
                        b += 1;
                    }
                _ => {
                    ans += a.min(b) * x.min(y);
                    a = 0;
                    b = 0;
                }
            }
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec maximum_gain(s :: String.t, x :: integer, y :: integer) :: integer
  def maximum_gain(s, x, y) do
    String.to_charlist(s)
    |> Enum.reduce({0, 0, 0}, fn
      ?a, {ans, a, b} when y >= x and b != 0 -> {ans + y, a, b - 1}
      ?a, {ans, a, b} -> {ans, a + 1, b}
      ?b, {ans, a, b} when x >= y and a != 0 -> {ans + x, a - 1, b}
      ?b, {ans, a, b} -> {ans, a, b + 1}
      _, {ans, a, b} -> {ans + min(a, b) * min(x, y), 0, 0}
    end)
    |> then(fn {ans, a, b} ->
      ans + min(a, b) * min(x, y)
    end)
  end
end
```