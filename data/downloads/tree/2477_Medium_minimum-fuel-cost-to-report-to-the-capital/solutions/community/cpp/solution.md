# [C++, Java, Python3] Simple DFS O(n)

**Author:** tojuna
**Votes:** 186
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2831676/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/2831676/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to track the number of people that reach each node and divide that by the number of seats per car, this will tell us the number of cars required to take us to the node that is closer to node`0`

# Approach
DFS
* Imagine you are at a leaf node, you move towards `0`. There will be only 1 person in the car (you)
* Now let's say you're somewhere in the middle of the tree, with a car of size 5. You have 3 children nodes. Let's say each child node brings 1 car of 3 people. So a total of 3 * 3 = 9 people. Including you there are 10 people now. Now you have 3 cars from the child nodes and one car of your own. You actually need just 10 / 5 = 2 cars. You take 2 cars and move towards `0`

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
**Python 3**
```
    def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:
        graph = defaultdict(list)
        for x, y in roads:
            graph[x].append(y)
            graph[y].append(x)
        self.ans = 0
        
        def dfs(i, prev, people = 1):
            for x in graph[i]:
                if x == prev: continue
                people += dfs(x, i)
            self.ans += (int(ceil(people / seats)) if i else 0)
            return people
        
        dfs(0, 0)
        return self.ans
```

**C++**
```
long long ans = 0; int s;
long long minimumFuelCost(vector<vector<int>>& roads, int seats) {
    vector<vector<int>> graph(roads.size() + 1); s = seats;
    for (vector<int>& r: roads) {
        graph[r[0]].push_back(r[1]);
        graph[r[1]].push_back(r[0]);
    }
    dfs(0, 0, graph);
    return ans;
}
int dfs(int i, int prev, vector<vector<int>>& graph, int people = 1) {
    for (int& x: graph[i]) {
        if (x == prev) continue;
        people += dfs(x, i, graph);
    }
    if (i != 0) ans += (people + s - 1) / s;
    return people;
}
```

**Java**
```
long ans = 0; int s;
public long minimumFuelCost(int[][] roads, int seats) {
    List<List<Integer>> graph = new ArrayList(); s = seats;
    for (int i = 0; i < roads.length + 1; i++) graph.add(new ArrayList());
    for (int[] r: roads) {
        graph.get(r[0]).add(r[1]);
        graph.get(r[1]).add(r[0]);
    }
    dfs(0, 0, graph);
    return ans;
}
private int dfs(int i, int prev, List<List<Integer>> graph) {
    int people = 1;
    for (int x: graph.get(i)) {
        if (x == prev) continue;
        people += dfs(x, i, graph);
    }
    if (i != 0) ans += (people + s - 1) / s;
    return people;
}
```