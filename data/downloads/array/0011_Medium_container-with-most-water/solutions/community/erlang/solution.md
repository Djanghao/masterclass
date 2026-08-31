# Maximum Water Container Area in Erlang

**Author:** dwish24
**Votes:** 0
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/5765986/](https://leetcode.com/problems/container-with-most-water/solutions/5765986/)

---

# Intuition
The problem requires finding the maximum area of water that can be contained between two lines in a list of heights. The idea is to calculate the area between each pair of lines and find the maximum possible area. The area is determined by the shorter line multiplied by the width between the two lines. We aim to optimize the solution by not calculating the area for every possible pair, but rather using a two-pointer technique.

# Approach
1. **Convert List to Tuple:** Convert the list of heights into a tuple for efficient element access.
2. **Initialize Pointers:** Use two pointers, one at the beginning (Left) and one at the end (Right) of the tuple.
3. **Calculate Area:** Compute the area between the lines at these two pointers and update the maximum area if necessary.
4. **Move Pointers:** Move the pointer pointing to the shorter line towards the other pointer to potentially find a larger area.
5. **Terminate:** Repeat until the pointers meet.

# Complexity
- **Time complexity:** $O(n)$. The algorithm makes a single pass through the list, moving each pointer only once.

- **Space complexity:** $O(1)$. The space complexity is constant as the algorithm uses a fixed amount of extra space beyond the input.

# Code
```erlang []
-spec max_area([integer()]) -> integer().
max_area(Height) ->
    TupleHeight = list_to_tuple(Height),
    max_area(TupleHeight, 0, length(Height) - 1, 0).

max_area(_, Left, Right, MaxArea) when Left >= Right ->
    MaxArea;
max_area(TupleHeight, Left, Right, MaxArea) ->
    LeftHeight = element(Left + 1, TupleHeight),
    RightHeight = element(Right + 1, TupleHeight),
    Width = Right - Left,
    CurrentArea = min(LeftHeight, RightHeight) * Width,
    NewMaxArea = max(MaxArea, CurrentArea),
    
    % Move the pointer pointing to the shorter line
    case LeftHeight < RightHeight of
        true  -> max_area(TupleHeight, Left + 1, Right, NewMaxArea);
        false -> max_area(TupleHeight, Left, Right - 1, NewMaxArea)
    end.

```