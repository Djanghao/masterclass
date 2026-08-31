# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/3929555/](https://leetcode.com/problems/search-a-2d-matrix/solutions/3929555/)

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
-spec search_matrix(Matrix :: [[integer()]], Target :: integer()) -> boolean().
search_matrix(Matrix, Target) -> 
    % Get the total number of rows and columns
    {Rows, Cols} = {length(Matrix), length(hd(Matrix))},
    
    % Perform binary search
    binary_search(Matrix, Rows, Cols, Target, 0, Rows * Cols - 1).

% Function to perform binary search
-spec binary_search([[integer()]], integer(), integer(), integer(), integer(), integer()) -> boolean().
binary_search(Matrix, Rows, Cols, Target, Left, Right) ->
    if 
        Left > Right -> 
            false; % If left index exceeds the right one, return false
        true ->
            % Calculate mid index and get corresponding row and column
            Mid = (Left + Right) div 2,
            {Row, Col} = {Mid div Cols, Mid rem Cols},
            
            % Fetch the value from the matrix
            Value = lists:nth(Col + 1, lists:nth(Row + 1, Matrix)),
            
            % If the value equals the target, return true
            if
                Value == Target -> 
                    true;
                Value < Target -> 
                    % If the value is less than the target, search in the right half
                    binary_search(Matrix, Rows, Cols, Target, Mid + 1, Right);
                true -> 
                    % If the value is greater than the target, search in the left half
                    binary_search(Matrix, Rows, Cols, Target, Left, Mid - 1)
            end
    end.
```