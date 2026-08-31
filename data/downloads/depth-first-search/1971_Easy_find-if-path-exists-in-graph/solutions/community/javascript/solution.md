# ✅Beats 100% - Explained with [ Video ] - C++/Java/Python/JS - DFS

**Author:** lancertech6
**Votes:** 65
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5052927/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5052927/)

---

![Screenshot 2024-04-21 101237.png](./images/0.png)

# YouTube Video Explanation:

**If you want a video for this question please write in the comments**

<!-- https://www.youtube.com/watch?v=ujU-jeO1v-k -->

https://youtu.be/TZj_0ISTSX0

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1800 Subscribers*
*Current Subscribers: 1732*

---


# Intuition:

The problem asks whether there exists a valid path from a given source vertex to a destination vertex in a bi-directional graph. We can approach this problem by traversing the graph using depth-first search (DFS) or breadth-first search (BFS) algorithms to explore all possible paths from the source to the destination.

# Approach:
1. **Initialize**: Create a boolean array `visited` of size `n` to keep track of visited vertices. Mark the source vertex as visited initially.
2. **Traversal Loop**: Use a while loop that continues until there are no more changes in the visited vertices (`flag` remains false).
3. **Check Edges**: Within each iteration of the loop, iterate through the edges array. For each edge, if one vertex is visited and the other is not, mark both vertices as visited and set `flag` to true.
4. **Destination Check**: After updating the visited array, check if the destination vertex is marked as visited. If so, return true as a valid path exists.
5. **Return**: If the while loop completes without finding a valid path to the destination, return false.

# Complexity Analysis:
- **Time Complexity:** The time complexity is `O(n + E)`, where n is the number of vertices and E is the number of edges. This is because we traverse each vertex once and iterate through the edges array to update visited vertices.
- **Space Complexity:** The space complexity is `O(n)` for the visited array and O(E) for storing the edges information, leading to a total space complexity of `O(n + E)`.

Overall, this solution efficiently determines the existence of a valid path from the source to the destination in the given bi-directional graph.

# Code
```java []
class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        if(edges.length == 0) return true;
        boolean[] visited = new boolean[n];
        boolean flag = true;
        visited[source] = true;
    while(flag){
        flag = false;
        for(int[] edge : edges){
            if(visited[edge[0]] != visited[edge[1]]){
                visited[edge[0]] = true;
                visited[edge[1]] = true;
                flag = true;
            }
            if(visited[destination]) return true;
        }
    }
    return false;
    }
}
```
```C++ []
#include <vector>
using namespace std;

class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        if (n == 1) return true;
        vector<bool> visited(n, false);
        visited[source] = true;
        bool flag = true;
        while (flag) {
            flag = false;
            for (const auto& edge : edges) {
                if (visited[edge[0]] != visited[edge[1]]) {
                    visited[edge[0]] = true;
                    visited[edge[1]] = true;
                    flag = true;
                }
                if (visited[destination]) return true;
            }
        }
        return false;
    }
};
```
```Python []
class Solution(object):
    def validPath(self, n, edges, source, destination):
        if n == 1:
            return True  # Special case where there is only one vertex
        visited = [False] * n
        visited[source] = True
        flag = True
        while flag:
            flag = False
            for edge in edges:
                if visited[edge[0]] != visited[edge[1]]:
                    visited[edge[0]] = True
                    visited[edge[1]] = True
                    flag = True
                if visited[destination]:
                    return True
        return False
```
```JavaScript []
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (n === 1) return true; // Special case where there is only one vertex
    let visited = new Array(n).fill(false);
    visited[source] = true;
    let flag = true;
    while (flag) {
        flag = false;
        for (const edge of edges) {
            if (visited[edge[0]] !== visited[edge[1]]) {
                visited[edge[0]] = true;
                visited[edge[1]] = true;
                flag = true;
            }
            if (visited[destination]) return true;
        }
    }
    return false;
};
```
![upvote.png](./images/1.png)

