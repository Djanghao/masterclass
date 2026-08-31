# 도달하는거리가 이동시간보다 크면 도착가능하다. 단 도착지점에 먼저도착했을때, 다시돌아오는 경우을 고려해야한다.

**Author:** junhyk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4264685/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4264685/)

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
```
-spec is_reachable_at_time(Sx :: integer(), Sy :: integer(), Fx :: integer(), Fy :: integer(), T :: integer()) -> boolean().

                            is_reachable_at_time(Sx, Sy, Fx, Fy, T) ->
                                X = abs(Fx - Sx),
                                Y = abs(Fy - Sy),
                                Max = max(X, Y),
                                % Min = min(X, Y),
                                Result =
                                    case Max =:= 0 of
                                        true ->
                                            (T >= 2) or (T =:=0);
                                        _ ->
                                        Max =< T
                                    end,
                                Result.
```