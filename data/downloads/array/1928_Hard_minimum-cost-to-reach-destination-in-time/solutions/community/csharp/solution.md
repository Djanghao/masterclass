# Use dijkstra algorithm

**Author:** remedydev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/5561008/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/5561008/)

---

# Approach
1. Sort PriorityQueue By cost if there is a tie then by time
2. Enqueue next adjustment city if thereis a faster path AND does not exceeding maxTime

# Complexity
- Time complexity:
$$O(nLogn)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int MinCost(int maxTime, int[][] edges, int[] passingFees)
    {
        int n = passingFees.Length;
        Dictionary<int, HashSet<(int city, int time)>> g = new();
        int finish = 0;
        foreach (var edge in edges)
        {
            int src = edge[0], dst = edge[1], w = edge[2];
            g[src] = g.ContainsKey(src) ? g[src] : new HashSet<(int city, int time)>();
            g[dst] = g.ContainsKey(dst) ? g[dst] : new HashSet<(int city, int time)>();

            g[src].Add((dst, w));
            g[dst].Add((src, w));
            finish = Math.Max(finish, dst);
        }

        // Sort By cost if there is a tie then by time
        PriorityQueue<int, (int time, int cost)> pq = new(Comparer<(int time, int cost)>.Create((a, b) => {
                            if (a.cost == b.cost)
                            {
                                return a.time.CompareTo(b.time);
                            }
                            return a.cost.CompareTo(b.cost);
                        }));

        pq.Enqueue(0, (0, passingFees[0]));
        var timePath = Enumerable.Repeat(int.MaxValue, passingFees.Length).ToArray();
        timePath[0] = 0;

        while (pq.TryDequeue(out var city, out var timeCost))
        {
            int feeToParent = timeCost.cost;
            int timeToParent = timeCost.time;

            if (city == n-1)
            {
                return feeToParent;
            }

            foreach (var edge in g[city])
            {
                int adjCity = edge.city, adjTime = edge.time;

                int timeToAdj = timeToParent + adjTime;
                int feeToAdj = feeToParent + passingFees[adjCity];

                // Add next adj if thereis a faster path AND does not exceeding maxTime
                if (timeToAdj <= maxTime && timeToAdj<timePath[adjCity])
                {
                    timePath[adjCity] = timeToAdj;
                    pq.Enqueue(adjCity, (timeToAdj, feeToAdj));
                }

            }
        }
        return -1;
    }

    
}
```