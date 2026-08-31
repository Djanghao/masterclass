# O(N) Scan with Hashing in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/4929597/](https://leetcode.com/problems/sum-of-distances/solutions/4929597/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Iteratively scan the array and sum up the left cost and the right cost of each element. To obtain the left/right costs in $O(1)$, pre-computation. Then, we update the left/right costs for `v` during each occurrence of `v`. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-define (GET(Table, Key), maps:get(Key, Table, 0)).
-define (SET(Table, Key, Val), Table#{Key => Val}).
-define (ADD(Table, Key, Val), ?SET(Table, Key, ?GET(Table, Key) + Val)).

-spec distance(Nums :: [integer()]) -> [integer()].
distance(Nums) -> 
    [C, W] = count(Nums, 0, #{}, #{}),
    solve(Nums, 0, C, W, #{}, #{}).

count([H|T], I, C, W) -> count(T, I+1, ?ADD(C, H, 1), ?ADD(W, H, I));
count([], _, C, W) -> [C, W].

solve([H|T], I, RC, RW, LC, LW) -> 
    [LCost, NewLC, NewLW] = update_left(H, I, LC, LW),
    [RCost, NewRC, NewRW] = update_right(H, I, RC, RW),
    [LCost+RCost|solve(T, I+1, NewRC, NewRW, NewLC, NewLW)];
solve([], _, _, _, _, _) -> [].

update_left(H, I, LC, LW) -> 
    case ?GET(LC, H) of
        0 -> [0, ?SET(LC, H, 1), ?SET(LW, H, [0, I])];
        C -> 
            [W, J] = ?GET(LW, H),
            NewW = W + C * (I - J),
            [NewW, ?SET(LC, H, C+1), ?SET(LW, H, [NewW, I])]
    end.

update_right(H, I, RC, RW) -> 
    case ?GET(RC, H) of
        0 -> [0, RC, RW];
        C -> 
            W = ?GET(RW, H),
            NewW = W - C * I,
            [NewW, ?SET(RC, H, C-1), ?SET(RW, H, W - I)]
    end.
```