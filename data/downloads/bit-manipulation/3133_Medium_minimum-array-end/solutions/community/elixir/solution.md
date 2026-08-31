# [Rust / Elixir] Bitwise solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-array-end/solutions/6024912/](https://leetcode.com/problems/minimum-array-end/solutions/6024912/)

---

# Complexity
- Time complexity: $$O(log(max(n, x)))$$

- Space complexity: $$O(1)$$

# Code
```Rust []
impl Solution {
    pub fn min_end(mut n: i32, mut x: i32) -> i64 {
        let mut ans = 0;
        let mut bit = 1;
        n -= 1;
        while n != 0 || x != 0 {
            if x & 1 == 1 {
                ans |= bit;
            }
            else {
                if n & 1 == 1 {
                    ans |= bit;
                }
                n >>= 1;
            }
            x >>= 1;
            bit <<= 1;
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  use Bitwise

  @spec min_end(n :: integer, x :: integer) :: integer
  def min_end(n, x) do
    solve(n - 1, x, 1, 0)
  end

  defp solve(0, 0, _, ans), do: ans
  defp solve(n, x, bit, ans) do
    cond do
      (x &&& 1) == 1 -> solve(n, x >>> 1, bit <<< 1, ans ||| bit)
      (n &&& 1) == 1 -> solve(n >>> 1, x >>> 1, bit <<< 1, ans ||| bit)
      true -> solve(n >>> 1, x >>> 1, bit <<< 1, ans)
    end
  end
end
```