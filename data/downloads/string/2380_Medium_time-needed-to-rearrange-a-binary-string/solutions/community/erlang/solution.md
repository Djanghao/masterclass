# O(n) Soln - Functional Style

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/5572525/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/5572525/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` python []
class Solution:
    def secondsToRemoveOccurrences(self, s: str) -> int:
        return reduce(lambda acc, c: (acc[0] + 1, acc[1]) if c == '0' else (acc[0], max(acc[0], acc[1] + 1)),
            dropwhile(lambda c: c == '1', s), (0, 0))[1]  
```
``` java []
final class Solution {
    public int secondsToRemoveOccurrences(final String s) {
        return  s.chars()
                 .mapToObj(c -> (char) c)
                 .dropWhile(c -> c == '1')
                 .reduce(new int[]{0, 0}, (acc, c) -> switch (c){
                     case '0' -> {
                         acc[0] += 1;
                         yield acc;
                     }
                     default -> {
                         acc[1] = Math.max(acc[0], acc[1] + 1);
                         yield acc;
                     }
                 }, (a, b) -> a)[1];
    }
}
```
``` rust []
impl Solution {
    pub fn seconds_to_remove_occurrences(s: String) -> i32 {
         s.chars()
            .skip_while(|&c| c == '1')
            .fold((0, 0), |(zeros, time), c| match c {
                '0' => (zeros + 1, time),
                 _  => (zeros, zeros.max(time + 1)),
            })
            .1
    }
}
```
``` Elixir []
defmodule Solution do
  @spec seconds_to_remove_occurrences(s :: String.t) :: integer
  def seconds_to_remove_occurrences(s) do
    s
    |> String.graphemes()
    |> Enum.drop_while(&(&1 == "1"))
    |> Enum.reduce({0, 0}, fn
      "0", {zeros, time} -> {zeros + 1, time}
      _, {zeros, time} -> {zeros, max(zeros, time + 1)}
    end)
    |> elem(1)
  end
end
```
``` Erlang []
-spec seconds_to_remove_occurrences(S :: unicode:unicode_binary()) -> integer().
seconds_to_remove_occurrences(S) ->
    Chars = unicode:characters_to_list(S),
    Filtered = lists:dropwhile(fun (C) -> C =:= $1 end, Chars),
    {_, Time} = lists:foldl(fun(C, {Zeros, Time}) ->
        case C of
            $0 -> {Zeros + 1, Time};
            _ -> {Zeros, max(Zeros, Time + 1)}
        end
    end, {0, 0}, Filtered),
    Time.
```