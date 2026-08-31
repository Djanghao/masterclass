# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3938695/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3938695/)

---

# Intuition
Ask GPT-4

# Approach
Ask GPT-4

# Complexity
- Time complexity:
I have no idea. GPT-4 solved it for me.

- Space complexity:
I have no idea. GPT-4 solved it for me.

# Code
```
-spec max_sum(Nums :: [integer()]) -> integer().
max_sum(Nums) ->
    % Convert the list of numbers to a list of tuples: {max_digit, number}
    Digits = lists:map(fun(N) -> {max_digit(N), N} end, Nums),

    % Sort the list in descending order
    SortedDigits = lists:sort(fun({D1,_}, {D2,_}) -> D1 > D2 end, Digits),

    % Calculate the maximum sum
    max_pair_sum(SortedDigits, -1).

max_digit(N) ->
    % Convert the number to a string, then to a list of characters
    Digits = integer_to_list(N),
    % Convert the list of characters back to a list of integers
    IntDigits = [list_to_integer([Char]) || Char <- Digits],
    % Find the maximum digit
    lists:max(IntDigits).

max_pair_sum([{D, N} | Rest], Max) ->
    % Skip the numbers with a different maximum digit
    SameDigits = [{D1, N1} || {D1, N1} <- Rest, D1 == D],
    % Include the current number in the list
    SameDigitsWithN = [{D, N} | SameDigits],

    % Find the two largest numbers with the current maximum digit
    {Max1, Max2} = lists:foldl(fun({_, N1}, {M1, M2}) ->
        if 
            N1 > M1 -> {N1, M1};
            N1 > M2 -> {M1, N1};
            true -> {M1, M2}
        end
    end, {-1, -1}, SameDigitsWithN),

    % Calculate the new maximum sum
    NewMax = if 
        Max1 =/= -1 andalso Max2 =/= -1 -> lists:max([Max, Max1+Max2]);
        true -> Max
    end,

    % Continue with the numbers with a different maximum digit
    DifferentDigits = [{D1, N1} || {D1, N1} <- Rest, D1 /= D],
    max_pair_sum(DifferentDigits, NewMax);

max_pair_sum([], Max) when Max =/= -1 ->
    Max;

max_pair_sum([], _) ->
    -1.
```