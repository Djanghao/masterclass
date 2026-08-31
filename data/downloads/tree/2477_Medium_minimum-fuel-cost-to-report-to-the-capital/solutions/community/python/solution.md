# Clean Codes🔥🔥|| Full Explanation✅|| DFS✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 147
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3173765/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3173765/)

---

# Intuition :
- Here we have to find the minimum fuel cost to transport people from a city (represented by node 0) to all other cities (represented by other nodes) in a road network.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach :
- So we are using a depth-first search (DFS) algorithm to traverse the graph representing the road network. 
- The graph is represented as an array of linked lists, where each element in the array represents a node in the graph and the linked list contains the neighboring nodes of that node.
- In the DFS function, the number of people in each city is calculated and stored in the people variable. This is done by starting from the current node (u) and visiting all its neighbors (v), and adding the number of people in each neighbor to people. 
- The number of cars needed to transport the people is then calculated by dividing the number of people by the number of seats in each car, rounded up to the nearest integer. 
- The cost is the number of cars needed, and it is added to the ans variable, which represents the total cost. The value of ans is returned as the result of the function.
- The minimumFuelCost function takes in two parameters: roads, which is an array of roads represented as pairs of nodes, and seats, which is the number of seats in each car. 
- The function sets up the graph representation of the road network, calls the DFS function to calculate the cost, and returns the result.
<!-- Describe your approach to solving the problem. -->
# Explanation to Approach :
- Our goal is to calculate the minimum amount of fuel needed to transport people from one city (city 0) to all the other cities in a road network. 
- So we are using a depth-first search algorithm to traverse the graph representation of the road network and counting the number of people in each city. 
- The number of cars needed to transport the people from one city to another is calculated by dividing the number of people by the number of seats in each car, rounded up to the nearest integer. 
- The total fuel cost is calculated as the sum of the number of cars needed to transport people between all cities.

# Complexity
- Time complexity : O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
# Codes [C++ |Java |Python3] :
```C++ []
class Solution {
 public:
  long long minimumFuelCost(vector<vector<int>>& roads, int seats) {
    long long ans = 0;
    vector<vector<int>> graph(roads.size() + 1);

    for (const vector<int>& road : roads) {
      const int u = road[0];
      const int v = road[1];
      graph[u].push_back(v);
      graph[v].push_back(u);
    }

    dfs(graph, 0, -1, seats, ans);
    return ans;
  }

 private:
  int dfs(const vector<vector<int>>& graph, int u, int prev, int seats,
          long long& ans) {
    int people = 1;
    for (const int v : graph[u]) {
      if (v == prev)
        continue;
      people += dfs(graph, v, u, seats, ans);
    }
    if (u > 0)
      // # of cars needed = ceil(people / seats)
      ans += (people + seats - 1) / seats;
    return people;
  }
};
```
```Java []
class Solution {
  public long minimumFuelCost(int[][] roads, int seats) {
    List<Integer>[] graph = new List[roads.length + 1];

    for (int i = 0; i < graph.length; ++i)
      graph[i] = new ArrayList<>();

    for (int[] road : roads) {
      final int u = road[0];
      final int v = road[1];
      graph[u].add(v);
      graph[v].add(u);
    }

    dfs(graph, 0, -1, seats);
    return ans;
  }

  private long ans = 0;

  private int dfs(List<Integer>[] graph, int u, int prev, int seats) {
    int people = 1;
    for (final int v : graph[u]) {
      if (v == prev)
        continue;
      people += dfs(graph, v, u, seats);
    }
    if (u > 0)
      // # of cars needed = ceil(people / seats)
      ans += (people + seats - 1) / seats;
    return people;
  }
}
```
```Python3 []
class Solution:
  def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:
    ans = 0
    graph = [[] for _ in range(len(roads) + 1)]

    for u, v in roads:
      graph[u].append(v)
      graph[v].append(u)

    def dfs(u: int, prev: int) -> int:
      nonlocal ans
      people = 1
      for v in graph[u]:
        if v == prev:
          continue
        people += dfs(v, u)
      if u > 0:
        # # of cars needed.
        ans += int(math.ceil(people / seats))
      return people

    dfs(0, -1)
    return ans
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)
