# Elixir, O(1), game theory

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/nim-game/solutions/4180893/](https://leetcode.com/problems/nim-game/solutions/4180893/)

---

# Approach
Figure out test cases manually until you find a pattern. 

1 stone - you take the one stone in your first chance and win

2 stones - you take the two stones in your first chance and win

3 stones - you take the three stones in your first chance and win

4 stones - 
- you take one stone and the opponent takes all the three stones and wins
- you take two stones and the opponent takes the remaining two stones and wins
- you take three stones and the opponent takes the remaining one stone and wins

5 stones - you take one stone to make it 4 stones and this would resemble the previous game where there are 4 stones but the opponent is making the turn. So there is no chance for him to win.

6 stones - you take two stones to make it 4 stones and this would resemble the previous game where there are 4 stones and the opponent is making the turn. So there is no chance for him to win.

7 stones - you take three stones to make it 4 stones and this would resemble the previous game where there are 4 stones and the opponent is making the turn. So there is no chance for him to win.

8 stones - 
- you take one stone and the opponent takes 3 stones to make it the unwinnable 4 stone scenario
- you take two stones and the opponent takes 2 stones to make it the unwinnable 4 stone scenario
- you take three stones and the opponent takes 1 stone to make it the unwinnable 4 stone scenario

Hence you can see the pattern where if the number of stones are multiples of four, there is no chance for you to win.
1 2 3 4 5 6 7 8
W W W L W W W L

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec can_win_nim(n :: integer) :: boolean
  def can_win_nim(n), do: rem(n,4) != 0
end
```