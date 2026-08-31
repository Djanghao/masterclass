# explained Python solution || Dijkstra's Algorithm😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 9
**Link:** [https://leetcode.com/problems/modify-graph-edge-weights/solutions/5709435/](https://leetcode.com/problems/modify-graph-edge-weights/solutions/5709435/)

---


# if it's help, please up \u2B06 vote! \u2764\uFE0F

###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam


# Code
```python []
import heapq

class Solution:
    INF = int(2e9)  # Constant representing infinity for unbounded edges
    def dijkstra(self, n, source, destination, adj):
        distance = [float('inf')] * n  # Initialize distances to all nodes as infinity
        distance[source] = 0  # Distance from source to itself is 0
        pq = []  # Min-heap priority queue for nodes

        heapq.heappush(pq, (0, source))  # Push the source node into the queue

        while pq:
            cost, node = heapq.heappop(pq)  # Get the node with the smallest distance

            # If we've reached the destination, we can stop the search
            if node == destination:
                break

            # Explore all adjacent nodes of the current node
            for ccost, cnode in adj[node]:
                # If a shorter path to the adjacent node is found
                if cost + ccost < distance[cnode]:
                    distance[cnode] = cost + ccost  # Update the distance
                    heapq.heappush(pq, (distance[cnode], cnode))  # Add the updated distance to the queue

        return distance[destination]  # Return the shortest distance to the destination

    def modifiedGraphEdges(self, n, edges, source, destination, target):
        adj = [[] for _ in range(n)]  # Adjacency list representation of the graph

        # Construct the adjacency list, ignoring edges with a cost of -1
        for e in edges:
            if e[2] == -1:
                continue  # Skip edges with unknown cost
            adj[e[0]].append((e[2], e[1]))  # Add edge to the adjacency list
            adj[e[1]].append((e[2], e[0]))  # Undirected graph: add both directions

        # Get the shortest distance from source to destination using Dijkstra's algorithm
        sortedDistance = self.dijkstra(n, source, destination, adj)

        # If the shortest distance is less than the target, return an empty list
        if sortedDistance < target:
            return []

        isEqual = sortedDistance == target  # Check if current distance equals target

        # Modify edges with cost of -1 to find a valid configuration
        for e in edges:
            if e[2] != -1:
                continue  # Skip edges with a known cost
            
            # Set a temporary cost for the edge
            e[2] = self.INF if isEqual else 1  # If distances equal target, set to infinity; otherwise, set to 1
            adj[e[0]].append((e[2], e[1]))  # Add modified edge to adjacency list
            adj[e[1]].append((e[2], e[0]))  # Add reverse edge

            # If the shortest path is not equal to the target
            if not isEqual:
                # Calculate the new shortest path with the modified edge
                newSortedPath = self.dijkstra(n, source, destination, adj)
                # If the new path is less than or equal to the target, adjust the edge cost
                if newSortedPath <= target:
                    isEqual = True  # Mark that we have found a valid path
                    e[2] += target - newSortedPath  # Adjust the edge cost to reach the target

        # If a valid configuration is found, return the modified edges
        if isEqual:
            return edges
        return []  # If no valid configuration is found, return an empty list
```