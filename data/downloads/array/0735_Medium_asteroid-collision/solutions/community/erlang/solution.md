# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/3929611/](https://leetcode.com/problems/asteroid-collision/solutions/3929611/)

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
-spec asteroid_collision(Asteroids :: [integer()]) -> [integer()].
asteroid_collision(Asteroids) ->
    lists:reverse(asteroid_collision(Asteroids, [])).

-spec asteroid_collision(Asteroids :: [integer()], Stack :: [integer()]) -> [integer()].
asteroid_collision([], Stack) ->
    Stack;
asteroid_collision([Asteroid|Rest], Stack) ->
    case Stack of
        [] ->
            asteroid_collision(Rest, [Asteroid]);
        [Top|_] when Top > 0, Asteroid < 0 ->
            if
                abs(Top) > abs(Asteroid) ->
                    asteroid_collision(Rest, Stack);
                abs(Top) < abs(Asteroid) ->
                    asteroid_collision([Asteroid|Rest], tl(Stack));
                true ->
                    asteroid_collision(Rest, tl(Stack))
            end;
        _ ->
            asteroid_collision(Rest, [Asteroid|Stack])
    end.
```