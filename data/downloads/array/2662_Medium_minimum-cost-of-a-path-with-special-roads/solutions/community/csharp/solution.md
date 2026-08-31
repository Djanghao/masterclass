# [C#] version of Dijkstra algorithm

**Author:** Yerkon
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3475675/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3475675/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just implemented the idea of other [solution](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3468366/python3-dijkstra-s-algo/) with C# version + description

# Approach
<!-- Describe your approach to solving the problem. -->
- **Dictionary<(int x1, int y1), List<(int x2, int y2, int cost)>> map** - consist of positions from-to with cost.
- **var dist = new Dictionary<(int x, int y), int>()** - consist min distance for each (int x, int y) we have found from `x1, y1 and x2, y2` from special roads
- **var pq = new PriorityQueue<(int curDist, int x, int y), int>();** - if found min distance for `[x,y]`, store for next processing by min distance priority. As starting point for calculate min distance for other `[x1, y1, x2, y2]` special roads(nodes).

When current position is our target, we don't need to calculate distance for other nodes from this. Return this as answer. 
```
if (x == target[0] && y == target[1]) {
    return curDist;
}
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2logn)$$, where n - specialRoads size.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$, where n - specialRoads size + uniq (x,y) nodes.

# Code
```
public class Solution {
    public int MinimumCost(int[] start, int[] target, int[][] specialRoads) {
        var map = new Dictionary<(int x1, int y1), List<(int x2, int y2, int cost)>>() {
            [(target[0], target[1])] = new List<(int x, int y, int cost)>() { (0, 0, 0) }
        };

        foreach (var road in specialRoads) {
            int x1 = road[0], y1 = road[1], x2 = road[2], y2 = road[3], cost = road[4];
            map[(x1, y1)] = map.GetValueOrDefault((x1, y1), new List<(int x2, int y2, int cost)>());
            map[(x1, y1)].Add((x2, y2, cost));
        }

        var dist = new Dictionary<(int x, int y), int>();
        dist[(start[0], start[1])] = 0;

        var pq = new PriorityQueue<(int curDist, int x, int y), int>();
        pq.Enqueue((0, start[0], start[1]), 0);

        while (pq.Count > 0) {
            var (curDist, x, y) = pq.Dequeue();
            // Console.WriteLine(x + " " + y + " " + curDist);
            if (x == target[0] && y == target[1]) {
                return curDist;
            }

            foreach (var (x2, y2, cost) in map.GetValueOrDefault((x, y), new List<(int x2, int y2, int cost)>())) {
                int distanceX2Y2 = curDist + cost;
                if (distanceX2Y2 < dist.GetValueOrDefault((x2, y2), int.MaxValue)) {
                    dist[(x2, y2)] = distanceX2Y2;
                    pq.Enqueue((distanceX2Y2, x2, y2), distanceX2Y2);
                }
            }

            foreach ((int x1, int y1) in map.Keys) {
                int distanceX1Y1 = curDist + Math.Abs(x - x1) + Math.Abs(y - y1);
                // Console.WriteLine(x1 + " " + y1 + " : " + distanceX1Y1);
                if (dist.GetValueOrDefault((x1, y1), int.MaxValue) > distanceX1Y1) {
                    dist[(x1, y1)] = distanceX1Y1;
                    pq.Enqueue((distanceX1Y1, x1, y1), distanceX1Y1);
                }
            }
            // Console.WriteLine();
        }

        return Math.Abs(start[0] - target[0]) + Math.Abs(start[1] - target[1]);
    }
}


```