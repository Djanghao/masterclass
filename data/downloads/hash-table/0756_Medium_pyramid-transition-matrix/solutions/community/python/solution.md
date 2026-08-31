# Most simple python solution with comments

**Author:** jeffyboi
**Votes:** 2
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/2288127/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/2288127/)

---

First implemented simple DFS approach but TLE. So the second version, add simple memoization of the rows when they are all filled, and do not visit them again.

First Solution TLE
```
class Solution(object):
    def pyramidTransition(self, bottom, allowed):
        """
        :type bottom: str
        :type allowed: List[str]
        :rtype: bool    
        """
        dic = defaultdict(list)
        for i in allowed:
            dic[(i[0], i[1])].append(i[2])
        
        res = []
        
        def dfs(arr, nxt):
            #base case second floor and check top exists
            if len(arr) == 2 and dic[(arr[0], arr[1])]:
                return True
            
            #go to the next row now
            if len(arr) == len(nxt) + 1:
                return dfs(nxt, [])

            #keep iterating the same row
            if dic[(arr[len(nxt)], arr[len(nxt) + 1])]:
                for val in dic[(arr[len(nxt)], arr[len(nxt) + 1])]:
                    if dfs(arr, nxt + [val]):
                        return True
            return False
        
        return dfs(bottom, [])
```
Second Solution passes 
```
class Solution(object):
    def pyramidTransition(self, bottom, allowed):
        """
        :type bottom: str
        :type allowed: List[str]
        :rtype: bool
        """
        dic = defaultdict(list)
        for i in allowed:
            dic[(i[0], i[1])].append(i[2])
        
        res = []
        visited = set()
        def dfs(arr, nxt):
            #base case second floor and check top exists
            if len(arr) == 2 and dic[(arr[0], arr[1])]:
                return True
            
            #go to the next row now
            if len(arr) == len(nxt) + 1:
                if tuple(nxt) in visited:
                    return False
                visited.add(tuple(nxt))
                return dfs(nxt, [])

            #keep iterating the same row
            if dic[(arr[len(nxt)], arr[len(nxt) + 1])]:
                for val in dic[(arr[len(nxt)], arr[len(nxt) + 1])]:
                    if dfs(arr, nxt + [val]):
                        return True
            return False
        
        return dfs(bottom, [])

```

