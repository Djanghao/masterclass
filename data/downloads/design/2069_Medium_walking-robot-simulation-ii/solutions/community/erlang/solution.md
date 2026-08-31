# Simulation with Lazy Update in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/4915231/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/4915231/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The `num` in the `step()` call can be large, so the key to this problem is to move `num % (2 * (W + H - 2))` steps instead of all `num` steps. Another trick is that we do not need to move for each `step()` call, but only to move once `get_pos()` or `get_dir()` is invoked. 

# Complexity
- Time complexity: $O(Q [H+W])$ where $Q$ is the number of queries. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec robot_init_(Width :: integer(), Height :: integer()) -> any().
robot_init_(Width, Height) -> 
    persistent_term:put(height, Height),
    persistent_term:put(width, Width),
    erlang:put({'Position'}, [0, 0]),
    erlang:put({'Direction'}, [1, 0]),
    erlang:put({'Num'}, 0).

-spec robot_step(Num :: integer()) -> any().
robot_step(Num) -> erlang:put({'Num'}, erlang:get({'Num'}) + Num).

update() -> 
    [H, W] = [persistent_term:get(height), persistent_term:get(width)],
    [X, Y] = erlang:get({'Position'}),
    [DX, DY] = erlang:get({'Direction'}),
    Num = erlang:get({'Num'}),
    Step = case Num > 2 * (H + W - 2) of
        true -> Num rem (2 * (H + W - 2)) + (2 * (H + W - 2));
        false -> Num
    end,
    run([X + Step * DX, Y + Step * DY], [DX, DY], W, H),
    erlang:put({'Num'}, 0).

run([X, Y], [DX, DY], W, H) when X < 0 -> 
    [NDX, NDY] = turn([DX, DY]),
    Step = -X,
    run([0, Y + NDY * Step], [NDX, NDY], W, H);
run([X, Y], [DX, DY], W, H) when X >= W -> 
    [NDX, NDY] = turn([DX, DY]),
    Step = X - W + 1,
    run([W - 1, Y + NDY * Step], [NDX, NDY], W, H);
run([X, Y], [DX, DY], W, H) when Y < 0 -> 
    [NDX, NDY] = turn([DX, DY]),
    Step = -Y,
    run([X + NDX * Step, 0], [NDX, NDY], W, H);
run([X, Y], [DX, DY], W, H) when Y >= H -> 
    [NDX, NDY] = turn([DX, DY]),
    Step = Y - H + 1,
    run([X + NDX * Step, H - 1], [NDX, NDY], W, H);
run([X, Y], [DX, DY], W, H) ->
    erlang:put({'Position'}, [X, Y]),
    erlang:put({'Direction'}, [DX, DY]).
    
turn([DX, DY]) -> [-DY, DX].

-spec robot_get_pos() -> [integer()].
robot_get_pos() -> update(), [X, Y] = erlang:get({'Position'}).

-spec robot_get_dir() -> unicode:unicode_binary().
robot_get_dir() -> 
    update(),
    case [DX, DY] = erlang:get({'Direction'}) of
        [1, 0] -> <<"East">>;
        [0, 1] -> <<"North">>;
        [-1, 0] -> <<"West">>;
        [0, -1] -> <<"South">>
    end.
```