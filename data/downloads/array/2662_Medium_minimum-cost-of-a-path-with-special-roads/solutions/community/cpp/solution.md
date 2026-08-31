# C++||Solutions🚀||Easy to understand✔||Full Explanaiton🚀||Line by Line✔✔

**Author:** shubh-30
**Votes:** 63
**Link:** [https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3468447/](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads/solutions/3468447/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach involves using Dijkstra's algorithm to find the minimum cost path from the starting point to the target point. Initially, we set the distances to all the special roads from the starting point, and push them into a priority queue with the current distance as the priority. We then start extracting the minimum element from the priority queue and check if its distance is equal to the distance stored in the vector. If not, we ignore it and continue with the next element.

We calculate the distance to the target point via the current element and update the answer if it is less than the current answer. We then iterate over all the special roads and update their distance if it is less than the previously stored distance. We then push this special road onto the priority queue with the new distance as the priority.

We repeat this process until the priority queue is empty and return the final answer.

# Approach
<!-- Describe your approach to solving the problem. -->
The given problem can be solved using Dijkstra's algorithm. We can think of each special road as a node in the graph and the weight of each edge as the cost of traveling between the two special roads. To compute the cost of traveling from start to target, we can first calculate the cost of traveling from the start to each special road and then use these costs to update the cost of traveling to other special roads. Finally, we can add the cost of traveling from the target to the special road with minimum total cost.

Specifically, we can first initialize a vector d of distances from the start to each special road. For each special road i, we can calculate d[i] as the sum of the Manhattan distance between the start and the special road and the cost of the special road. We can then use a min-heap to store the distances and the indices of the special roads. We can start with the distances and indices of the special roads as the source and use Dijkstra's algorithm to update the distances and indices of the special roads. To update the distance of a special road i, we can consider all the special roads that are connected to it and update their distances if the distance to i plus the weight of the edge connecting i and another special road is less than their current distances. Finally, we can add the distance from the target to the special road with minimum total cost to the total cost.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n^2 log n), where n is the number of special roads. The reason for this time complexity is the loop that iterates over all the special roads and the priority queue operations, which have a time complexity of O(log n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is O(n), which is due to the space occupied by the distance array. The priority queue takes O(n) space as well. Thus, the overall space complexity is O(n).

# Code
```
// Define a min-heap priority queue to store pairs of distance and index
template<class T> using min_pq = priority_queue<T, vector<T>, greater<T>>;

class Solution {
public:
    
    int minimumCost(vector<int>& start, vector<int>& target, vector<vector<int>>& specialRoads) {
        
        const int INF = 1e9+10;
        int n = specialRoads.size();

        // Initialize the distance of each special road to infinity
        vector<int> d(n, INF);

        // Create a priority queue and push the distance from start to each special road
        min_pq<pair<int, int>> pq;
        for (int i = 0; i < n; i++) {
            d[i] = abs(start[0] - specialRoads[i][0]) + abs(start[1] - specialRoads[i][1]) + specialRoads[i][4];
            pq.push({d[i], i});
        }
        
        // Initialize the answer with the manhattan distance between start and target
        int ans = abs(start[0] - target[0]) + abs(start[1] - target[1]);

        // Continue to search for the shortest path until the priority queue is empty
        while (pq.size()) {
            // Pop the pair with smallest distance
            auto [d_c, c] = pq.top(); pq.pop();

            // If the distance stored in d is not equal to the current distance d_c, skip this node
            if (d_c != d[c]) continue;

            // Update the answer by finding the distance from the current special road to the target
            ans = min(ans, d_c + abs(target[0] - specialRoads[c][2]) + abs(target[1] - specialRoads[c][3]));

            // For each special road that can be reached from the current special road, update its distance
            for (int nxt = 0; nxt < n; nxt++) {
                int w = abs(specialRoads[c][2] - specialRoads[nxt][0]) + abs(specialRoads[c][3] - specialRoads[nxt][1]) + specialRoads[nxt][4];
                if (d_c + w < d[nxt]) {
                    d[nxt] = d_c + w;
                    pq.push({d[nxt], nxt});
                }
            }
        }

        // Return the minimum cost of reaching the target
        return ans;
    }
};

```