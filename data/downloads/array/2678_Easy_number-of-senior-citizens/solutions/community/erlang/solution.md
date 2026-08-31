# O(n) Soln - Functional Approach

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5565910/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5565910/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` python []
class Solution:
    def countSeniors(self, details: List[str]) -> int:
        return reduce(lambda acc, det: acc + (1 if int(det[11:13]) > 60 else 0), details, 0)     
```
``` java []
class Solution {
    public int countSeniors(String[] details) {
        return Arrays
                .stream(details)
                .reduce(0, (a, b) -> Integer.parseInt(b.substring(11, 13)) > 60? a + 1: a, Integer::sum);
    }
}
```
``` rust []
impl Solution {
    pub fn count_seniors(details: Vec<String>) -> i32 {
        details
            .into_iter()
            .fold(0, |acc, det| if det[11..13].parse::<u8>().unwrap() > 60{acc + 1} else {acc})
    }
}
```
``` Elixir []
defmodule Solution do
  @spec count_seniors(details :: [String.t]) :: integer
  def count_seniors(details) do
    Enum.reduce(details, 0, fn detail, acc ->
      age = String.slice(detail, 11..12) |> String.to_integer()
      if age > 60, do: acc + 1, else: acc end
    )
  end
end
```
``` Erlang []
-spec count_seniors(Details :: [unicode:unicode_binary()]) -> integer().
count_seniors(Details) ->
  lists:foldl(
    fun(Detail, Acc) ->
      Age = binary_to_integer(binary:part(Detail, 11, 2)),
      case Age > 60 of
        true -> Acc + 1;
        false -> Acc
      end
    end,
    0,
    Details
  ).
```
``` kotlin []
class Solution {
    fun countSeniors(details: Array<String>): Int {
        return details.count { it.substring(11, 13).toInt() > 60 }
    }
}
```
``` scala []
object Solution {
    def countSeniors(details: Array[String]): Int = {
        details.count(detail => detail.slice(11, 13).toInt > 60)
    }
}
```