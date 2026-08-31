# Ruby solution: text about even and odd.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/divisor-game/solutions/765667/](https://leetcode.com/problems/divisor-game/solutions/765667/)

---

##### Leetcode: 1025. Divisor Game.

When n == 2 player wins, when n == 1 player lose.  
If player start with even number he always able to give odd number. But is there a way to pass odd number to opponent  from odd number?
Looks like there are no such way. Odd minus odd always even. And even + even always even as well. There is no way to have even that divide odd without reminder, and once player got odd value, opponent will got even number. And even number is eventually will be two. 


Ruby code:
```Ruby
# Leetcode: 1025. Divisor Game.
# https://leetcode.com/problems/divisor-game/
# Runtime: 48 ms, faster than 51.35% of Ruby online submissions for Divisor Game.
# Memory Usage: 9.6 MB, less than 25.00% of Ruby online submissions for Divisor Game.
# @param {Integer} n
# @return {Boolean}
def divisor_game(n)
    n%2 == 0
end
```