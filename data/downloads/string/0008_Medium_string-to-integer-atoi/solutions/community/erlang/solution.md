# Erlang Implementation of my_atoi Function

**Author:** dwish24
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/5762863/](https://leetcode.com/problems/string-to-integer-atoi/solutions/5762863/)

---

# Intuition
To convert a string representation of an integer into an actual integer, the function should handle optional leading whitespace, optional sign characters, and ensure that the result is within the bounds of a 32-bit signed integer.

# Approach
1. **Convert Binary to List:** Convert the binary input into a list of characters for easier manipulation.
2. **Skip Leading Whitespace:** Remove any leading whitespace characters from the list.
3. **Determine the Sign:** Check for optional '+' or '-' signs at the beginning of the string to set the appropriate sign for the integer.
4. **Parse the Number:** Iterate through the characters to construct the integer value from the digits.
5. **Handle Rounding:** Ensure the result is within the 32-bit signed integer range, and adjust if necessary.

# Complexity
- **Time complexity:** $O(n)$ where $n$ is the number of characters in the input string. Each character is processed at most once.

- **Space complexity:** $O(n)$ due to the storage of the character list and intermediate processing.

# Code
```erlang []
-export([my_atoi/1]).

%% Define the function specification
-spec my_atoi(S :: binary()) -> integer().
my_atoi(S) ->
    %% Convert binary to list of characters for easier manipulation
    Chars = binary:bin_to_list(S),
    
    %% Skip leading whitespace
    CharsAfterWhitespace = skip_whitespace(Chars),
    
    %% Determine the sign
    {Sign, CharsAfterSign} = case CharsAfterWhitespace of
        [$+ | Rest] -> {1, Rest};
        [$- | Rest] -> {-1, Rest};
        _ -> {1, CharsAfterWhitespace}
    end,
    
    %% Convert the string to an integer
    {Result, CharsAfterNumber} = parse_number(CharsAfterSign, 0),
    
    %% Handle rounding
    FinalResult = case Result * Sign of
        X when X < -2147483648 -> -2147483648;
        X when X > 2147483647 -> 2147483647;
        X -> X
    end,
    
    FinalResult.

%% Helper function to skip leading whitespace
skip_whitespace([]) ->
    [];
skip_whitespace([32 | Rest]) ->
    skip_whitespace(Rest);
skip_whitespace(Chars) ->
    Chars.

%% Helper function to parse the number
parse_number([], Acc) ->
    {Acc, []};
parse_number([H | T], Acc) when H >= $0, H =< $9 ->
    Digit = H - $0,
    NewAcc = Acc * 10 + Digit,
    parse_number(T, NewAcc);
parse_number(Chars, Acc) ->
    {Acc, Chars}.
```