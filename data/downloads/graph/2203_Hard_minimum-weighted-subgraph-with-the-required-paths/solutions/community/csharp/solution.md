# C# Dijkstra Solution CSharp

**Author:** LCDT
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/2396999/](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/2396999/)

---

ans = Min(dij(src1)[node[i]] + dij(src2)[node[i]] + dij(reverse the directed graph)(dest)[node[i]]);   i : 0 -> n-1
the node[i] should include themselves (src1, src2, dest)
the minimum weight from a node to itself is 0 
```
public class Solution {
    public long MinimumWeight(int n, int[][] edges, int src1, int src2, int dest) {
        Dictionary<int, List<(int, int)>> map = new();
        Dictionary<int, List<(int, int)>> reverse = new();
        for(int i = 0; i < edges.Length; i++){
            if(map.ContainsKey(edges[i][0])){
                map[edges[i][0]].Add((edges[i][1], edges[i][2]));
            }else{
                map.Add(edges[i][0], new List<(int, int)>{ (edges[i][1], edges[i][2]) });
            }
            if(reverse.ContainsKey(edges[i][1])){
                reverse[edges[i][1]].Add((edges[i][0], edges[i][2]));
            }else{
                reverse.Add(edges[i][1], new List<(int, int)>{ (edges[i][0], edges[i][2]) });
            }
        }        
        var s1 = GetMinWeights(n, src1, map);
        var s2 = GetMinWeights(n, src2, map);
        var d1 = GetMinWeights(n, dest, reverse);
        long ans = long.MaxValue;
        for(int i = 0; i < n; i++){
            if(s1[i] != long.MaxValue && s2[i] != long.MaxValue && d1[i] != long.MaxValue){
                ans = Math.Min(ans, s1[i] + s2[i] + d1[i]);
            }
        }
        return ans == long.MaxValue ? -1 : ans;
    }
    
    public Dictionary<int, long> GetMinWeights(int n, int newPoint, Dictionary<int, List<(int, int)>> map){
        Dictionary<int, long> dij = new();
        for(int i = 0; i < n; i++){
            dij.Add(i, long.MaxValue);
        }
        dij[newPoint] = 0;
        ISet<int> visited = new HashSet<int>{ newPoint };
        PriorityQueue<int, long> priorityQueue = new();
        while(visited.Count != n){
            if(map.ContainsKey(newPoint)){
                foreach(var next in map[newPoint]){
                    if(visited.Contains(next.Item1)){
                        continue;
                    }
                    long valueF = next.Item2 + dij[newPoint];
                    priorityQueue.Enqueue(next.Item1, valueF);
                    dij[next.Item1] = Math.Min(dij[next.Item1], valueF);
                }    
            }     
            int point = -1;
            while(priorityQueue.Count > 0){
                int nextMin = priorityQueue.Dequeue();
                if(!visited.Contains(nextMin)){
                    point = nextMin;
                    break;
                }
            }
            if(point == -1){
                break;
            }
            visited.Add(point);
            newPoint = point;
        }        
        return dij;
    }
}
```