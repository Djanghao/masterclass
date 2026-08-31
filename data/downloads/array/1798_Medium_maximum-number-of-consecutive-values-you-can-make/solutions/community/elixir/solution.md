# O(nlogn) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/5522597/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/5522597/)

---

# Complexity
- Time complexity:$$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` java []
final class Solution {
    public int getMaximumConsecutive(final int[] coins) {
        Arrays.sort(coins);
        int s = 0;
        for(final var c: coins){
            if (s < c - 1) break;
            s += c;
        }return s + 1;
    }
}
```
``` python []
class Solution:
    def getMaximumConsecutive(self, coins: List[int]) -> int:
        coins.sort()
        s = 0;
        for c in coins:
            if s < c - 1:
                break
            s += c
        return s + 1
```
``` rust []
impl Solution {
    pub fn get_maximum_consecutive(mut coins: Vec<i32>) -> i32 {
        coins.sort_unstable();
        let mut s = 0;
        for c in coins{
            if s < c - 1 {
                break;
            }
            s += c;
        }
        s + 1
    }
}
```
``` Erlang []
-spec get_maximum_consecutive(Coins :: [integer()]) -> integer().
get_maximum_consecutive(Coins) ->
  SortedCoins = lists:sort(Coins), 
  helper(SortedCoins, 0).

-spec helper(Coins :: [integer()], Acc :: integer()) -> integer().
helper([], Acc) -> Acc + 1;
helper([H | T], Acc) when Acc < H - 1 -> Acc + 1;
helper([H | T], Acc) -> helper(T, Acc + H).
```
``` Elixir []
defmodule Solution do
  @spec get_maximum_consecutive(coins :: [integer]) :: integer
  def get_maximum_consecutive(coins) do
   coins = Enum.sort(coins)
   helper(coins, 0)    
  end

  @spec helper(coins :: [integer], acc :: integer) :: integer
  defp helper([], acc), do: acc + 1
  defp helper([h | t], acc) when acc < h - 1, do: acc + 1
  defp helper([h | t], acc), do: helper(t, acc + h)
end
```