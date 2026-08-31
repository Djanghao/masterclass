# Simulation in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5736476/](https://leetcode.com/problems/walking-robot-simulation/solutions/5736476/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
For such a small data size, my solution just applies the brute-force simulation. The only cut is made when the robot meets an obstacle, the remaining $k$ steps can be entirely skipped. 

# Complexity
- Time complexity: $O(N) + O(M)$ where $N$ is the number of commands, and  $M$ is the number of obstacles.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```erlang []
-spec robot_sim(Commands :: [integer()], Obstacles :: [[integer()]]) -> integer().
robot_sim(Commands, Obstacles) ->
solve(Commands, build_obstacles(Obstacles), 0, 0, 0, 1).

build_obstacles([[X,Y]|T]) -> sets:add_element({X,Y}, build_obstacles(T));
build_obstacles([]) -> sets:new().

solve([], Obstacles, _, _, _, _) -> 0;
solve([-2|T], Obstacles, X, Y, DX, DY) -> solve(T, Obstacles, X, Y, -DY, DX);
solve([-1|T], Obstacles, X, Y, DX, DY) -> solve(T, Obstacles, X, Y, DY, -DX);
solve([0|T], Obstacles, X, Y, DX, DY) -> solve(T, Obstacles, X, Y, DX, DY);
solve([K|T], Obstacles, X, Y, DX, DY) -> 
    {NX, NY} = {X + DX, Y + DY},
    case sets:is_element({NX, NY}, Obstacles) of
        true -> solve(T, Obstacles, X, Y, DX, DY);
        false -> max(NX*NX + NY*NY, solve([K-1|T], Obstacles, NX, NY, DX, DY))
    end.
```