# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/happy-number/solutions/5489621/](https://leetcode.com/problems/happy-number/solutions/5489621/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public boolean isHappy(final int n) {
       if (n == 1) return true;
       final Function<Integer, Integer> sos = a -> {
            int sum = 0;
            while (a != 0) {
                int d = a % 10;
                sum += d * d;
                a /= 10;
            }return sum;
        };
        int slow = n, fast = sos.apply(n);
        while (fast != 1 && fast != slow) {
            slow = sos.apply(slow);
            fast = sos.andThen(sos).apply(fast);
        }return fast == 1;
    }
}
```
```python []
class Solution:
    def isHappy(self, n: int) -> bool:
        def sos(n: int) -> int:
            sum = 0
            while n != 0:
                sum += (n % 10) ** 2
                n //= 10
            return sum
        slow, fast = n, sos(n)
        while fast != 1 and fast != slow: slow, fast = sos(slow), sos(sos(fast))
        return fast == 1
```
```rust []
impl Solution {
    pub fn is_happy(n: i32) -> bool {
        if n == 1 {
            return true;
        }
        fn sos(mut n: i32) -> i32 {
            let mut sum = 0;
            while n != 0 {
                sum += (n % 10).pow(2); 
                n /= 10;
            }
            sum
        }
        let (mut slow, mut fast) = (n, sos(n));
        while fast != 1 && fast != slow {
            (slow, fast) = (sos(slow), sos(sos(fast)))
        }
        fast == 1
    }
}
```
``` C []
int sos(int n);
bool isHappy(const int n) {
    if (n == 1) return true;
    int slow = n, fast = sos(n);
    while (fast != 1 && slow != fast) {
        slow = sos(slow);
        fast = sos(sos(fast));
    }return fast == 1;
}
int sos(int n) {
    int sum = 0;
    while (n != 0) {
        int d = n % 10;
        sum += d * d;
        n /= 10;
    }return sum;
}
```
``` golang []
func isHappy(n int) bool {
    var sos func(int) int
	sos = func(n int) int {
		sum := 0
		for n != 0 {
			d := n % 10
			sum += d * d
			n /= 10
		}
		return sum
	}
	slow, fast := n, sos(n)
	for fast != 1 && slow != fast {
		slow, fast = sos(slow), sos(sos(fast))
	}
	return fast == 1
}
```
``` javascript []
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function sos(n) {
        let sum = 0;
        while (n !== 0) {
            let d = n % 10;
            sum += d * d;
            n = Math.floor(n / 10);
        }return sum;
    }
    let slow = n, fast = sos(n);
    while (fast !== 1 && slow !== fast) {
        slow = sos(slow);
        fast = sos(sos(fast));
    }return fast === 1;
};
```
``` typescript []
function isHappy(n: number): boolean {
    function sos(n: number): number {
        let sum = 0;
        while (n !== 0) {
            let d = n % 10;
            sum += d * d;
            n = Math.floor(n / 10);
        }return sum;
    }
    let slow = n, fast = sos(n);
    while (fast !== 1 && slow !== fast) {
        slow = sos(slow);
        fast = sos(sos(fast));
    }return fast === 1;
};
```
``` Erlang []
-spec is_happy(N :: integer()) -> boolean().
is_happy(1) -> true;
is_happy(N) -> is_happy(N, sum_of_squares(N, 0)).

-spec is_happy(integer(), integer()) -> boolean().
is_happy(_, 1) -> true;
is_happy(Slow, Slow) -> false;
is_happy(Slow, Fast) ->
    NewSlow = sum_of_squares(Slow, 0),
    NewFast = sum_of_squares(sum_of_squares(Fast, 0), 0),
    is_happy(NewSlow, NewFast).

-spec sum_of_squares(integer(), integer()) -> integer().
sum_of_squares(0, Acc) -> Acc;
sum_of_squares(N, Acc) ->
    D = N rem 10,
    sum_of_squares(N div 10, Acc + D * D).
```
``` Elixir []
defmodule Solution do
  @spec is_happy(n :: integer) :: boolean
  def is_happy(1), do: true
  def is_happy(n), do: isHappy?(n, sumOfSquares(n, 0))

  @spec isHappy?(slow :: integer, fast :: integer) :: boolean
  defp isHappy?(_, 1), do: true
  defp isHappy?(slow, slow), do: false
  defp isHappy?(slow, fast) do 
    slow = sumOfSquares(slow, 0)
    fast = sumOfSquares(fast, 0) |> sumOfSquares(0)
    isHappy?(slow, fast)
  end  

  @spec sumOfSquares(n :: integer, acc :: integer) :: integer
  defp sumOfSquares(0, acc), do: acc
  defp sumOfSquares(n, acc) do 
    d = rem(n, 10)
    acc = acc + d * d
    n = div(n, 10)
    sumOfSquares(n, acc) 
  end
end
```
