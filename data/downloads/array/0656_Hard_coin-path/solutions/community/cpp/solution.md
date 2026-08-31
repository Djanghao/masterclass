# Dijkstra's Algorithm (C++)

**Author:** jatin_dholakia
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-path/solutions/4080123/](https://leetcode.com/problems/coin-path/solutions/4080123/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Starting from index i, we can visit atmost i + max_jumps places. Visiting each place has different cost, this gives intuition of using Dijkstra's Algorithm. I consider each coin's index as node and its value as edge.

# Approach
<!-- Describe your approach to solving the problem. -->
Initialize distance and priority queue as normal Dijkstra's algorithm. An extra variable for path of each node needs to be maintained.
path[i] - Lexicographically shortest path to reach coin i
distance[i] - Smallest amount needed to reach coin i
pq - Stores pair of {distance, idx} for each coin
Normal dijkstra's algorithm is used to find distance and update priority queue
When a smaller distance for a neighboring node is observed, its current path is replaced by the path of node we're processing.
If the distance is same, we update the path to lexicographically minimum of node's current path and new_path found by visiting this node. This is taken care by std::min which returns lexicographically smallest vector.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
n - coins.size()
m - max_jump
So E = n * m and V = n
$$O(n*m*log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ for distance
$$O(n)$$ for Priority Queue
Space used for path is not extra space, so not counted in auxilary space complexity
Overall space complexity $$O(n)$$

# Code
```
class Solution {
public:
    vector<int> cheapestJump(vector<int>& coins, int max_jump) {
        int n = coins.size();
        vector<int> distance(n, INT_MAX);
        distance[0] = 0;
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq; // {distance, idx}
        vector<vector<int>> path(n);
        path[0].push_back(1);
        pq.push({0, 0});
        while (!pq.empty()) {
            int curr_distance = pq.top().first;
            int idx = pq.top().second;
            pq.pop();
            for (int i = idx + 1; i <= min(n - 1, idx + max_jump); i++) {
                if (coins[i] != -1) {
                    if (distance[i] > curr_distance + coins[i]) {
                        distance[i] = curr_distance + coins[i];
                        path[i] = path[idx];
                        path[i].push_back(i + 1);
                        pq.push({distance[i], i});
                    } else if (distance[i] == curr_distance + coins[i]) {
                        vector<int> new_path = path[idx];
                        new_path.push_back(i + 1);
                        path[i] = min(path[i], new_path);
                    }
                }
            }
        }
        return path[n - 1];
    }
};
```