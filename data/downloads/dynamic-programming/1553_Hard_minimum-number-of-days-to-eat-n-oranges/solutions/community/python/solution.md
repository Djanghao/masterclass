# BFS with explanation

**Author:** ashu1510
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/794172/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/794172/)

---

If you are thinking of a dp solution then check the constraints again you cant't initialize a dp array of size 10^9.
So, best way of solving this question is using bfs.
Visualize the problem as  a graph with the first node being n and its adjecent node will be the numbers we can reach from this current number (i.e n//2,n//3,n-1) so find the minimum path from n to 0 using bfs.
```
class Solution(object):
    def minDays(self, n):
        """
        :type n: int
        :rtype: int
        """
        q=deque()
        q.append(n)
        steps=0
        visited=set()
        
        while(len(q)):
            l=len(q)
            steps+=1
            for _ in range(l):
                x=q.popleft()
                if x%3==0 and x//3 not in visited:
                    q.append(x//3)
                    visited.add(x//3)
                if x%2==0 and x//2 not in visited:
                    visited.add(x//2)
                    q.append(x//2)
                if x-1 not in visited:
                    visited.add(x-1)
                    q.append(x-1)
                if x-1==0:
                    return steps
        
                
            
