# C# Solution for Bus Routes Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4278936/](https://leetcode.com/problems/bus-routes/solutions/4278936/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuiton is using BFS to explore the possible bus routes from the source stop to the target stop.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Create a dictionary to map stops to the bus routes that pass through them.
2.	Use BFS to traverse the bus routes, starting from the source stop.
3.	Keep track of visited stops and visited routes to avoid redundant exploration.
4.	Continue the BFS until reaching the target stop, and return the number of buses taken.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Let N be the total number of stops and M be the total number of bus routes. The time complexity is O(N + M), where  accounts for building the stop-to-route mapping, and  represents the BFS traversal. In the worst case, each stop and route are processed once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(N + M), where N is the space required for the stop-to-route mapping (using a dictionary), and M is the space needed for the BFS queue, visited stops (using a HashSet), and visited routes (using a HashSet). In the worst case, all stops and routes are stored in the data structures.

# Code
```
public class Solution {
    public int NumBusesToDestination(int[][] routes, int source, int target) {
        if (source == target) return 0;

        Dictionary<int, List<int>> stopToRoutes = new Dictionary<int, List<int>>();

        for (int i = 0; i < routes.Length; i++) {
            foreach (int stop in routes[i]) {
                if (!stopToRoutes.ContainsKey(stop)) {
                    stopToRoutes[stop] = new List<int>();
                }
                stopToRoutes[stop].Add(i);
            }
        }

        Queue<int> queue = new Queue<int>();
        HashSet<int> visitedStops = new HashSet<int>();
        HashSet<int> visitedRoutes = new HashSet<int>();

        queue.Enqueue(source);
        visitedStops.Add(source);

        int buses = 0;

        while (queue.Count > 0) {
            int stopsAtThisLevel = queue.Count;

            for (int i = 0; i < stopsAtThisLevel; i++) {
                int currentStop = queue.Dequeue();

                List<int> busesAtStop = stopToRoutes.ContainsKey(currentStop) ? stopToRoutes[currentStop] : new List<int>();

                foreach (int bus in busesAtStop) {
                    if (visitedRoutes.Contains(bus)) continue;

                    visitedRoutes.Add(bus);

                    foreach (int nextStop in routes[bus]) {
                        if (visitedStops.Contains(nextStop)) continue;

                        visitedStops.Add(nextStop);

                        if (nextStop == target) return buses + 1;

                        queue.Enqueue(nextStop);
                    }
                }
            }

            buses++;
        }

        return -1;
    }
}
```