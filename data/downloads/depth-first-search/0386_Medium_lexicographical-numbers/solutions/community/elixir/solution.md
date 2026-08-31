# [Rust / Elixir] O(n) O(1) solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5813867/](https://leetcode.com/problems/lexicographical-numbers/solutions/5813867/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```Rust []
impl Solution {
    pub fn lexical_order(n: i32) -> Vec<i32> {
        let mut ans = Vec::<i32>::with_capacity(n as usize);
        let mut x = 1;
        ans.push(x);
        for _ in 1..n {
            if x * 10 <= n {
                x *= 10;
            }
            else {
                x += 1;
                while x % 10 == 0 || x > n {
                    x = (x + 9) / 10;
                }
            }
            ans.push(x);
        }
        ans
    }
}
```
```Elixir []
defmodule Solution do
  @spec lexical_order(n :: integer) :: [integer]
  def lexical_order(n) do
    Stream.unfold(1, fn
      x when x * 10 <= n -> {x, x * 10}
      x -> {x, next_seq(x + 1, n)}
    end)
    |> Enum.take(n)
  end

  defp next_seq(x, n)
  when rem(x, 10) == 0 or x > n do
    div(x + 9, 10)
    |> next_seq(n)
  end
  defp next_seq(x, _), do: x
end
```