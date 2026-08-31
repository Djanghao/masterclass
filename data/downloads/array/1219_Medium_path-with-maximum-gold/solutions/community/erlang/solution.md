# Rust, Erlang Solutions

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5154556/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5154556/)

---

### Rust

```rust
use std::collections::HashSet;

impl Solution {
    pub fn get_maximum_gold(grid: Vec<Vec<i32>>) -> i32 {
        let mut max_gold = 0;

        for i in 0..grid.len() {
            for j in 0..grid[i].len() {
                if grid[i][j] != 0 {
                    max_gold = max_gold.max(Self::max_gold_from((i, j), &grid));
                }
            }
        }
        max_gold
    }

    fn max_gold_from(pos: (usize, usize), grid: &[Vec<i32>]) -> i32 {
        let mut max_gold = 0;
        let mut stack = vec![(pos, 0, HashSet::new())];

        while let Some(((x, y), mut gold, mut visited)) = stack.pop() {
            gold += grid[x][y];
            max_gold = max_gold.max(gold);
            visited.insert((x, y));

            for (i, j) in [(x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)] {
                if i >= 0
                    && i < grid.len()
                    && j >= 0
                    && j < grid[0].len()
                    && grid[i][j] != 0
                    && !visited.contains(&(i, j))
                {
                    stack.push(((i, j), gold, visited.clone()));
                }
            }
        }
        max_gold
    }
}
```

---

### Erlang

```erlang
-spec get_maximum_gold(Grid :: [[integer()]]) -> integer().
get_maximum_gold(Grid) ->
    N = length(Grid),
    M = length(hd(Grid)),
    Starts =
        [{X, Y}
         || X <- lists:seq(1, N),
            Y <- lists:seq(1, M),
            lists:nth(Y, lists:nth(X, Grid)) =/= 0],
    lists:foldl(fun(Pos, Acc) -> max(max_gold_for(Pos, Grid), Acc) end,
                0,
                Starts).

max_gold_for(Pos, Grid) ->
    max_gold_for(Pos, 0, sets:new(), Grid, 0).

max_gold_for(Pos = {X, Y}, Gold, Visited, Grid, MaxGold) ->
    Candidates = [{X + 1, Y}, {X - 1, Y}, {X, Y + 1}, {X, Y - 1}],
    Neighbors =
        lists:filter(fun({I, J}) -> is_neighbor({I, J}, Grid, Visited) end,
                     Candidates),
    NewGold = Gold + lists:nth(Y, lists:nth(X, Grid)),
    NewMaxGold = max(NewGold, MaxGold),
    lists:foldl(fun({I, J}, AccGold) ->
                   max(AccGold,
                       max_gold_for({I, J},
                                    NewGold,
                                    sets:add_element(Pos, Visited),
                                    Grid,
                                    NewMaxGold))
                end,
                NewMaxGold,
                Neighbors).

is_neighbor(Pos = {X, Y}, Grid, Visited) ->
    N = length(Grid),
    M = length(hd(Grid)),
    case X > 0 andalso X =< N andalso Y > 0 andalso Y =< M of
        true ->
            lists:nth(Y, lists:nth(X, Grid)) =/= 0
            andalso not sets:is_element(Pos, Visited);
        false ->
            false
    end.
```