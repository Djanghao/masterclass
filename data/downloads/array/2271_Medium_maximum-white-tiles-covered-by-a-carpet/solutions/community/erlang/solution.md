# Sorting and Two Points in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/5202360/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/5202360/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Sort the list and scan from the left to the right. At each position $(L_2, R_2)$, update its left end $(L_1, R_2)$ within `CarpetLen`. Find the maximum coverage by maintaining the count of tiles within the range of `[L_1, R_2]`.
  
# Complexity
- Time complexity: $O(N \\log N)$ for sorting, while only $O(N)$ for the two point scanning.  
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$ for the auxiliary space. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec maximum_white_tiles(Tiles :: [[integer()]], CarpetLen :: integer()) -> integer().
maximum_white_tiles(Tiles, CarpetLen) ->
  SortedTiles = lists:sort([[L-1,R] || [L,R] <- Tiles]),
  solve(SortedTiles, SortedTiles, CarpetLen, 0).

solve(_, [], Len, C) -> 0;
solve([[L1,R1]|T1], [[L2,R2]|T2], Len, C) when R2 - Len >= R1 ->
    [[L12,R12]|_] = T1,
    solve(T1, [[L2,R2]|T2], Len, C - (R1-L1));
solve([[L1,R1]|T1], [[L2,R2]|T2], Len, C) when L1 == L2 ->
    max(min(Len, R2 - L2), solve([[L1,R1]|T1], T2, Len, R2-L2));
solve([[L1,R1]|T1], [[L2,R2]|T2], Len, C) when R2 - L2 >= Len ->
    max(Len, solve([[L1,R1]|T1], T2, Len, C + (R2-L2)));
solve([[L1,R1]|T1], [[L2,R2]|T2], Len, C) ->
    Coverage = (R2 - L2) + C - (R1 - L1) + R1 - max(R2 - Len, L1),
    max(Coverage, solve([[L1,R1]|T1], T2, Len, C + (R2-L2))).
```