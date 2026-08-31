# Easy Python3 solution

**Author:** sengoku
**Votes:** 21
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/404174/](https://leetcode.com/problems/dungeon-game/solutions/404174/)

---

Not pretending for unique solution, but I hope that my code will be easy to understand.

The main idea is that we go reversed and compare ``max(1, min(previous_cells_values))``. That's the key. 

Why do we compare max with 1? Because we don't need extra 30 hp, only 1 to be alive.


```
class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        
        rows, columns = len(dungeon), len(dungeon[0])
        hp = [[0]*columns for i in range(rows)]
        
        
        # We will start at endpoint:
        hp[-1][-1] = max(1, 1-dungeon[-1][-1]) # in example we will need 6 HP to cover -5 loss
        
        # Completing the border lines. Excluding endpoint everywhere
        for i in range(rows-2, -1,-1):
            hp[i][-1] = max(1, 
                            hp[i+1][-1] - dungeon[i][-1])  
        for j in range(columns-2, -1, -1): 
            hp[-1][j] = max(1, 
                            hp[-1][j+1] - dungeon[-1][j])
        
        # print(hp) to see our HealthPoint table
        
		
        # Next we complete the remaining table
        for i in range(rows-2, -1, -1):
            for j in range(columns-2, -1, -1):                
                hp[i][j] = max(1, min(hp[i+1][j] - dungeon[i][j], 
                                      hp[i][j+1] - dungeon[i][j]) )
        
        return hp[0][0]
```

Runtime: 80 ms, faster than 89.23% of Python3 online submissions for Dungeon Game.
Memory Usage: 15 MB, less than 11.11% of Python3 online submissions for Dungeon Game.