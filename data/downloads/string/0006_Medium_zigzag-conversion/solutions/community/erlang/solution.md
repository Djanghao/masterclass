# Zigzag Conversion in Erlang

**Author:** dwish24
**Votes:** 0
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/5762854/](https://leetcode.com/problems/zigzag-conversion/solutions/5762854/)

---

# Intuition
To solve the zigzag conversion problem, you need to map a given string into a zigzag pattern across a specified number of rows. This involves placing characters into rows in a zigzag manner (down and up) and then reading them line by line to form the final string. The key challenge is to efficiently build and handle the zigzag pattern while maintaining the correct order of characters.

# Approach
1. **Convert Input:** Convert the input string to a list of characters for easier manipulation.
2. **Edge Cases:** Handle cases where the number of rows is 1 or greater than or equal to the length of the string, in which case the string remains unchanged.
3. **Initialize Rows:** Create a list of empty lists, where each inner list represents a row in the zigzag pattern.
4. **Build Zigzag Pattern:** Use a recursive function to place each character in the appropriate row, switching direction when reaching the top or bottom row.
5. **Concatenate Rows:** Once the zigzag pattern is built, concatenate all rows to form the final string.
6. **Convert Back:** Convert the list of characters back to a binary string for the final output.
# Complexity
- **Time complexity:** $O(n)$. Each character is processed exactly once, and the operations on the rows are linear in terms of the number of characters.
- **Space complexity:** $O(n)$. The space required is proportional to the number of characters in the string, as we store the characters in the rows and use additional space for intermediate lists.


# Code
```erlang []
%% Define the function specification
-spec convert(S :: unicode:unicode_binary(), NumRows :: integer()) -> unicode:unicode_binary().
convert(S, NumRows) ->
    %% Convert the input string to a list of characters
    CharList = unicode:characters_to_list(S),
    Length = length(CharList),
    %% Handle edge cases
    if
        NumRows == 1; NumRows >= Length ->
            S;
        true ->
            %% Initialize a list of empty lists (rows) with length NumRows
            Rows = lists:map(fun(_) -> [] end, lists:seq(1, NumRows)),
            %% Build the zigzag pattern
            ZigzagRows = build_zigzag(CharList, Rows, 0, true),
            %% Concatenate all rows to form the result
            unicode:characters_to_binary(lists:append(ZigzagRows))
    end.

%% Recursive function to build zigzag rows
-spec build_zigzag([integer()], [[integer()]], integer(), boolean()) -> [[integer()]].
build_zigzag([], Rows, _, _) ->
    Rows;
build_zigzag([Char | Rest], Rows, CurrentRow, GoingDown) ->
    %% Add the character to the current row
    UpdatedRows = update_row(Rows, CurrentRow, Char),
    %% Determine the new direction and row index
    {NewDirection, NewRow} = case {CurrentRow, GoingDown} of
        {0, _} -> {true, 1};
        {Row, _} when Row == length(Rows) - 1 -> {false, Row - 1};
        {Row, true} -> {true, Row + 1};
        {Row, false} -> {false, Row - 1}
    end,
    %% Recursively build the zigzag pattern
    build_zigzag(Rest, UpdatedRows, NewRow, NewDirection).

%% Helper function to update the row with the new character
-spec update_row([[integer()]], integer(), integer()) -> [[integer()]].
update_row(Rows, Index, Char) ->
    lists:sublist(Rows, Index) ++ [lists:nth(Index + 1, Rows) ++ [Char]] ++ lists:nthtail(Index + 1, Rows).

```