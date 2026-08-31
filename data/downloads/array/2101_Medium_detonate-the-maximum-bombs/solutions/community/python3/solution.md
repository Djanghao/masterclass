# Python BFS/DFS and why union-find is not the solution.

**Author:** lhy332
**Votes:** 17
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/2851600/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/2851600/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
My initial intuition was union-find because it seems to find out the maximum RANK of the largest group. After a few trial and error, I figured out that union-find is only for undirected graph. So, I decided to solve this problem with typical BFS, DFS, DFS-Recursive approach.  

[Example]
there are three points
point 1 is located at x=2 with radius 5
point 2 is located at x=5 with radius 1
point 3 is located at x=10 with radius 6

union-find approach will build those three points as a graph. (max rank = 3)
but, in this scenario, the max value is 2 because the point 2 cannot detonate any bomb.

# Approach
<!-- Describe your approach to solving the problem. -->
0. Building adjacency list
1. BFS with deque
2. DFS with stack
3. DFS with recursion
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(V + E)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(V)
# Code
```
class Solution:
    def maximumDetonation(self, bombs: List[List[int]]) -> int:

        def is_connected(a,b):
            x1, y1, r1 = bombs[a]
            x2, y2, r2 = bombs[b]
            dist = math.sqrt((x1-x2)**2 + (y1-y2)**2)
            return dist <= r1


        conn = collections.defaultdict(list)
        for i in range(len(bombs)):
            for j in range(len(bombs)):
                if i != j:
                    if is_connected(i,j):
                        conn[i].append(j)

        # 1. BFS
        # q = collections.deque()
        # maxCount = float('-inf')

        # for node in range(len(bombs)):
        #     if conn[node]:
        #         q.append(node)
        #         visited = set()
        #         visited.add(node)
        #         count = 0
        #         while q:
        #             curr = q.popleft()
        #             count+=1
        #             maxCount = max(maxCount, count)
        #             for child in conn[curr]:
        #                 if child not in visited:
        #                     visited.add(child)
        #                     q.append(child)

        # return maxCount if maxCount != float('-inf') else 1


        # 2. DFS

        # stack = []
        # maxCount = float('-inf')

        # for node in range(len(bombs)):
        #     if conn[node]:
        #         visited = set()
        #         stack.append(node)
        #         visited.add(node)
        #         count = 0
        #         while stack:

        #             curr = stack.pop()
        #             count+=1
        #             maxCount = max(maxCount, count)

        #             for child in conn[curr]:
        #                 if child not in visited:
        #                     visited.add(child)
        #                     stack.append(child)
        # return maxCount if maxCount != float('-inf') else 1


        # 3. DFS recursive                
                    
        def dfs(node):

            if node in visited:
                return 0

            visited.add(node)
            
            ans = 1

            if node in conn:
                for child in conn[node]:
                    if child in visited:
                        continue
                    ans += dfs(child)
            
            return ans 

        maxCount = 1
        for node in conn:
            visited = set()
            maxCount = max(maxCount, dfs(node))
        return maxCount
```