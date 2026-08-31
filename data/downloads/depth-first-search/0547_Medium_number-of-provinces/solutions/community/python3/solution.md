# Python DFS solution with explanation, beats 97%

**Author:** user8307e
**Votes:** 48
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/470456/](https://leetcode.com/problems/number-of-provinces/solutions/470456/)

---

In this problem, I first construct a graph with each person as a node and build an edge between two nodes if those two people know each other (they are direct friends). Since the matrix is symmetric, I do not have to read all the values in the matrix but only half of them.

```
class Solution:
    def findCircleNum(self, M: List[List[int]]) -> int:
        
        graph = collections.defaultdict(list)
        
        if not M:
            return 0
        
        n = len(M)
        for i in range(n):
            for j in range(i+1,n):
                if M[i][j]==1:
                    graph[i].append(j)
                    graph[j].append(i)
        
        visit = [False]*n
        
        def dfs(u):
            for v in graph[u]:
                if visit[v] == False:
                    visit[v] = True
                    dfs(v)
        
        count = 0
        for i in range(n):
            if visit[i] == False:
                count += 1
                visit[i] = True
                dfs(i)
        
        return count
```
Time Complexity: O(n^2). O(n^2) to construct the graph and O(n) to run DFS, so the total is O(n^2).
Space Complexity: O(n^2) for the worst case. O(n^2) to store the graph dictionary, if all the nodes are connected, the space is O(n^2). O(n) to store visit list. The space complexity of DFS is the depth of the recursion which is no more than O(n).

Similar solution without constructing the graph:
```
# time: O(n^2)
# space: O(n) to store visit list

class Solution:
    def findCircleNum(self, M: List[List[int]]) -> int:
       
        if not M:
            return 0
        
        n = len(M)
        visit = [False]*n
        
        def dfs(u):
            for v in range(n):
                if M[u][v] ==1 and visit[v] == False:
                    visit[v] = True
                    dfs(v)
        
        count = 0
        for i in range(n):
            if visit[i] == False:
                count += 1
                visit[i] = True
                dfs(i)
        
        return count
```