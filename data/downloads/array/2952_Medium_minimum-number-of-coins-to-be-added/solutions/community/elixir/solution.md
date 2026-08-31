# O(nlog + n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/5520443/](https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/5520443/)

---

# Complexity
- Time complexity:$$O(nlogn +n)$$
<!-- Add your time complexity here, e.g. $$O(nlogn +n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` rust []
impl Solution {
    pub fn minimum_added_coins(mut coins: Vec<i32>, target: i32) -> i32 {
        coins.sort();
        let (mut prefix, mut res, mut i) = (0, 0, 0);
        while prefix < target {
            if i < coins.len() && coins[i] <= prefix + 1 {
                prefix += coins[i];
                i += 1;
            }else {
                prefix += prefix + 1;
                res += 1;
            }
        }
        res
    }
}
```
``` python []
class Solution:
    def minimumAddedCoins(self, coins: List[int], target: int) -> int:
        prefix, res, i = 0, 0, 0
        coins.sort()
        while prefix < target:
            if i < len(coins) and coins[i] <= prefix + 1:
                prefix += coins[i]
                i += 1
            else:
                res += 1
                prefix += prefix + 1
        return res
```
``` java []
final class Solution {
    public int minimumAddedCoins(final int[] coins, final int target) {
        int prefix = 0, res = 0, i = 0;
        Arrays.sort(coins);
        while (prefix < target){
            if (i < coins.length && coins[i] <= prefix + 1){ 
                prefix += coins[i];
                i += 1;
            }else {
                prefix += prefix + 1;
                res += 1;
            }
        }return res;
    }
}
```
``` Erlang []
-spec minimum_added_coins(Coins :: [integer()], Target :: integer()) -> integer().
minimum_added_coins(Coins, Target) ->
    SortedCoins = lists:sort(Coins),
    helper(SortedCoins, Target, 0, 0).

-spec helper(Coins :: [integer()], Target :: integer(), Prefix :: integer(), Acc :: integer()) -> integer().
helper([H | T], Target, Prefix, Acc) when Prefix < Target, H =< Prefix + 1 -> helper(T, Target, Prefix + H, Acc);
helper([], Target, Prefix, Acc)      when Prefix < Target -> helper([], Target, Prefix + Prefix + 1, Acc + 1);
helper(Coins, Target, Prefix, Acc)   when Prefix < Target -> helper(Coins, Target, Prefix + Prefix + 1, Acc + 1);
helper(_, _, _, Acc) -> Acc.
```
``` Elixir []
defmodule Solution do
  @spec minimum_added_coins(coins :: [integer], target :: integer) :: integer
  def minimum_added_coins(coins, target) do 
    coins = Enum.sort(coins)
    helper(coins, target, 0, 0)
    end
    
  @spec helper(coins :: [integer], target :: integer, prefix :: integer, acc :: integer) :: integer
  defp helper([h | t], target, prefix, acc) when prefix < target and h <= prefix + 1, do: helper(t, target, prefix + h, acc)
  defp helper([],      target, prefix, acc) when prefix < target, do: helper([], target, prefix + prefix + 1, acc + 1)
  defp helper(coins,   target, prefix, acc) when prefix < target, do: helper(coins, target, prefix + prefix + 1, acc + 1)
  defp helper(_, _, _, acc), do: acc

end
```