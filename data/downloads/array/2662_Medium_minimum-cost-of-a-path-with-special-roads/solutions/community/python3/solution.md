# ✔💯 DAY 396 | Dijkstra's |100% 0ms | [PYTHON/JAVA/C++] | EXPLAINED | Approach 🆙🆙🆙

**Author:** ManojKumarPatnaik
**Votes:** 36
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3470870/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3470870/)

---

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Intuition & Approach
The problem is to find the minimum cost to travel from the start point to the target point, given a set of special roads that can be used to reduce the cost of travel.

The approach is to first filter out the special roads that are not useful, i.e., the roads that have a cost greater than the distance between their endpoints. This is because such roads cannot be used to reduce the cost of travel.
Then uses Dijkstra's algorithm to find the shortest path from the start point to all other points in the graph, taking into account the special roads that were filtered in the previous step. The algorithm maintains a priority queue (heap) of nodes to visit, sorted by their distance from the start point. At each step, the algorithm visits the node with the smallest distance and updates the distances of its neighbors if a shorter path is found.
The distances are stored in a map, where the keys are pairs of coordinates (as lists) and the values are the distances. The map is initialized with the start point having a distance of 0.
After the distances are computed, the code computes the minimum cost to travel from the start point to the target point, taking into account the special roads. It does this by iterating over the filtered special roads and computing the cost of traveling from the start point to one endpoint of the road, then from the other endpoint of the road to the target point, and adding the cost of the road itself. The minimum of these costs is returned as the answer.
The intuition behind the approach is that by filtering out the useless special roads, the algorithm can focus on finding the shortest path using the useful special roads and the regular roads. By using Dijkstra's algorithm, the algorithm can efficiently find the shortest path from the start point to all other points in the graph. Finally, by computing the cost of traveling through the special roads separately, the algorithm can find the minimum cost to travel from the start point to the target point.


# Code
```java []
public int minimumCost(int[] start, int[] target, int[][] specialRoads) {
    // Step 1: Filter out useless special roads
    List<int[]> filteredRoads = new ArrayList<>();
    for (int[] road : specialRoads) {
        int a = road[0], b = road[1], c = road[2], d = road[3], cost = road[4];
        if (cost < Math.abs(a - c) + Math.abs(b - d)) {
            filteredRoads.add(new int[]{a, b, c, d, cost});
        }
    }

    // Step 2: Initialize distance map and priority queue
    Map<List<Integer>, Integer> dist = new HashMap<>();
    dist.put(Arrays.asList(start[0], start[1]), 0);
    PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
    heap.offer(new int[]{0, start[0], start[1]});

    // Step 3: Run Dijkstra's algorithm to find shortest path
    while (!heap.isEmpty()) {
        int[] curr = heap.poll();
        int currdist = curr[0], x = curr[1], y = curr[2];
        for (int[] road : filteredRoads) {
            int a = road[0], b = road[1], c = road[2], d = road[3], cost = road[4];
            if (dist.getOrDefault(Arrays.asList(c, d), Integer.MAX_VALUE) > currdist + Math.abs(x - a) + Math.abs(y - b) + cost) {
                dist.put(Arrays.asList(c, d), currdist + Math.abs(x - a) + Math.abs(y - b) + cost);
                heap.offer(new int[]{dist.get(Arrays.asList(c, d)), c, d});
            }
        }
    }

    // Step 4: Compute minimum cost to travel from start to target
    int res = Math.abs(target[0] - start[0]) + Math.abs(target[1] - start[1]);
    for (int[] road : filteredRoads) {
        int a = road[0], b = road[1], c = road[2], d = road[3], cost = road[4];
        res = Math.min(res, dist.getOrDefault(Arrays.asList(c, d), Integer.MAX_VALUE) + Math.abs(target[0] - c) + Math.abs(target[1] - d));
    }

    // Step 5: Return the minimum cost
    return res;
}
```
```python []
import heapq
def minimumCost(start, target, specialRoads):
    filteredRoads = []
    for road in specialRoads:
        a, b, c, d, cost = road
        if cost < abs(a - c) + abs(b - d):
            filteredRoads.append([a, b, c, d, cost])
    dist = {(start[0], start[1]): 0}
    heap = [(0, start[0], start[1])]
    while heap:
        currdist, x, y = heapq.heappop(heap)
        for road in filteredRoads:
            a, b, c, d, cost = road
            if dist.get((c, d), float('inf')) > currdist + abs(x - a) + abs(y - b) + cost:
                dist[(c, d)] = currdist + abs(x - a) + abs(y - b) + cost
                heapq.heappush(heap, (dist[(c, d)], c, d))
    res = abs(target[0] - start[0]) + abs(target[1] - start[1])
    for road in filteredRoads:
        a, b, c, d, cost = road
        res = min(res, dist.get((c, d), float('inf')) + abs(target[0] - c) + abs(target[1] - d))
    return res
```

you can refer c++ solution [here](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3471212/dijkstras-map-based-solution-map-every-end-pt-of-spl-road/) @credits to bala



# Complexity
TC: O(N log N), where N is the total number of vertices in the graph. This is because the code uses Dijkstra's algorithm, which has a time complexity of O(N log N) when implemented using a priority queue. The filtering of useless special roads takes O(M) time, where M is the number of special roads, but since M is at most N^2, this can be considered negligible compared to the time complexity of Dijkstra's algorithm.
SC: O(N), where N is the total number of vertices in the graph. This is because the code uses a map to store the distances of each vertex from the start vertex, and the map can have at most N entries. The priority queue used in Dijkstra's algorithm can also have at most N entries. The space used by the filtered special roads and other variables is negligible compared to the space used by the map and priority queue.
Overall, the time and space complexity of the given code are reasonable and efficient for the problem size.


# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A