# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/5841672/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/5841672/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each row, count number of laser pointer in row.
laser lines between previous row and current row is $$previousLaserPointerCount * currentLaserPointerCount$$.
so summation it, answer come out.
But, if there is no laser pointer in current row, this row will be handled as transparent row. So we do not update previous laser pointer count to 0. 


# Code
```erlang []
-spec number_of_beams(Bank :: [unicode:unicode_binary()]) -> integer().

unbinarize(Bank) -> lists:map(fun binary_to_list/1, Bank).
count_laser(List) -> length([X || X <- List, X =:= $1]).

number_of_beams_impl(UBank) -> number_of_beams_impl(UBank, 0).
%% number_of_beams_impl(UBank, PrevLaserCount) -> 
number_of_beams_impl([], _) -> 0;
number_of_beams_impl([Row | T], PrevLaserCount) -> 
    CurCount = count_laser(Row),
    PrevLaserCount * CurCount + 
    number_of_beams_impl(T, 
        case CurCount of
            0 -> PrevLaserCount;
            _ -> CurCount
        end
    ).

number_of_beams(Bank) ->
    number_of_beams_impl(unbinarize(Bank)).
```