# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/5507784/](https://leetcode.com/problems/set-mismatch/solutions/5507784/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Erlang []
-spec find_error_nums(Nums :: [integer()]) -> [integer()].
find_error_nums(Nums) ->
    helper(Nums, 1, 0, 0).

-spec helper([integer()], integer(), integer(), integer()) -> [integer()].
helper([], _, X, Y) ->
    Mis = (Y - X * X) div (2 * X),
    Dup = Mis + X,
    [Dup, Mis];
helper([H | T], I, X, Y) ->
    Temp = H - I,
    helper(T, I + 1, X + Temp, Y + H * H - I * I).
```
``` Elixir []
defmodule Solution do
  @spec find_error_nums(nums :: [integer]) :: [integer]
  def find_error_nums(nums), do: helper(nums, 1, 0, 0)

  @spec helper(nums :: [integer], i :: integer, x :: integer,  y:: integer) :: [integer]
  def helper([], _, x, y) do
    mis = div(y - x * x, 2 * x)
    dup = mis + x
    [dup, mis] 
  end
  
  def helper([h | t], i , x, y) do
    temp = h - i
    helper(t, i + 1, x + temp, y + h * h - i * i)
  end
end
```
``` rust []
impl Solution {
    pub fn find_error_nums(nums: Vec<i32>) -> Vec<i32> {
        let (mut x, mut y) = (0, 0);
        for i in 1..=nums.len(){
            x += nums[i - 1] - i as i32;
            y += nums[i - 1].pow(2) - i.pow(2) as i32 
        }
        let mis = (y - x.pow(2)) / (2 * x);
        let dup = mis + x;
        vec![dup, mis]
    }
}
```