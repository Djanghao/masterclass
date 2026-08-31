# Solution

**Author:** nairvarun
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5889235/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5889235/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func minAddToMakeValid(s string) int {
    unmatchedCloseParens, openParens := 0, 0
    for _, ch := range s {
        if ch == '(' {
            openParens++
            continue
        }

        // ch == ')'
        if openParens == 0 {
            unmatchedCloseParens++
        } else {
            openParens--
        }
    }
    return unmatchedCloseParens + openParens
}
```
```Python3 []
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        unmatched_close_parens, open_parens = 0, 0
        for ch in s:
            if ch == '(':
                open_parens += 1
                continue

            # ch == ')'
            if open_parens == 0:
                unmatched_close_parens += 1
            else:
                open_parens -= 1

        return unmatched_close_parens + open_parens
```
```Erlang []
-spec min_add_to_make_valid(S :: unicode:unicode_binary()) -> integer().
min_add_to_make_valid(S) ->
    min_add_to_make_valid(binary_to_list(S), 0, 0).

min_add_to_make_valid([], UnmatchedCloseParens, OpenParens) -> 
    UnmatchedCloseParens + OpenParens;

min_add_to_make_valid([Ch | Rest], UnmatchedCloseParens, OpenParens) when Ch =:= $( ->
    min_add_to_make_valid(Rest, UnmatchedCloseParens, OpenParens + 1);

min_add_to_make_valid([Ch | Rest], UnmatchedCloseParens, OpenParens) when Ch =:= $) ->
    case OpenParens of
        0 -> min_add_to_make_valid(Rest, UnmatchedCloseParens + 1, OpenParens);
        _ -> min_add_to_make_valid(Rest, UnmatchedCloseParens, OpenParens - 1)
    end.
```
```Elixir []
defmodule Solution do
  @spec min_add_to_make_valid(s :: String.t()) :: integer
  def min_add_to_make_valid(s) do
    min_add_to_make_valid(String.to_charlist(s), 0, 0)
  end

  defp min_add_to_make_valid([], unmatched_close_parens, open_parens) do
    unmatched_close_parens + open_parens
  end

  defp min_add_to_make_valid([ch | rest], unmatched_close_parens, open_parens) when ch == ?( do
    min_add_to_make_valid(rest, unmatched_close_parens, open_parens + 1)
  end

  defp min_add_to_make_valid([ch | rest], unmatched_close_parens, open_parens) when ch == ?) do
    if open_parens == 0 do
      min_add_to_make_valid(rest, unmatched_close_parens + 1, open_parens)
    else
      min_add_to_make_valid(rest, unmatched_close_parens, open_parens - 1)
    end
  end
end
```
