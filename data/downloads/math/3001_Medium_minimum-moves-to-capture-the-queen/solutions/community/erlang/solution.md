# O(1) Solution in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4866083/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4866083/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
At most the queen can be taken within 2 steps. So we just need to check if the queen can be taken within 1 step:

1. The rock shares the same x or y with the queen, and the bishop is not in between of the rock and the queen.
2. The bishop shares the same diagonal with the queen, and the rock is not in between of the bishop and the queen. 

Erlang is so easy to implement such rules. 

# Complexity
- Time complexity: $O(1)$
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec min_moves_to_capture_the_queen(A :: integer(), B :: integer(), C :: integer(), D :: integer(), E :: integer(), F :: integer()) -> integer().

move_rock(A, B, C, B, E, B) when A < C, C < E -> 2;
move_rock(A, B, C, B, E, B) when A > C, C > E -> 2;
move_rock(A, B, C, D, E, B) -> 1;
move_rock(A, B, C, D, E, F) -> 2.

move_bishop(A, B, C, D, E, F, DX1, DX1, DX2, DX2) when C > A, A > E -> 2;
move_bishop(A, B, C, D, E, F, DX1, DX1, DX2, DX2) when C < A, A < E -> 2;
move_bishop(A, B, C, D, E, F, DX1, DX1, DX2, DY2) -> 1;
move_bishop(A, B, C, D, E, F, DX1, DY1, DX2, DY2) -> 2.

min_moves_to_capture_the_queen(A, B, C, D, E, F) -> 
    min(min(move_rock(A, B, C, D, E, F),
            move_rock(B, A, D, C, F, E)),
        min(move_bishop(A, B, C, D, E, F, C - E, D - F, C - A, D - B), 
            move_bishop(A, B, C, D, E, F, C - E, F - D, C - A, B - D))).
```