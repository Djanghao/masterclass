# Dijkstra's Algorithm - Template - List of Problems

**Author:** letsdoitthistime
**Votes:** 52
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/2310813/](https://leetcode.com/problems/network-delay-time/solutions/2310813/)

---

Dijlstra's Algorithm

**743. Network Delay Time**

```
/*
Step 1: Create a Map of start and end nodes with weight
        1 -> {2,1},{3,2}
        2 -> {4,4},{5,5}
        3 -> {5,3}
        4 ->
        5 ->

Step 2: create a result array where we will keep track the minimum distance to rech end of the node from start node

Step 3: Create a Queue and add starting position with it's weight and add it's reachable distance with increament of own't weight plus a weight require to reach at the end node from start node.
        We keep adding and removing pairs from queue and updating result array as well.

Step 4: find the maximum value from result array:

*/

class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        
        //Step 1
        Map<Integer, Map<Integer, Integer>> map = new HashMap<>();
        
        for(int[] time : times) {
            int start = time[0];
            int end = time[1];
            int weight = time[2];
            
            map.putIfAbsent(start, new HashMap<>());
            map.get(start).put(end, weight);
        }
        
         // Step 2
        int[] dis = new int[n+1];
        Arrays.fill(dis, Integer.MAX_VALUE);
        dis[k] = 0;
        
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{k,0});
        
        //Step 3:
        while(!queue.isEmpty()) {
            int[] cur = queue.poll();
            int curNode = cur[0];
            int curWeight = cur[1];
            
            for(int next : map.getOrDefault(curNode, new HashMap<>()).keySet()) {
                int nextweight = map.get(curNode).get(next);
                
                if(curWeight + nextweight < dis[next]) {
                    dis[next] = curWeight + nextweight;
                    queue.add(new int[]{next, curWeight + nextweight});
                }
            }
        }
        
        //Step 4:
        int res = 0;
        for(int i=1; i<=n; i++) {
            if(dis[i] > res) {
                res = Math.max(res, dis[i]);
            } 
        }
        
        return res == Integer.MAX_VALUE ? -1 : res;
    }
}

```

**1514. Path with Maximum Probability**

```
class Solution {
    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {
        Map<Integer, Map<Integer, Double>> map = new HashMap<>();
        
        for(int i=0; i<edges.length; i++){
            map.putIfAbsent(edges[i][0], new HashMap<>());
            map.putIfAbsent(edges[i][1], new HashMap<>());
            map.get(edges[i][0]).put(edges[i][1], succProb[i]);
            map.get(edges[i][1]).put(edges[i][0], succProb[i]);
        }
        
        Set<Integer> visited = new HashSet<>();
        
        PriorityQueue<double[]> queue = new PriorityQueue<double[]>((a, b) -> new Double(b[1]).compareTo(new Double(a[1])));
        queue.add(new double[]{start, 1.0});
        
        while(!queue.isEmpty()) {
            double[] cur = queue.poll();
            
            int curNode = (int)cur[0];
            double curWeight = cur[1];
            
            if(curNode == end) {
                return curWeight;
            }
            
            if(!visited.contains(curNode)) {
                visited.add(curNode);
                
                for(Map.Entry<Integer, Double> next: map.getOrDefault(curNode, new HashMap<>()).entrySet()) {
                    int nKey = next.getKey();
                    double nextWeight = next.getValue();
                    
                    queue.add(new double[]{nKey, curWeight * nextWeight});
                }
            }
        }
        return 0;
    }
}
```

**787. Cheapest Flights Within K Stops**

```
/*
It's same as Dijkstra algorithm to calculate distance btween two nodes when we have weights. I use BFS approach. 

For Example:            4
                    (1) |
                        |   (4)
                        0--------1               In this Example if my src is 0 and destination is 3 and K = 2
                        |        |                     then the total cost of ticket is 4: (0->2->3)
                    (2) |        | (5)
                        |        |
                        2--------3
                            (2)

Step 1: Create an adjacency list from given Matrix
                0-> [(4,1) -> (1,4) -> (2,2)]
                1-> [(3,5)]
                2-> [(3,2)]
                3-> [(1,5)]
                4-> []

Step 2: Sort Every int[] arr ({nextDestination, totalCostToReachThatDestination, K-1}) based on cost.
        So Low cost will be at the starting of the PQ. It's min PQ


Step 3: Get Node int[] from PQ and get it's sub next destination places and put back to the Queue to sort based on cost.Once u get destination return cost. 
*/

class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        Map<Integer, List<int[]>> map = new HashMap<>();
        
        //Step 1:
        for(int[] flight : flights) {
            map.putIfAbsent(flight[0], new ArrayList<>());
            map.get(flight[0]).add(new int[]{flight[1], flight[2]});
        }
        
        Map<Integer, Integer> visited = new HashMap<>(); // This is extra step to avoid TLE
        
        // Step 2:
        PriorityQueue<int[]> queue = new PriorityQueue<>((a,b) -> (a[1]-b[1]));
        queue.add(new int[]{src, 0, k});
        
        
        // Step 3:
        while(!queue.isEmpty()) {
            int[] cur = queue.poll();
            
            int curNode = cur[0];
            int curPrice = cur[1];
            int remainingStop = cur[2];
            
            if(curNode == dst) {
                return curPrice;
            }
            
            visited.put(curNode, remainingStop);   // To avoid TLE
            
            if(remainingStop >= 0 ) {
                for(int[] temp : map.getOrDefault(curNode, new ArrayList<>())) { 
                    if(!visited.containsKey(temp[0]) || remainingStop > visited.get(temp[0]))  // This condition is to avoid TLE otherwise we add in PQ
                    {
                        queue.add(new int[]{temp[0], temp[1]+curPrice, remainingStop-1});
                    }
                }
            }
        }
        return -1;
    }
}
```

**1584. Min Cost to Connect All Points**

```
// This problem is to create MST from so we use Prim's Algorithm. Prims Algo is almost similar to Dijkstra's Algo

class Solution {
    public int minCostConnectPoints(int[][] points) {
        PriorityQueue<int[]> queue = new PriorityQueue<>((a,b) -> a[2] - b[2]);
        queue.add(new int[]{0,0,0});
        
        Set<Integer> visited = new HashSet();
        
        int cost = 0;
        int len = points.length;
        
        while(!queue.isEmpty() && visited.size()<len) {
            int[] pq = queue.poll();
            int curNode = pq[0];
            int endNode = pq[1];
            int curCost = pq[2];
            
            if(visited.contains(endNode)) {
                continue;
            }
            cost = cost + curCost;
            
            visited.add(endNode);
            
            for(int i=0; i<len; i++) {
                if(!visited.contains(i)) {
                    queue.add(new int[]{endNode, i, distance(points, endNode, i)});
                }
            }
        }
        
        return cost;
        
    }
    
    private int distance(int[][] points, int i, int j) {
        return Math.abs(points[i][0]-points[j][0]) + Math.abs(points[i][1] - points[j][1]);
    }
}
```

**778. Swim in Rising Water**

```
class Solution {
    public int swimInWater(int[][] grid) {
        int result = 0;
        int m = grid.length;
        int n = grid[0].length;

        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a,b) -> a[0] - b[0]);
        minHeap.add(new int[]{grid[0][0],0,0});

        boolean[][] visited = new boolean[m][n];
        visited[0][0] = true;

        int[][] dirs = {{0,-1}, {0,1}, {1,0}, {-1,0}};

        while(!minHeap.isEmpty()) {
            int[] temp = minHeap.poll();

            int curHeight = temp[0];
            int curRow = temp[1];
            int curCol = temp[2];

            if(curRow == m-1 && curCol == n-1) {
                return curHeight;
            }

            for(int[] dir : dirs) {
                int x = curRow + dir[0];
                int y = curCol + dir[1];

                if(x>=0 && x<m && y>=0 && y<n && visited[x][y] == false) {
                    visited[x][y] = true;
                    minHeap.add(new int[]{Math.max(curHeight, grid[x][y]), x, y});
                }
            }
        }

        return -1;
    }
}

```

**1976. Number of Ways to Arrive at Destination**

```
/* 
This Problem is same as Dijkstra's algortim. It's  
just modulo(10^9 + 7) in the given input is making it slightly complex. stick to the same logic for the Dijsktra's algo 
and you will easily come up with the solution in the interview. 
*/

class Solution {
    public int countPaths(int n, int[][] roads) {
        Map<Integer, Map<Integer, Long>> map = new HashMap<>();

        for(int i=0; i<roads.length; i++) {
            map.putIfAbsent(roads[i][0], new HashMap<>());
            map.putIfAbsent(roads[i][1], new HashMap<>());
        
            map.get(roads[i][0]).put(roads[i][1], (long)roads[i][2]);
            map.get(roads[i][1]).put(roads[i][0], (long)roads[i][2]);
        }

        int[] ways = new int[n];
        long[] distance = new long[n];
        Arrays.fill(distance, Long.MAX_VALUE/2);
        Arrays.fill(ways, 0);

        ways[0] = 1;
        distance[0] = 0;

        int mod = (int)(1e9+7);

        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a,b) -> a[0] - b[0]);
        minHeap.add(new int[]{0,0,0});

        while(!minHeap.isEmpty()) {
            int[] temp = minHeap.poll();

            long curDist = temp[0];
            int curNode = temp[1];
            int endNode = temp[2];

            for(int next : map.getOrDefault(curNode, new HashMap<>()).keySet()) {
                long nextDist = map.get(curNode).get(next);

                if(curDist + nextDist < distance[next]) {
                    distance[next] = curDist + nextDist;
                    minHeap.add(new int[]{(int)(curDist + nextDist), next, endNode});
                    ways[next] = ways[curNode];

                } else if(curDist + nextDist == distance[next]) {
                    ways[next] = (ways[next] + ways[curNode]) % mod; 
                }
            }
        }

        return ways[n-1] % mod;
    }
}

```

**1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance**

```
class Solution {
    public int findTheCity(int n, int[][] edges, int distanceThreshold) {
        int result = -1;
        int minRechable = Integer.MAX_VALUE;

        Map<Integer, Map<Integer, Integer>> map = new HashMap<>();

        for(int i=0; i<edges.length; i++) {
            map.putIfAbsent(edges[i][0], new HashMap<>());
            map.putIfAbsent(edges[i][1], new HashMap<>());

            map.get(edges[i][0]).put(edges[i][1], edges[i][2]);
            map.get(edges[i][1]).put(edges[i][0], edges[i][2]);
        }

        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a,b) -> a[0] - b[0]);

        for(int i=0; i<n; i++) {
            int[] distance = new int[n];
            minHeap.add(new int[]{0,i});

            Arrays.fill(distance, Integer.MAX_VALUE/2);
            distance[i] = 0;
            
            while(!minHeap.isEmpty()) {
                int[] temp = minHeap.poll();
                
                int curDist = temp[0];
                int curNode = temp[1];

                for(int next : map.getOrDefault(curNode, new HashMap<>()).keySet()) {
                    int nextDist = map.get(curNode).get(next);

                    if(curDist + nextDist < distance[next]) {
                        distance[next] = curDist + nextDist;
                        minHeap.add(new int[]{curDist + nextDist, next});
                    }   
                }
            }
            int rechable = 0;

            for(int k=0; k<distance.length; k++) {
                if(distance[k] <= distanceThreshold) {
                    distance[k] = distanceThreshold;
                    rechable++;
                }
            }

            if(minRechable >= rechable) {
                minRechable = rechable;
                result = i;
            }
        }

        return result;
    }
}
```