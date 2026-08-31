# Basic Practice: sort, partial sum, binary search | Python

**Author:** wxy0925
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3986989/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3986989/)

---

Strategy: sort + partial sum + binary search 

Key Obs: the health of a hero doesn't get reduced after defeating a monster.


Extension: how to solve this problem if we do not assume the above hypothesis?


```
class Solution:
    
    def maximumCoins(self, heroes: List[int], monsters: List[int], coins: List[int]) -> List[int]:
        
        m, n = len(monsters), len(heroes)
        
        powers_with_coins = sorted(zip(monsters, coins), key=lambda x: x[0])
        
        monster_powers = [x[0] for x in powers_with_coins]
        monster_coins = [x[1] for x in powers_with_coins]
        
        # partial sum
        for i in range(1, m):
            monster_coins[i] += monster_coins[i-1]
            
        res = [0] * n
        for i in range(n):
            idx = bisect.bisect_right(monster_powers, heroes[i])
            if idx > 0:
                res[i] = monster_coins[idx-1]
                
        return res
```
