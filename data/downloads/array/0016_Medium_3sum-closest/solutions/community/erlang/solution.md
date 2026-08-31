# Solve with erlang

**Author:** topsiu1
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/5924687/](https://leetcode.com/problems/3sum-closest/solutions/5924687/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```erlang []
-spec three_sum_closest(Nums :: [integer()], Target :: integer()) -> integer().
three_sum_closest(Nums, Target) ->
    do_three_sum_closest(Nums, Target, 100000, 100000).

do_three_sum_closest([First| Rest], Target, Sum, Distance) ->
    do_first(Rest, Target, Sum, Distance, First).

do_first([], _, Sum, _, _) ->
    Sum;
do_first([Second| Rest], Target, Sum, Distance, First) ->
    {NewSum, NewDistance} = do_second(Rest, Target, Sum, Distance, First, Second),
    case NewSum of
        Target ->
            NewSum;
        NewSum ->
            case NewDistance < Distance of
                true ->
                    do_first(Rest, Target, NewSum, NewDistance, Second);
                _ ->
                    do_first(Rest, Target, Sum, Distance, Second)
            end
    end.

do_second([], _, Sum, Distance, _, _) ->
    {Sum, Distance};
do_second([Third| Rest], Target, Sum, Distance, First, Second) ->
    {NewSum, NewDistance} = do_third(Rest, Target, Sum, Distance, First, Second, Third),
    case NewSum of
        Target ->
            {NewSum, 0};
        NewSum ->
            case NewDistance < Distance of
                true ->
                    do_second(Rest, Target, NewSum, NewDistance, First, Third);
                _ ->
                    do_second(Rest, Target, Sum, Distance, First, Third)
            end
    end.

do_third([], Target, Sum, Distance, First, Second, Third) ->
    NewSum = First + Second + Third,
    NewDistance = abs(NewSum - Target),
    case NewDistance < Distance of
        true ->
            {NewSum, NewDistance};
        _ ->
            {Sum, Distance}
    end;
do_third([NewThird| Rest], Target, Sum, Distance, First, Second, Third) ->
    case First + Second + Third of
        Target ->
            {Target, 0};
        NewSum ->
            NewDistance = abs(NewSum - Target),
            case NewDistance < Distance of
                true ->
                    do_third(Rest, Target, NewSum, NewDistance, First, Second, NewThird);
                _ ->
                    do_third(Rest, Target, Sum, Distance, First, Second, NewThird)
            end
    end.

```