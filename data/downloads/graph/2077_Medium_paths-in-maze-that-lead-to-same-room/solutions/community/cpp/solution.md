# Python3 Solution Using DFS, but with early termination, and lexicographic invariant to dedupe cycles

**Author:** 2018hsridhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/6049380/](https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/6049380/)

---

# Intuition
URL := https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/description/
2077. Paths in Maze That Lead to Same Room

'''
Make for a DFS with always increasing order, but stop it at a given level ( l = 2 )
At l = 2, ask if you have a path to root node
If yes - boom a cycle. 
Elif no - not a unique cycle
'''

# Code
```python3 []
class Solution:
    def numberOfPaths(self, n: int, corridors: List[List[int]]) -> int:
        adjList = self.makeAdjList(n,corridors)
        confusionScore = 0
        for rootNode in range(1,n+1):
            startLevel = 0
            visited = set()
            confusionScore += self.dfs(rootNode,rootNode,adjList,visited,startLevel)
        return confusionScore

    def dfs(self, root:int, parent:int,adjList:dict,visited:set,level:int) -> int:
        numCycles = 0
        visited.add(parent)
        children = adjList[parent]
        if(level == 2 and root in children and root in visited):
            numCycles += 1
        elif(level < 2):
            for child in children:
                if(child > parent and child not in visited):
                    numCycles += self.dfs(root,child,adjList,visited,level + 1)
        visited.remove(parent)
        return numCycles
        
    def makeAdjList(self, n:int, corridors: List[List[int]]) -> dict:
        adjList = dict()
        for node in range(1,n+1,1):
            adjList[node] = set()
        for [src,dst] in corridors:
            adjList[src].add(dst)
            adjList[dst].add(src)
        return adjList
```