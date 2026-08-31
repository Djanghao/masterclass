# [Rust / Elixir] counting in negative

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5556101/](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5556101/)

---

# Approach
1. Split `s` at any position, then a way to find the number of deletion can be calculated by:
*"count of `'b'` in left"* + *"count of `'a'` in right"*
2. Try all spliting positions to find the best position.
3. *"count of `'a'` in right"* can also be found by:
*"total count of `'a'`"* - *"count of `'a'` in left"*
4. According to 3, The best position can be found by comparing:
*"count of `'b'` in left"* - *"count of `'a'` in left"*
for each position, and then add *"total count of `'a'`"* to the best one.
# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```Rust []
impl Solution {
    pub fn minimum_deletions(s: String) -> i32 {
        let mut best = 0;
        let mut b = 0;
        let mut a = 0;
        for byte in s.bytes() {
            if byte == b'a' {
                a += 1;
            }
            else {
                b += 1;
            }
            best = best.min(b - a);
        }
        best + a
    }
}
```
```Elixir []
defmodule Solution do
  @spec minimum_deletions(s :: String.t) :: integer
  def minimum_deletions(s) do
    count(s, 0, 0, 0)
  end

  defp count(<<?a, tail::binary>>, best, b, a) do
    count(tail, min(best, b - a - 1), b, a + 1)
  end
  defp count(<<?b, tail::binary>>, best, b, a) do
    count(tail, min(best, b + 1 + a), b + 1, a)
  end
  defp count("", best, _, a), do: best + a
end
```