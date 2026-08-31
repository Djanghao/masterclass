# O(log n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/5493509/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/5493509/)

---

# Complexity
- Time complexity:$$O(logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Erlang []
-spec make_integer_beautiful(integer(), integer()) -> integer().
make_integer_beautiful(N, Target) ->
    SOD = sum_of_digits(N, 0),
    D = helper(N, 0, SOD, Target),
    D - N.

-spec helper(integer(), integer(), integer(), integer()) -> integer().
helper(N, Pow, SOD, Tar) when SOD > Tar ->
    NewN = N div 10 + 1,
    NewSOD = sum_of_digits(NewN, 0),
    helper(NewN, Pow + 1, NewSOD, Tar);
helper(N, Pow, _, _) ->
    round(N * math:pow(10, Pow)).

-spec sum_of_digits(integer(), integer()) -> integer().
sum_of_digits(0, Acc) -> Acc;
sum_of_digits(N, Acc) ->
    sum_of_digits(N div 10, Acc + N rem 10).
```
``` Elixir []
defmodule Solution do
  @spec make_integer_beautiful(n :: integer, target :: integer) :: integer
  def make_integer_beautiful(n, target) do
    sod = sumOfDigits(n, 0)
    d = helper(n, 0, sod, target)
    d - n
  end

  @spec helper(n :: integer, pow :: integer, sod :: integer, tar :: integer) :: integer
  defp helper(n, pow, sod, tar) when sod > tar do 
    n = div(n, 10) + 1  
    sod = sumOfDigits(n, 0)
    helper(n, pow + 1, sod, tar)
  end
  defp helper(n, pow, _, _), do: n * (:math.pow(10, pow) |> round())

  @spec sumOfDigits(n:: integer, acc :: integer) :: integer
  defp sumOfDigits(0, acc), do: acc
  defp sumOfDigits(n, acc), do: sumOfDigits(div(n, 10), acc + rem(n, 10))

end
```
``` rust []
impl Solution {
    pub fn make_integer_beautiful(mut n: i64, target: i32) -> i64 {
        fn sod(mut n: i64) -> i64 {
            let mut sum = 0;
            while n != 0 {
                sum += n % 10;
                n /= 10
            }
            sum 
        }
        let (org, mut cnt) = (n, 0_u32);
        while sod(n) > target as i64{
            n = n/10 + 1;
            cnt += 1;
        }
        n * 10_i64.pow(cnt) - org
    }
}
```