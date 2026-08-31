# [Erlang] Prolog-style declarative solution

**Author:** lvsz
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/3273988/](https://leetcode.com/problems/valid-sudoku/solutions/3273988/)

---

# Intuition
Erlang inherited its declarative style from Prolog, which excels at constraint logic programming.

# Approach
Have one function that checks whether 9 given elements adhere to the sudoku constraints, and a function for each of the dimensions this constraint applies to (row, column, square).

# Complexity
- Time complexity:
$$N/A\\ (constant\\ input\\ size)$$

- Space complexity:
$$N/A\\ (constant\\ input\\ size)$$

# Code
```
-spec is_valid_sudoku(Board :: [[char()]]) -> boolean().

valid9(Squares) ->
    % filter out any unfilled squares
    Filled = lists:filter(fun(X) -> X /= $. end, Squares),
    % convert to set to remove any duplicates
    % if lengths mismatch, there were duplicates, i.e. was invalid
    length(Filled) == sets:size(sets:from_list(Filled)).

validate_rows([]) -> true;
validate_rows([R | Rs]) -> valid9(R) and validate_rows(Rs).

% check columns by checking rows of transposed board
validate_cols(Board) ->
    % transpose board using list comprehension
    TB = [[lists:nth(I, X) || X <- Board] || I <- lists:seq(1, length(Board))],
    validate_rows(TB).

% validate squares by grabbing the first 3 elements of the first 3 lists
validate_squares([]) ->
    true;
validate_squares([[], [], [] | Rs]) ->
    validate_squares(Rs);
validate_squares([[A, B, C | R1], [D, E, F | R2], [G, H, I | R3] | Rs]) ->
    valid9([A, B, C, D, E, F, G, H, I]) and validate_squares([R1, R2, R3 | Rs]).

is_valid_sudoku(Board) ->
    validate_rows(Board) and validate_cols(Board) and validate_squares(Board).
```