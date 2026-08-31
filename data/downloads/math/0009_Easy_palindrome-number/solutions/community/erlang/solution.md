# Function Style O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/5345427/](https://leetcode.com/problems/palindrome-number/solutions/5345427/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution:
    def isPalindrome(self, x: int) -> bool:
        def reverse(x: int, r: int) -> bool:
            match (x, r):
                case (_, _) if x < 10:
                    return r * 10 + x
                case _:
                    return reverse(x // 10, r * 10 + x % 10)
        match x:
            case _ if x < 0:
                return False
            case _ if x < 10:
                return True
            case _:
                return reverse(x, 0) == x
```
```rust []
impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        fn reverse(x: i32, r: i32) -> i32 {
            match (x, r){
                (_, _) if x < 10 => r * 10 + x,
                _ => reverse(x / 10, r * 10 + x % 10),
            }
        }
        match x {
            _ if x < 0 => false,
            _ if x < 10 => true,
            _ => reverse(x, 0) == x, 
        }
    }
}
```
```Erlang []
-spec is_palindrome(X :: integer()) -> boolean().
is_palindrome(X) when X < 0 -> false;
is_palindrome(X) when X < 10 -> true;
is_palindrome(X) -> reverse(X, 0) == X.

-spec reverse(X :: integer(), R :: integer()) -> integer().
reverse(X, R) when X < 10 -> R * 10 + X;
reverse(X, R) -> reverse(floor(X/10), R * 10 + (X rem 10)). 
```
```Elixir []
defmodule Solution do
  @spec is_palindrome(integer()) :: boolean()
  def is_palindrome(x) when x < 0, do: false
  def is_palindrome(x) when x < 10, do: true
  def is_palindrome(x), do: reverse(x, 0) == x

  @spec reverse(integer(), integer()) :: integer()
  defp reverse(x, r) when x < 10, do: r * 10 + x
  defp reverse(x, r), do: reverse(div(x, 10), r * 10 + rem(x, 10))
end
```
