# Clean Codes🔥🔥|| Full Explanation✅|| D.F.S✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 34
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3341780/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3341780/)

---

# Intuition :
- Return the length of the longest cycle in the graph. If no cycle exists, return `-1`.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach : Depth First Search
- Here we are using a modified depth-first search algorithm to visit each node in the graph. 
- We keep track of the time at which each node is visited and store it in an array called `timeVisited`. 
- If a node is visited again, we skip it because it has already been processed.
- If the current node is visited again, and the time at which it was first visited is greater than or equal to the start time of the current traversal, it means that there is a cycle in the graph that includes the current node. 
- The length of the cycle is the difference between the current time and the time at which the node was first visited. 
- We also keep track of the maximum cycle length found so far and return it as the result.
<!-- Describe your approach to solving the problem. -->

# Complexity :
- Time complexity : O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
# Codes [C++ |Java |Python3] : With Comments
```Java []
class Solution {
  public int longestCycle(int[] edges) {
    int ans = -1; // Initialize the answer to -1
    int time = 1; // Initialize the current time step to 1
    int[] timeVisited = new int[edges.length]; // Initialize an array to store the time at which each node was first visited

    // Iterate through each node in the graph
    for (int i = 0; i < edges.length; ++i) {
      if (timeVisited[i] > 0) // If the node has already been visited, skip it
        continue;
      final int startTime = time; // Record the start time of the current traversal
      int u = i; // Initialize the current node to the ith node
      // Traverse the graph until the end of the path is reached or a visited node is encountered
      while (u != -1 && timeVisited[u] == 0) {
        timeVisited[u] = time++; // Record the current time step and increment time
        u = edges[u]; // Move to the next node in the path
      }
      // If a cycle is found that includes the current node, update the answer
      if (u != -1 && timeVisited[u] >= startTime)
        ans = Math.max(ans, time - timeVisited[u]);
    }

    return ans; // Return the length of the longest cycle found
  }
}

```
```C++ []
class Solution {
 public:
  int longestCycle(vector<int>& edges) {
    int ans = -1; // Initialize the answer to -1
    int time = 1; // Initialize the current time step to 1
    vector<int> timeVisited(edges.size()); // Initialize a vector to store the time at which each node was first visited

    // Iterate through each node in the graph
    for (int i = 0; i < edges.size(); ++i) {
      if (timeVisited[i]) // If the node has already been visited, skip it
        continue;
      const int startTime = time; // Record the start time of the current traversal
      int u = i; // Initialize the current node to the ith node
      // Traverse the graph until the end of the path is reached or a visited node is encountered
      while (u != -1 && !timeVisited[u]) {
        timeVisited[u] = time++; // Record the current time step and increment time
        u = edges[u]; // Move to the next node in the path
      }
      // If a cycle is found that includes the current node, update the answer
      if (u != -1 && timeVisited[u] >= startTime)
        ans = max(ans, time - timeVisited[u]);
    }

    return ans; // Return the length of the longest cycle found
  }
};

```
```Python []
class Solution:
  def longestCycle(self, edges: List[int]) -> int:
    ans = -1  # Initialize the answer to -1
    time = 1  # Initialize the current time step to 1
    timeVisited = [0] * len(edges)  # Initialize a list to store the time at which each node was first visited

    # Iterate through each node in the graph
    for i, edge in enumerate(edges):
      if timeVisited[i]:  # If the node has already been visited, skip it
        continue
      startTime = time  # Record the start time of the current traversal
      u = i  # Initialize the current node to the ith node
      # Traverse the graph until the end of the path is reached or a visited node is encountered
      while u != -1 and not timeVisited[u]:
        timeVisited[u] = time  # Record the current time step
        time += 1  # Increment time
        u = edges[u]  # Move to the next node in the path
      # If a cycle is found that includes the current node, update the answer
      if u != -1 and timeVisited[u] >= startTime:
        ans = max(ans, time - timeVisited[u])

    return ans  # Return the length of the longest cycle found

```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)
