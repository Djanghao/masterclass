# 🔥[Python] DFS, BFS || Complexity analysis || Video explanation

**Author:** Emma-Huang
**Votes:** 118
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/3290210/](https://leetcode.com/problems/water-and-jug-problem/solutions/3290210/)

---

# Approach
- Keep tracking the total water of two jugs, ```total```
- Four potiential operations:  ```+jug1Capacity ```,  ```-jug1Capacity ```,  ```+jug2Capacity ```,  ```-jug2Capacity ```
- Use either DFS or BFS to search for ```total == targetCapacity ```
    - Creat ```set``` to track all ```seen``` total to avoid repeat
    - if ```total == targetCapacity ```, return ```True```
    - if ```total``` in seen, or ```total < 0 ``` or ```total > jug1Capacity + jug2Capacity  ``` => return ```False```
    - Move to next step: ```total```+```jug1Capacity```, or ```total```-```jug1Capacity```, or ```total```+```jug2Capacity```, or ```total```-```jug2Capacity```

# Complexity
- Time complexity: $$O(jug1Capacity*jug2Capacity)$$

- Space complexity: $$O(jug1Capacity+jug2Capacity)$$

# Video explanation
https://www.youtube.com/watch?v=0BgaoIN1VUQ&t=7s

# Solution 1: DFS
```
class Solution:
    def canMeasureWater(self, jug1Capacity: int, jug2Capacity: int, targetCapacity: int) -> bool:

        seen = set()

        def dfs(tot):
            if tot == targetCapacity:
                return True
            if tot in seen or tot < 0 or tot > jug1Capacity + jug2Capacity:
                return False
            
            seen.add(tot)

            return dfs(tot+jug1Capacity) or dfs(tot-jug1Capacity) or dfs(tot+jug2Capacity) or dfs(tot-jug2Capacity)
        
        return dfs(0)
```

# Solution 2: BFS
```
class Solution:
    def canMeasureWater(self, jug1Capacity: int, jug2Capacity: int, targetCapacity: int) -> bool:
        
        q = deque([0])
        seen = set()
        steps = [jug1Capacity, -jug1Capacity, jug2Capacity, -jug2Capacity]

        while q:
            cur = q.popleft()
            for step in steps:
                tot = cur + step 
                if tot == targetCapacity:
                    return True
                if tot not in seen and 0 <= tot <= jug1Capacity + jug2Capacity:
                    seen.add(tot)
                    q.append(tot)
        return False
```        

# \uD83D\uDC4DPlease UPVOTE if you find it helpful. Thanks :)



    





        

        

```