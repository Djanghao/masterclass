# c# : Easy Solution

**Author:** rahul89798
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2848046/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2848046/)

---


    public class Solution
    {
        long cost;
        public long MinimumFuelCost(int[][] roads, int seats)
        {
            if(roads.GetLength(0) == 0)
                return 0;
                
            cost = 0;
            var graph = new Dictionary<int, List<int>>();

            foreach (var road in roads)
            {
                if (!graph.ContainsKey(road[0]))
                    graph[road[0]] = new List<int>();

                if (!graph.ContainsKey(road[1]))
                    graph[road[1]] = new List<int>();

                graph[road[0]].Add(road[1]);
                graph[road[1]].Add(road[0]);
            }

            DFS(graph, 0, 0, seats);
            return cost;
        }

        private int DFS(Dictionary<int, List<int>> graph, int prev, int city, int seat)
        {
            int rep = 1;
            foreach(var neighbour in graph[city]) {
                if(neighbour != prev)
                    rep += DFS(graph, city, neighbour, seat);
            }

            if(city != 0)
                cost += (rep / seat) + (rep % seat > 0 ? 1 : 0);
            
            return rep;
        }
    }