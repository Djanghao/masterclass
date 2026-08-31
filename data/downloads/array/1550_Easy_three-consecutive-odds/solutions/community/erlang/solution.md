# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/5404000/](https://leetcode.com/problems/three-consecutive-odds/solutions/5404000/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
final class Solution {
    public boolean threeConsecutiveOdds(final int[] arr) {
        int count = 0;
        for (final int num : arr)
            if (count == 3) return true;
            else if ((num & 1) == 1) count += 1;
            else count = 0;
        return count == 3;
    }
}
```
```python []
class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        count = 0
        for num in arr:
            match count: 
                case 3: return True 
                case _ if (num & 1) == 1: count += 1
                case _: count = 0
        return count == 3 
```
```rust []
impl Solution {
    pub fn three_consecutive_odds(arr: Vec<i32>) -> bool {
        let mut count = 0;
        for num in arr{
            match count {
                3 => return true, 
                _ if (num & 1) == 1 => count += 1,
                _ => count = 0
            }
        }
        count == 3
    }
}
```
``` typescript []
function threeConsecutiveOdds(arr: readonly number[]): boolean {
    let count = 0
    for (const num of arr)
        if (count == 3) return true
        else if ((num & 1) == 1) count += 1
        else count = 0
    return count == 3
};
```
``` javascript []
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0
    for (const num of arr)
        if (count == 3) return true
        else if ((num & 1) == 1) count += 1
        else count = 0
    return count == 3
};
```
``` c []
bool threeConsecutiveOdds(const int* arr, const int arrSize) {
    int count = 0;
    for (int i = 0; i < arrSize; i++)
        if (count == 3) return true;
        else if ((arr[i] & 1) == 1) count += 1;
        else count = 0;
    return count == 3;
}
```
``` golang []
func threeConsecutiveOdds(arr []int) bool {
    count := 0
    for _, num := range arr{
        if count == 3 { 
            return true
        } else if (num & 1) == 1 { 
            count += 1
        } else { 
            count = 0
        }
    }
    return count == 3
}
```
``` Erlang []
-spec three_consecutive_odds(Arr :: [integer()]) -> boolean().
three_consecutive_odds(Arr) -> solve(Arr, 0).

solve(_, 3)  -> true;
solve([], _) -> false;
solve([H | T], Acc) when H band 1 =:= 1 -> solve(T, Acc + 1);
solve([_ | T],   _)  -> solve(T, 0).
``` 
``` Elixir []
defmodule Solution do
  import Bitwise

  @spec three_consecutive_odds(arr :: [integer]) :: boolean
  def three_consecutive_odds(arr), do: solve(arr, 0)

  @spec solve(arr :: [integer], acc :: integer) :: boolean
  defp solve(_, 3), do: true
  defp solve([], _), do: false
  defp solve([h | t], acc) when (h &&& 1) == 1, do: solve(t, acc + 1)
  defp solve([_ | t],  _), do: solve(t, 0)

end
```
