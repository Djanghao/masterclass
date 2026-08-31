# Python BFS, Dijkstra's, A* - Commented and Explained - Long Post

**Author:** CompileTimeError
**Votes:** 15
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/2502449/](https://leetcode.com/problems/the-maze-ii/solutions/2502449/)

---

**1. BFS Intuition**

- BFS approach is fairly straightforward. For every point, we look at next possible points and also keep track distance we've taken to that point.
- Then we apply BFS on all those new points. We keep in mind that if we've previously reached a point with a shorter distance, there is no need to BFS further from that point.
- When we finish traversing through the entire space, we return the min dist to our destination.

**Solution**
```
class Solution:
    def shortestDistance(self, maze: List[List[int]], start: List[int], destination: List[int]) -> int:
        m, n = len(maze), len(maze[0])
        
        directions = [(0, 1), (0, -1), (-1, 0), (1, 0)]
        
        visited = {}
        
        start, destination = tuple(start), tuple(destination)
		
        q = deque([(0, start)])
        
        while q:
            q_len = len(q)
            for _ in range(q_len):
                dist, coordinate = q.popleft()
                        
                if coordinate in visited and visited[coordinate] <= dist:
                    # we can reach this location with lower
                    # distance count
                    continue
                
                visited[coordinate] = dist
                
                # go all four directions
                for direction in directions:
                    i, j = coordinate
                    new_dist = 0
                    
                    # keep going until we hit a wall
                    while (0 <= i + direction[0] < m and
                           0 <= j + direction[1] < n and
                           maze[i + direction[0]][j + direction[1]] == 0):
                        i += direction[0]
                        j += direction[1]
                        new_dist += 1
                    
                    q.append((new_dist + dist, (i, j)))
        
        if destination in visited:
            return visited[destination]
        else:
            return -1
```

**2. Dijkstra Intuition**

- Dijkstra's algorithm is an extension of BFS where instead of using a queue, we use a priority queue
- Instead of blindly choosing our next point for BFS, we select the closest next point. This is what makes Dijkstra's a greedy graph algorithm
- It doesn't take too much to change our previous implementation to Dijkstra's:

**Solution**
```
import heapq

class Solution:
    def shortestDistance(self, maze: List[List[int]], start: List[int], destination: List[int]) -> int:        
        m, n = len(maze), len(maze[0])
        
        directions = [(0, 1), (0, -1), (-1, 0), (1, 0)]
        
        start, destination = tuple(start), tuple(destination)
        
        visited = set()
        
        heap = [(0, start)]
        
        while heap:
            dist, coordinate = heapq.heappop(heap)
            
            if coordinate == destination:
                # we reached our destination, return the distance
                # directly since Dijkstra's algorithm guarantees
                # nodes appearing in shortest distance ordering.
                return dist
            
            if coordinate in visited:
                # we've previously reached this location
                # with Dijkstra's, it is guaranteed that we
                # found a shorter distance to the location previously
                continue
            
            visited.add(coordinate)

            # go all four directions
            for direction in directions:
                i, j = coordinate
                new_dist = 0

                # keep going until we hit a wall
                while (0 <= i + direction[0] < m and
                       0 <= j + direction[1] < n and
                       maze[i + direction[0]][j + direction[1]] == 0):
                    i += direction[0]
                    j += direction[1]
                    new_dist += 1

                heapq.heappush(heap, (new_dist + dist, (i, j)))
        
        # we weren't able to reach our destination
        return -1
```

**3. A\\* Search Intuition**

- Instead of blindly using the next closest point during BFS, we want to head in the general direction of our destination.
- This is where A* shines (it finds the shortest path from start to a single destination). Dijkstra's shines when we need to find the shortest path**S** to all possible destination**S**.
- We apply a heuristic to our heap ordering (i.e. how close are we to our destination) and combine it with the next closest point into a composite "score"
- For this particular problem, we can only move up/down/left/right. So we will use the "manhattan distance" as our A* heuristic. Other heuristics exist (e.g. euclidean distance) as an FYI.

**Solution**
```
import heapq

class Solution:
    
    def distance(self, a: Tuple[int], b: Tuple[int]) -> int:
        """
        Returns the distance it takes to travel from point 'a' to 'b'.
        
        Since we can only go up/down/left/right, we will use the
        Manhattan distance as our A* search heuristic.
        """
        return abs(a[0] - b[0]) + abs(a[1] - b[1])
    
    
    def shortestDistance(self, maze: List[List[int]], start: List[int], destination: List[int]) -> int:        
        m, n = len(maze), len(maze[0])
        
        directions = [(0, 1), (0, -1), (-1, 0), (1, 0)]
        
        start, dest = tuple(start), tuple(destination)
        
        visited = set()
        
        heap = [(self.distance(start, dest), 0, start)]
        
        while heap:
            _, dist, coordinate = heapq.heappop(heap)
            
            if coordinate == dest:
                return dist
            
            if coordinate in visited:
                continue
            
            visited.add(coordinate)

            # go all four directions
            for direction in directions:
                i, j = coordinate
                new_dist = 0

                # keep going until we hit a wall
                while (0 <= i + direction[0] < m and
                       0 <= j + direction[1] < n and
                       maze[i + direction[0]][j + direction[1]] == 0):
                    i += direction[0]
                    j += direction[1]
                    new_dist += 1

                next_dist = new_dist + dist
                    
                # add a heuristic (i.e. how far we are from the
                # destination) to heap ordering. This is a composite
                # score of dist to dest and next_dist.
                heuristic = self.distance((i, j), dest) + next_dist
                    
                heapq.heappush(heap, (heuristic, new_dist + dist, (i, j)))
        
        # we weren't able to reach our destination
        return -1
```

**Complexity Analysis**

- Time `O(m * n * max(m, n))` - worst case we traverse to every cell in the maze. At every cell, worst case we traverse the entire length of a maze to our next point.
- Space `O(m * n)` - worst case we store every cell in the maze
- Thanks `@gto` for helping out with getting the complexity analysis right! 


Thanks for sticking around until the end of this post. Hope you enjoyed our walkthrough from BFS -> Dijkstra's -> A* !